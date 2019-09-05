const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const resolvers = {
  Mutation: {
    // fetch username and password from arguments
    register: async (parent, { username, password }, ctx, info) => {
      // hash the password using the bcryptjs
      const hashedPassword = await bcrypt.hash(password, 10)
      // store detail in Prisma and return a user
      const user = await ctx.prisma.createUser({
        username,
        password: hashedPassword
      })
      return user
    },
    login: async (parent, { username, password }, ctx, info) => {
      const user = await ctx.prisma.user({ username })

      if (!user) {
        throw new Error('Invalid Login')
      }

      const passwordMatch = await bcrypt.compare(password, user.password)

      if (!passwordMatch) {
        throw new Error('Invalid Login')
      }

      const token = jwt.sign(
        {
          id: user.id,
          username: user.email
        },
        'my-secret-from-env-file-in-prod',
        {
          expiresIn: '1d' // token life
        }
      )
      return {
        token,
        user
      }
    }
  }
}

module.exports = resolvers

const bcrypt = require('bcryptjs')

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
    }
  }
}

module.exports = resolvers

# Boilerplate Prisma Apollo Server 
This repository provides a starting point to create an Apollo-server and [Prisma](https://prisma.io) api-layer to easily allow JWT authenticated user interactions from frontend applications to a database.   

## Prerequisites  
You should have Docker, Prisma CLI tools,  

## Getting started  
1. Clone the repo  
2. Run `npm i` to install dependencies from npm.  
3. Start prisma and database instance using `docker-compose up -d` (Run `deploy -n` script to use prisma demo servers)  
4. Deploy the datamodel using `prisma deploy`  
5. Start the server using `npm run dev & npm run start`  

_(Use npm run start to run without server monitor)_  

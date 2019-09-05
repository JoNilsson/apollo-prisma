# Boilerplate Prisma Apollo Server 
This repository provides a starting point to create an Apollo-server and [Prisma](https://prisma.io) api-layer to easily allow JWT authenticated user interactions from frontend applications to a database.   

## Prerequisites  
You should have a [Docker](https://hub.docker.com) account and have the Docker tools setup and daemon running.  
[Prisma](https://prisma.io) CLI tools  
```sh
$ brew tap prisma/prisma  
$ brew install prisma  
```  

or via NPM;  

```sh
$ npm i prisma -g
```  


## Getting started  
1. Clone the repo  
2. Run `npm i` to install dependencies from npm.  
3. Start prisma and database instance using `docker-compose up -d`  
 _(Run `deploy -n` script to use prisma demo servers)_  
4. Deploy the datamodel using `prisma deploy`  
5. Start the server using `npm run dev & npm run start`  

_(Use `npm run start` to run without server monitor)_  

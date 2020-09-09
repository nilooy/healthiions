# 🩺🩺🩺 Healthiions 🩺🩺🩺

[![NPM](https://img.shields.io/badge/node%40latest-%3E%3D%206.0.0-brightgreen)](https://www.npmjs.com/package/holdmyui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> The app is for the Health workers and organizations. I have started the project a year back but couldn't progress for my work pressure. Looking for a contributor who are willing to extend this app to be a wonderful modern application for health workers and organizations.

## Install Local

```bash
npm i -g concurrently

npm run setup
```

## Run Locally (to start React and Node in the same time with concurrently)

```bash
npm run dev
```

> the react will be up on port 3000 if it's free but in case you are seeing a blank screen, just refresh.
> the problem is with the tailwind config

## Structure: Stack/Tech

### MERN

    - Mongo
    - Express
    - React.js
    - Node.js

### ODM:

    - Mongoose

### AUTH

    - JWT Web Token
    - Localstorage
    - OAuth (Need to be implemented)

### UI

    - Ant Design
    - Tailwind.css

> The app has two main folders 'server' & 'client' > 'web' + app (future)

### Server

> Express.js have been used for the server and routes.

- core: A simple server class to start the server with routes and middleware in it
- log: All logs generated by morgan package save there
- src:
  - helpers: Some helper functions such as preparing error messages
  - services: It's the folder with all services. every service may contain files like controller, model, routes, validation and more.

### There's a service called crud that can be extended to use in other controllers to make simple crud operations.

### After adding a new service, that should be called in the routes file located in the root directory of server

### Client

> It bootstraped with CRA and follows the general structure. each components have it's own folder. the folder called pages contain all the Main component added to the router. Needed to be seprated based on the user roles in future.

> tailwind file should be cleaned before pushing to github other wise there's a tons of unused css as the development version doesn't have pursing on.

## Contribution needed!

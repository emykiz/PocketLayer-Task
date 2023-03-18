# Node.js – JWT Authentication & Authorization example with JSONWebToken & Sequelize

## User Registration, User Login and Authorization process.
The diagram shows flow of how we implement User Registration, User Login and Authorization process.

![jwt-token-authentication-node-js-example-flow](jwt-token-authentication-node-js-example-flow.png)

For more detail, please visit:
> [Node.js JWT Authentication & Authorization example](https://bezkoder.com/node-js-jwt-authentication-mysql/)

You may need to implement Refresh Token:

![jwt-refresh-token-node-js-example-flow](jwt-refresh-token-node-js-example-flow.png)

> [Node.js JWT Refresh Token example](https://bezkoder.com/jwt-refresh-token-node-js/)

Working with Front-end:
> [Vue](https://www.bezkoder.com/jwt-vue-vuex-authentication/)

> [Angular 8](https://www.bezkoder.com/angular-jwt-authentication/) / [Angular 10](https://www.bezkoder.com/angular-10-jwt-auth/) / [Angular 11](https://www.bezkoder.com/angular-11-jwt-auth/) / [Angular 12](https://www.bezkoder.com/angular-12-jwt-auth/) / [Angular 13](https://www.bezkoder.com/angular-13-jwt-auth/)

> [React](https://www.bezkoder.com/react-jwt-auth/) / [React + Redux](https://www.bezkoder.com/react-redux-jwt-auth/)

## More Practice:
> [Build Node.js Rest APIs with Express, Sequelize & MySQL](https://bezkoder.com/node-js-express-sequelize-mysql/)

> [Server side Pagination in Node.js with Sequelize and MySQL](https://bezkoder.com/node-js-sequelize-pagination-mysql/)

> [Node.js Express File Upload Rest API example](https://bezkoder.com/node-js-express-file-upload/)

> [Node.js Express File Upload with Google Cloud Storage example](https://bezkoder.com/google-cloud-storage-nodejs-upload-file/)

> [Node.js JWT Authentication & Authorization example with MongoDB](https://bezkoder.com/node-js-mongodb-auth-jwt/)

Associations:
> [Sequelize Associations: One-to-Many Relationship example](https://bezkoder.com/sequelize-associate-one-to-many/)

> [Sequelize Associations: Many-to-Many Relationship example](https://bezkoder.com/sequelize-associate-many-to-many/)

Deployment:
> [Deploying/Hosting Node.js app on Heroku with MySQL database](https://bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/)

Integration on same Server/Port:
> [Integrate Vue with Node.js Express](https://www.bezkoder.com/serve-vue-app-express/)

> [Integrate Angular 8 with Node.js Express](https://www.bezkoder.com/integrate-angular-8-node-js/)

> [Integrate Angular 10 with Node.js Express](https://www.bezkoder.com/integrate-angular-10-node-js/)

> [Integrate Angular 12 with Node.js Express](https://www.bezkoder.com/integrate-angular-12-node-js/)

> [Integrate React with Node.js Express](https://www.bezkoder.com/integrate-react-express-same-server-port/)

## Project setup
```
npm install
```

### Run
```
if running on localhost

on your xammp live server.

create a database and change the database name in `app/config/db.config.js`.

Then type the command to run the code:
node server.js or npm start
```

## Project Structure

```
app\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--server.js          # Express app
```

## Error Handling

The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error.

```javascript

  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }
  });


.catch(err => {
      res.status(500).send({ message: err.message });
    });

```



```javascript
jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
});
```

## Authentication

To require authentication for certain routes, you can use the `auth` routes.

```javascript
const express = require('express');
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const router = express.Router();

router.post(`/api/auth/signup`);
router.post(`api/auth/signin`)
```

## Testing Route on Localhost
using postman - call the endpoint with a POST request


**signup route**
`http://localhost:8080/api/auth/signup`
{
    "username": "Abbey Salami",
    "email": "heba@gmail.com",
    "password": "123456"
}

**signin route**
`http://localhost:8080/api/auth/sigin`
{
    "username": "Abbey Salami",
    "password": "123456"
}

These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

**Generating Access Tokens**:

An access token can be generated by making a successful call to the register (`POST /api/auth/signup`) or login (`POST /api/auth/signin`) endpoints. The response of these endpoints also contains refresh tokens (explained below).

An access token is valid for 24 hours. You can modify this expiration time by changing the `JWT_ACCESS_EXPIRATION_MINUTES` environment variable in the .env file.

## Database connection
mysql database

credentials can be found in `app/config/db.config`

**When running on localhost**:
change the credentials to your localhost address abd database name

```javascript
  HOST: "localhost", //your hostname
  USER: "root",      //username
  PASSWORD: "",     //password
  DB: "pocket_db",   //database name
```
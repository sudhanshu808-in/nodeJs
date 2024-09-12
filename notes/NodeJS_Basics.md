
# Node.js and JavaScript Basics

## What is Node.js?

JavaScript alone is not typically used for backend development as it lacks certain capabilities. To address this, Ryan Dahl used the V8 engine from the Chrome browser (written in C++) to create an environment where JavaScript can be executed for backend operations. This environment is called **Node.js**, which acts as a JavaScript runtime environment, allowing JavaScript to be used for server-side development.

### Node.js Architecture
- All requests → Event Queue → Event Loop

## NPM (Node Package Manager)

NPM is like an app store for code, where we can download code packages.

- **npm init** → Creates a `package.json` file, which contains all the project details.
- To use any module, use the `require` function.
  ```js
  const fs = require('fs');
  ```
  Now, we can use all the functionalities provided by the `fs` module.

### Installing and Managing Packages with NPM

- **Install a package**: `npm i package_name`
- **Uninstall a package**: `npm uninstall package_name`
- **Install a specific version**: `npm i package_name@version`

### Modules and Packages
- **Modules**: Packages pre-installed in Node.js.
- **Packages**: Packages installed from NPM.

### Dependencies
- **Dependencies**: Packages and their dependencies required for the project.
- **DevDependencies**: Packages used only during development, not needed after deployment.

### Running NPM Commands
- **npm start** vs **npm run start**: 
  - `npm start` is used for predefined commands that are recognized by the operating system.
  - `npm run start` is used for custom commands defined in the script section of `package.json`.

## Express.js

Express.js is an NPM package that provides a framework for handling server-side operations.

- **Routing in Express.js**: Anything after the domain name is a route, e.g., `www.youtube.com/channels`.
  ```js
  app.get("/", function(req, res) {
      res.send("I am the one");
  });
  ```

- **Middleware in Express.js**: Middleware is a function that has access to the request and response objects and can modify them or terminate the request-response cycle.
  ```js
  app.use(function(req, res, next) {
      console.log("Middleware 1");
      next();  // Passes the request to the next middleware or route handler.
  });
  ```

### Error Handling
Error handling should be done at the end of the program. Use the default error handler from Express documentation.

### Cookies
Cookies are small pieces of data stored on the client-side and sent to the server with each request, allowing the server to recognize the user.

### Dynamic Routing
In some cases, only a part of the route changes, which is known as dynamic routing. This eliminates the need to create separate routes for similar endpoints.

## HTTP Protocol

HTTP (Hypertext Transfer Protocol) is a set of rules that governs data exchange over the internet.

### Additional Resources
![Node.js Architecture](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)

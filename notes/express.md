## Middleware in Node.js and Express

#### Middleware is a key concept in Express.js (and web development in general). It refers to functions that execute during the lifecycle of a request to an Express.js app. Middleware functions can perform a variety of tasks, such as executing code, modifying request and response objects, ending the request-response cycle, or calling the next middleware function in the stack.

### Types of Middleware

###### Application-Level Middleware: 
These are bound to an instance of the Express application using app.use() or app.METHOD(), where METHOD is the HTTP method.

const express = require('express')
const app = express()

// Example of application-level middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

###### Router-Level Middleware: 
These are bound to an instance of express.Router().

const router = express.Router()

// Example of router-level middleware
router.use((req, res, next) => {
    console.log('Router Time:', Date.now())
    next()
})

app.use('/route', router)

###### Error-Handling Middleware: 
Defined with four arguments. Use these for centralised error handling.

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

###### Built-In Middleware: 
Express comes with some built-in middleware, like express.static for serving static files.

app.use(express.static('public'))

###### Third-Party Middleware: 
Middleware provided by third-party libraries, like body-parser for parsing request bodies.

const bodyParser = require('body-parser')
app.use(bodyParser.json())

### How Middleware Works

#### Each middleware function has access to the request and response objects, and the next middleware function in the application’s request-response cycle. Middleware can:

###### Execute Any Code: 
For instance, logging each request.

###### Make Changes: 
Modify the request and response objects.

###### End the Request-Response Cycle: 
For instance, sending a response directly.

###### Call the Next Middleware: 
Using next(), to move to the next middleware function.

### Middleware Execution Flow

#### When a request hits your Express server, it goes through a stack of middleware functions. If one middleware doesn't send a response or call next(), the request will be left hanging. This makes understanding the flow and properly sequencing your middleware essential for a smooth-running app.

### Example of Middleware Sequence

#### Here's a simple example to illustrate how middleware works together:

const express = require('express')
const app = express()

// Middleware 1: Logging
app.use((req, res, next) => {
    console.log('Middleware 1: Request received')
    next()
});

// Middleware 2: Authorization Check
app.use((req, res, next) => {
    const authorised = true; // Example authorisation logic
    if (authorised) {
        console.log('Middleware 2: Authorised')
        next()
    } else {
        res.status(403).send('Forbidden')
    }
})

// Route Handler
app.get('/', (req, res) => {
    res.send('Hello, Middleware!')
})

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err)
    res.status(500).send('Internal Server Error')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

#### In this example, the request flows through Middleware 1, then Middleware 2, and finally reaches the route handler, provided it passes the authorisation check. Any errors encountered are caught by the error-handling middleware at the end.

#### Middleware makes Express.js both powerful and flexible, allowing you to build robust, maintainable web applications.

## Behind the Scenes of Express.js

### 1. Core Concepts:

###### Middleware: 
At the heart of Express is middleware, functions that handle requests at various stages in the request-response cycle.

###### Routing: 
Express uses a flexible routing system to define endpoints and their handlers.

### 2. Request Handling Pipeline:

#### When a request hits your Express app, it travels through a stack of middleware functions. Each middleware can:

###### Execute code

###### Modify the request and response objects

###### End the request-response cycle

###### Call the next middleware in the stack using next()

### 3. Express Router:

#### The router is a mini-application capable of performing middleware and routing functions. It's used to define route handlers for different HTTP methods and paths.

#### You can mount multiple routers to your application to modularize your routes.

### 4. Express Application:

#### The core application created by calling express() is an instance of an Express application. This instance handles requests by calling middleware functions in the order they are defined.

### 5. Request and Response Objects:

#### The req (request) object contains information about the HTTP request, such as headers, query parameters, and the request body.

#### The res (response) object is used to send responses to the client. It includes methods like res.send(), res.json(), and res.status().

### 6. Error Handling:

#### Middleware functions with four arguments (err, req, res, next) are used for error handling. Express's built-in error handler is called if no user-defined error handler is specified.

### 7. Asynchronous Handling:

#### Express supports asynchronous middleware and route handlers using Promises or async/await. This allows you to handle asynchronous code more cleanly and avoid callback hell.

### 8. Extensibility:

#### Express is highly extensible via third-party middleware and plugins. You can use middleware from npm or create your own to extend the functionality of your Express app.

#### Here's an example that ties some of these concepts together:

const express = require('express')
const app = express()

// Middleware
app.use(express.json()) // Built-in middleware for parsing JSON bodies

// Router
const router = express.Router()

router.get('/hello', (req, res) => {
    res.send('Hello World')
})

// Mount the router
app.use('/api', router)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

#### This example demonstrates setting up middleware, defining a simple route using the router, and handling errors with a middleware function.
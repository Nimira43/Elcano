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

## Middleware Execution Flow

#### When a request hits your Express server, it goes through a stack of middleware functions. If one middleware doesn't send a response or call next(), the request will be left hanging. This makes understanding the flow and properly sequencing your middleware essential for a smooth-running app.

## Example of Middleware Sequence

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
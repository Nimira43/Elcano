## Node Core Concepts

#### 1. Threading:

Node.js operates on a single-threaded event loop. Unlike traditional multi-threaded environments, where multiple threads can run in parallel, Node.js processes all requests on a single thread. It’s designed this way to avoid the complexity of managing multiple threads, which can lead to issues like deadlocks and race conditions.

#### 2. Event Loop:

The event loop is at the heart of Node.js. It’s a loop that continuously checks for and processes events. When a request comes in, it's placed in the event queue. The event loop picks up these requests one by one, processes them, and sends back responses. This design makes Node.js highly efficient for I/O operations because it doesn’t get blocked by waiting for a task to finish before moving on to the next one.

#### 3. Blocking and Non-Blocking Code:

###### Blocking Code: 
This type of code waits for an operation to complete before moving on to the next one. For instance, reading a file synchronously is blocking, as the program pauses until the file is fully read.

###### Non-Blocking Code: 
This type of code doesn’t wait for an operation to complete and can handle other tasks in the meantime. In Node.js, many functions, especially I/O operations, are non-blocking, using callbacks or promises.

Node.js uses non-blocking code to keep the server responsive and efficient, even under heavy load. This makes it ideal for real-time applications like chat servers, online games, and streaming services.

#### 4. updatedCode.js notes

###### Asynchronous File Operations with Promises:

const fs = require('fs').promises

###### Why: 
Using fs.promises allows us to handle file operations with async/await, making the code cleaner and easier to manage.

###### Handling Asynchronous Code with async/await:

return req.on('end', async () => {
    const parsedBody = Buffer.concat(body).toString()
    const message = parsedBody.split('=')[1]
    try {
        await fs.writeFile('message.txt', message)
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    } catch (err) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/plain')
        res.write('Internal Server Error')
        return res.end()
    }
})

###### Why: 
async/await makes the code easier to read and manage, especially for handling asynchronous operations like file writing. It also allows us to use try/catch blocks for error handling, making our code more robust and preventing uncaught errors.

###### Error Handling:

try {
    await fs.writeFile('message.txt', message)
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
} catch (err) {  
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.write('Internal Server Error')
    return res.end()
}

###### Why: 
This ensures that any errors during the file write operation are caught and handled gracefully, sending an appropriate response back to the client.

By incorporating these changes, the code becomes more modern, readable, and reliable. It’s also better prepared to handle any potential errors that might occur during execution.
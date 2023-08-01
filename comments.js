// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    // Parse the request containing file name
    var pathname = url.parse(req.url).pathname;
    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");
    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // Write the content of the file to response body
            res.write(data.toString());
        }
        // Send the response body
        res.end();
    });
});
// Listen on port 3000, IP defaults to

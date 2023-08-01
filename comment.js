// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = 8000;
var server = http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
            fs.readFile(__dirname + '/index.html', function(err, data) {
                if (err) return send404(res);
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data, 'utf8');
                res.end();
            });
            break;
        case '/index.html':
            fs.readFile(__dirname + '/index.html', function(err, data) {
                if (err) return send404(res);
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data, 'utf8');
                res.end();
            });
            break;
        case '/index.css':
            fs.readFile(__dirname + '/index.css', function(err, data) {
                if (err) return send404(res);
                res.writeHead(200, {
                    'Content-Type': 'text/css'
                });
                res.write(data, 'utf8');
                res.end();
            });
            break;
        case '/index.js':
            fs.readFile(__dirname + '/index.js', function(err, data) {
                if (err) return send404(res);
                res.writeHead(200, {
                    'Content-Type': 'text/javascript'
                });
                res.write(data, 'utf8');
                res.end();
            });
            break;
        case '/member.html':
            fs.readFile(__dirname + '/member.html', function(err, data) {
                if (err) return send404(res);
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data, 'utf8');
                res.end();
            });
            break;
        case '/member.css':
            fs.readFile(__dirname + '/member.css', function(err, data) {
                if (err) return send404(res);
                res.writeHead(200, {
                    'Content-Type': 'text/css'
                });
                res.write(data, 'utf8');
                res.end();
            });
            break;
        case '/member.js':
            fs.readFile(__dirname + '/member.js', function(err, data) {
                if (err) return send404(res);
                res.writeHead(200
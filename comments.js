// Create a web server 
// 1. Create a web server that listens on port 3000
// 2. When you visit the root URL, it should display "Hello, World!"
// 3. When you visit the URL /cats, it should display "Meow!"
// 4. When you visit the URL /dogs, it should display "Woof!"
// 5. When you visit the URL /cats_and_dogs, it should display "Dogs and cats living together...mass hysteria!!"

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;
    if (path === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, World!');
    } else if (path === '/cats') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Meow!');
    } else if (path === '/dogs') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Woof!');
    } else if (path === '/cats_and_dogs') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Dogs and cats living together...mass hysteria!!');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate...');
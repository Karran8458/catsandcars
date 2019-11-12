const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if(request.url === '/') {
        fs.readFile('./view/index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars") {
         fs.readFile('./view/cars.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
	else if (request.url === "/cats") {
         fs.readFile('./view/cats.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
	else if (request.url === "/cars/new") {
         fs.readFile('./view/newcar.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
	else if(request.url === '/images/car.jpeg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
        })
    }
	else if(request.url === '/images/cat.jpeg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
        })
    }
	else if(request.url === '/images/cats.jpeg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cats.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
        })
    }
	else if(request.url === '/images/lamborgini.jpeg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/lamborgini.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpeg'});
        response.write(contents);
        response.end();
        })
    }
	else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
        })
    }
    else {
        response.end('The URL requested is not available!!');
    }
});
server.listen(7077);
console.log("listening on port 7077");

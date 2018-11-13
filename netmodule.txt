NET MODULE:

Node.js net module is used to create both servers and clients.The Net module provides a way of creating TCP servers and TCP clients.
This module provides an asynchronous network wrapper and it can be imported using the following syntax.
var net = require("net")

METHODS:

1. net.createServer([options][, connectionListener])
   Creates a new TCP server. The connectionListener argument is automatically set as a listener for the 'connection' event.
2. net.connect(options[, connectionListener])
   A factory method, which returns a new 'net.Socket' and connects to the supplied address and port.
3. net.createConnection(options[, connectionListener])
   A factory method, which returns a new 'net.Socket' and connects to the supplied address and port.
4. net.connect(port[, host][, connectListener])
   Creates a TCP connection to port on host. If host is omitted, 'localhost' will be assumed. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
5. net.createConnection(port[, host][, connectListener])
   Creates a TCP connection to port on host. If host is omitted, 'localhost' will be assumed. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
6. net.connect(path[, connectListener])
   Creates Unix socket connection to path. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
7. net.createConnection(path[, connectListener])
   Creates Unix socket connection to path. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
8. net.isIP(input)
   Tests if the input is an IP address. Returns 0 for invalid strings, 4 for IP version 4 addresses, and 6 for IP version 6 addresses.
9. net.isIPv4(input)
   Returns true if the input is a version 4 IP address, otherwise returns false.
10.	net.isIPv6(input)
    Returns true if the input is a version 6 IP address, otherwise returns false.

EXAMPLE:

SEREVER.JS:

File: server.js

 Live Demo
var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});

server.listen(8080, function() { 
   console.log('server is listening');
});


CLIENT.JS:

var net = require('net');
var client = net.connect({port: 8080}, function() {
   console.log('connected to server!');  
});

client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});

client.on('end', function() { 
   console.log('disconnected from server');
});

OUTPUT:

server is listening
client connected
client disconnected

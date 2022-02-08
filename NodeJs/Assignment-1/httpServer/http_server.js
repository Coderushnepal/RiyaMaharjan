// const http = require("http"); //package import
import http from "http";

const PORT = 5555;
const server = http.createServer((request, response) => {
  // Send the response body
  response.end("This is my first http server in NodeJS\n");
});

server.listen(PORT);

// Console will print the message
console.log(`Server running at http://127.0.0.1:${PORT}/`);

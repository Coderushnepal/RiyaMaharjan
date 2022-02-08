import http from "http";
import fs from "fs";

const PORT = 5545;
const server = http.createServer((request, response) => {
  try {
    const file = fs.readFileSync("./file.txt");
    // Send the response body
    response.end(file.toString());
  } catch (err) {
    console.log("Error Occured:\n ", err.message);
  }
});

server.listen(PORT);

// Console will print the message
console.log(`Server running at http://127.0.0.1:${PORT}/`);

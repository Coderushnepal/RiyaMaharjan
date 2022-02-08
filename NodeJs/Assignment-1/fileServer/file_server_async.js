import http from "http";
import fs from "fs";

const PORT = 5535;
const server = http.createServer((request, response) => {
  const file = fs.readFile("file.txt", (err, data) => {
    if (err) {
      console.log("An error occurred.", err.message);
    }
    // Send the response body
    response.end(data.toString());
  });
});
server.listen(PORT);

// Console will print the message
console.log(`Server running at http://127.0.0.1:${PORT}/`);

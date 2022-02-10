import express from "express"; //default import
// import { Router } from "express"; //named import

import bodyParser from "body-parser";

const server = express();

const loggingMiddleware = (req, res, next) => {
  const url = req.url;
  const method = req.method;

  console.log(`[${new Date().toISOString()}] ${method} ${url}`);
  next();
};

//For common middleware in all server requests
// server.use(middlewareName)
server.use(bodyParser.json());
server.use(loggingMiddleware);

server.get("/", (req, res, next) => {
  res.send("This is response from index(/) route");
});

server.get("/codeRush", (req, res, next) => {
  res.send("This is CodeRush route for GET");
});

server.post("/codeRush", (req, res, next) => {
  console.log(req.body);
  res.send("This is CodeRush route for POST");
});

const PORT = 8848;

server.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}\n`);
});

// make api route

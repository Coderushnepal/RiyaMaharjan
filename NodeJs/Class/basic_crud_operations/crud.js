import express from "express";
import os from "os";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import serveFavicon from "serve-favicon";
import winston from "winston";
import fs from "fs";

const server = express();

// const logger = winston.createLogger({
//   level: "info",
// format: winston.format.json(),
// defaultMeta: { service: "basic-crud-operations" },
// transports: [
//
// - Write all logs with importance level of `error` or less to `error.log`
// - Write all logs with importance level of `info` or less to `combined.log`
//
// new winston.transports.File({ filename: "error.log", level: "error" }),
// new winston.transports.File({ filename: "combined.log" }),
// new winston.transports.Console({
//   format: winston.format.simple(),
//   Output: info: Fetching all fellows {"service":"basic-crud-operations"}

//       timestamp: new Date().toString(),
//       colorize: true,
//       level: "info",
//     }),
//   ],
// });

const logger = winston.createLogger({
  level: "info",
});
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);
const headerMiddleware = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const header = req.headers;
  const status = res.statusCode;
  console.log({ url, method, header, status });
  next();
};
server.use(serveFavicon("./public/favicon.ico"));
// server.use(headerMiddleware);
server.use(helmet());
server.use(bodyParser.json());
server.use(morgan("common"));

server.get("/", (req, res, next) => {
  res.send("This is response from index(/) route");
});

server.get("/codeRush", (req, res, next) => {
  logger.info("Fetching all fellows");
  fs.readFile("./data.txt", (err, data) => {
    if (err) {
      logger.error(`Error reading from file: ${err.message}`);

      res.status(404).json({
        message: "Error redding from file",
      });
      return;
    }
    const str = data
      .toString()
      .split("\n")
      .filter((a) => !!a)
      .map((row) => JSON.parse(row));

    res.json({
      message: "List of fellows",
      data: str,
    });
  });
});

server.post("/codeRush", (req, res, next) => {
  logger.info("Payload recieved:", req.body);
  const body = JSON.stringify(req.body) + os.EOL;

  logger.info("Checking file existence");
  const hasFile = fs.existsSync("./data.txt");

  if (!hasFile) {
    logger.error("Cannot find file:data.txt");

    res.status(404).json({
      message: "Cannot find file: data.txt",
    });
    return;
  }
  logger.info("File Exixtyence verified. Now writing to file");
  fs.appendFile("./data.txt", body, (err) => {
    if (err) {
      logger.error(`Error writing to file: ${err.message}`);

      res.status(400).json({
        message: `Error writing to file: ${err.message}`,
      });
    }
    res.json({
      message: "Added record successfully",
    });
  });
});

const PORT = 8848;

server.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}\n`);
});

//-------------Types of log--------------
// INFO -> for information purpose. EG: fetching information/records on all objects or particular objects, valication on request successful
//ERROR -> for errors .EG: resource not found, invalid data
//DEBUG -> for developer debugging purpose. might show actual data or objects "Recieved request payload: {"firstName":"abc","lastName":"xyz"}"

// validation -> check if exists -> update -> successful

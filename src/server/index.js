import fs from "fs";
import path from "path";
const https = require("https");

import app from "./server";
// import config from "config";
import { runLastBlockJob } from "./jobs/invoices";
import { runCallbackJob } from "./jobs/callbacks";

const config = {
  domain: "0.0.0.0", // your domain

  https: {
    port: 5555, // any port that is open and not already used on your server

    options: {
      key: fs
        .readFileSync(
          path.resolve(process.cwd(), "certs/STAR_zcorepay.key"),
          "utf8"
        )
        .toString(),

      cert: fs
        .readFileSync(
          path.resolve(process.cwd(), "certs/STAR_zcorepay.crt"),
          "utf8"
        )
        .toString()
    }
  }
};

const serverCallback = app.callback();

try {
  const httpsServer = https.createServer(config.https.options, serverCallback);

  httpsServer.listen(config.https.port, function(err) {
    if (!!err) {
      console.error("HTTPS server FAIL: ", err, err && err.stack);
    } else {
      console.log(
        `HTTPS server OK: https://${config.domain}:${config.https.port}`
      );
    }
  });
} catch (ex) {
  console.error("Failed to start HTTPS server\n", ex, ex && ex.stack);
}

// port
// app.listen(process.env.PORT || config.listen, _ =>
//   console.log("Listening on port", process.env.PORT || config.listen)
// );

runLastBlockJob();
runCallbackJob();

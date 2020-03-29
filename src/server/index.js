import app from "./server";
import config from "config";
import { runLastBlockJob } from "./jobs/invoices";
import { runCallbackJob } from "./jobs/callbacks";

app.listen(process.env.port || config.listen, _ =>
  console.log("Listening on port", process.env.port || config.listen)
);

runLastBlockJob();
runCallbackJob();

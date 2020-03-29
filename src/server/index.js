import app from "./server";
import config from "config";
import { runLastBlockJob } from "./jobs/invoices";
import { runCallbackJob } from "./jobs/callbacks";

// port
app.listen(process.env.PORT || config.listen, _ =>
  console.log("Listening on port", process.env.PORT || config.listen)
);

runLastBlockJob();
runCallbackJob();

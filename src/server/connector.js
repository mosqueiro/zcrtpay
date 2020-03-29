import mongoose from "mongoose";

var conn;

if (!conn) {
  process.on("unhandledRejection", function(reason, promise) {
    console.log(promise);
  });
  const url =
    process.env.MONGODB_URI ||
    (typeof __TEST__ != "undefined" && __TEST__
      ? "mongodb://localhost/zcrtpay_test"
      : "mongodb://localhost/zcrtpay");
  console.log(`connecting to ${url}`);
  mongoose.connect(url, { useNewUrlParser: true });
  mongoose.Promise = global.Promise;
  conn = mongoose;
}

export default conn;

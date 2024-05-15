const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const mongoConnect = require("./database/database").mongoConnect;
const adminRouter = require("./router/admin");
const shopRouter = require("./router/shop");

app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRouter);
app.use("/admin", adminRouter);

mongoConnect(() => {
  app.listen(3000);
});

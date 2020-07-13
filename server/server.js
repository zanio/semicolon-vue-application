const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(path.join(__dirname, "../", "dist", "favicon.ico")));

app.get("/ping", function(req, res) {
  return res.send("pong");
});

const isProduction = process.env.NODE_ENV === undefined;

console.log(isProduction);

if (isProduction) {
  app.use(express.static("dist"));
  // eslint-disable-next-line global-require
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "dist", "index.html"));
  });
}

/* Redirect http to https */
app.get("*", (req, res, next) => {
  if (
    req.headers["x-forwarded-proto"] != "https" &&
    process.env.NODE_ENV === "production"
  )
    res.redirect(`https://${req.hostname}${req.url}`);
  else next(); /* Continue to other routes if we're not redirecting */
});

app.listen(port, () => {
  console.log("Application started at port:%d", port);
});

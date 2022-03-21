//simple express server to run frontend production build;
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

var jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "http://metabase.i7sistemas.com.br";
var METABASE_SECRET_KEY = "4ff60d8d8d741c99304f4ce55c7fd2031a58be03bd9561f6ed5294258254bdd8";

var payload = {
  resource: { dashboard: 3 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};
var token = jwt.sign(payload, METABASE_SECRET_KEY);

var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#bordered=true&titled=true";
app.listen(3333);

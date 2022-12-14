const http = require("http");
const fs = require("fs");

let loginPage = http.createServer(function (request, response) {
  let url = request.url;
  if (request.url == "/") {
    url = "/login.html";
  }
  if (request.url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
loginPage.listen(3000);

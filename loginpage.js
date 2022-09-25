const http = require("http");
const fs = require("fs").promises;

const loginPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./prac/index.css" />
    
  </head>
  <body>
    <form id="root">
      <p>아이디 : <input id="id" type="text" /></p>
      <p>패스워드 : <input id="pw" type="text" /></p>
      <a href="./sign.html"><input type="button" value="회원가입" /></a>
      <input type="submit" value="로그인" onclick="login()" />
    </form>
    <h1 id="greeting" class="hidden"></h1>
  </body>
</html>
`;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(loginPage);
    res.end();
  })
  .listen(3000, () => {
    console.log("3000번 포트로 가동중입니다.");
  });

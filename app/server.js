const express = require("express");

const app = express();
const port = Number(process.env.PORT || 8080);

app.disable("x-powered-by");

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (_req, res) => {
  res
    .status(200)
    .type("html")
    .send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>DevSecOps Pipeline Demo</title>
        </head>
        <body>
          <main>
            <h1>DevSecOps CI/CD Security Pipeline</h1>
            <p>This intentionally minimal service exists so OWASP ZAP can scan a live target in CI.</p>
          </main>
        </body>
      </html>
    `);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Security pipeline demo app listening on port ${port}`);
});

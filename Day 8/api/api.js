const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());
const port = 3000;

app.get("/tasks", (req, res) => {
  // try to return/send/answer with json
  //res.sendFile(__dirname + "/data.json");
  //res.json({ user: "tobi" });

  res.set("Content-Type", "application/json");
  res.send(JSON.stringify({ user: "tobi" }));
});

app.post("/tasks", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  res.send("success");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

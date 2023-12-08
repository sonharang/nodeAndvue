require("dotenv").config({
  path: "./db/mysql.env",
});

const express = require("express");
const app = express();
const mysql = require("./db.js");
const { conUpdate } = require("./db/sql.js");

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3001, () => {
  console.log("서버실행 localhost:3001");
});

//전체 조회
app.get("/con", async (req, res) => {
  let list = await mysql.query("conList");
  res.send(list);
});
//단건 조회
app.get("/con/:no", async (req, res) => {
  let data = req.params.no;
  let result = await mysql.query("conInfo", data);
  res.send(result[0]);
});
//등록
app.post("/con", async (req, res) => {
  let data = req.body.param;
  let result = await mysql.query("conInsert", data);
  res.send(result);
});
//수정
app.put("/con/:no", async (req, res) => {
  let datas = [req.body.param, req.params.no];
  let result = await mysql.query("conUpdate", datas);
  res.send(result);
});

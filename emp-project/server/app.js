require("dotenv").config({
  path: "./db/mysql.env",
});

const express = require("express");
const app = express();
const mysql = require("./db.js");

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  // 서버동작 첫번째 = 포트번호
  console.log("서버가 실행됩니다.");
  console.log("http://localhost:3000");
});

//전체조회
app.get("/emps", async (req, res) => {
  // /뒤에는 그냥 주소값임 db랑 상관없다.
  let list = await mysql.query("empList");
  res.send(list);
});
//단건조회
app.get("/emps/:no", async (req, res) => {
  let data = req.params.no;
  let result = await mysql.query("empInfo", data);
  res.send(result[0]);
});
//등록
app.post("/emps", async (req, res) => {
  let data = req.body;
  let emp = await mysql.query("empInsert", data.emp);
  let dept = await mysql.query("deptInsert", data.dept);
  let sal = await mysql.query("salaryInsert", data.sal);
  res.send([emp, dept, sal]);
});
//수정
app.put("/emps/:no", async (req, res) => {
  let datas = [req.body.param, req.params.no];
  let result = await mysql.query("empUpdate", datas);
  res.send(result);
});
//삭제
app.delete("/emps/:no", async (req, res) => {
  let datas = [req.body.param.to_date, req.params.no];
  let dept = await mysql.query("deptDelete", datas);
  let sal = await mysql.query("salaryDelete", datas);
  res.send([dept, sal]);
});

app.get("/depts", async (req, res) => {
  let result = await mysql.query(`deptList`);
  res.send(result);
});

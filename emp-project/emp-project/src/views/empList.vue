<template>
  <div class="container">
    <table class="table">
      <caption>
        Total :
        {{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>성별</th>
          <th>입사날짜</th>
          <th>급여</th>
          <th>부서번호</th>
          <th>부서이름</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="idx"
          v-for="(emp, idx) in empList"
          @click="goToEmpInfo(emp.emp_no)"
        >
          <td>{{ emp.emp_no }}</td>
          <td>{{ emp.first_name }}</td>
          <td>{{ emp.last_name }}</td>
          <td>{{ emp.gender }}</td>
          <td>{{ dateFormat(emp.hire_date, "yyyy년 MM월 dd일") }}</td>
          <td>{{ emp.salary }}</td>
          <td>{{ emp.dept_no }}</td>
          <td>{{ emp.dept_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      empList: [],
    };
  },
  computed: {
    //수정되면 안될때 computed 사용하기도 함
    count() {
      return this.empList.length;
    },
  },
  created() {
    // 컴포넌트가 처음부터 마운트 되기전부터 데이터 들고 있어야하는 순간 created 사용(컴포넌트가 초기화할 데이터관련 진행)
    this.getEmpList();
  },
  methods: {
    async getEmpList() {
      let result = await axios.get("/api/emps").catch((err) => {
        console.log(err);
      });
      let list = result.data;
      this.empList = list;
    },
    goToEmpInfo(no) {
      console.log(no);
      this.$router.push({ path: "/empInfo", query: { empNo: no } });
      //$.router -> 존재하는 라우터에 요청
      // name : route로 등록할 때 사용한 name 속성
      // params : path 속성이 '/target/:id'일때 {'id' : A}
    },
    dateFormat(value, format) {
      // 들어오는 value 값이 공백이면 그냥 공백으로 돌려줌
      if (value == "") return "";
      // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
      let date = new Date(value);
      // 연도, 월, 일 추출
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);

      let result = format
        .replace("yyyy", year)
        .replace("MM", month)
        .replace("dd", day);

      return result;
    },
  },
};
</script>
<style scoped>
table {
  width: 100%;
  margin: 0, auto;
  border: 1px solid #444444;
}
th,
td {
  border: 1px solid #444444;
  padding: 10px;
}
</style>

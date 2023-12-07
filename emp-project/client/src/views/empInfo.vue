<template>
  <div class="container">
    <div class="row">
      <table class="table" style="border: 1px solid #444444">
        <tr>
          <th class="text-right table-primary">사원번호</th>
          <td class="text-center">{{ empInfo.emp_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">부서번호</th>
          <td class="text-center">{{ empInfo.dept_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">부서이름</th>
          <td class="text-center">{{ empInfo.dept_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">firstName</th>
          <td class="text-center">{{ empInfo.first_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">lastName</th>
          <td class="text-center">{{ empInfo.last_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">생년월일</th>
          <td class="text-center">{{ dateFormat(empInfo.birth_date) }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">{{ empGender }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">입사날짜</th>
          <td class="text-center">{{ dateFormat(empInfo.hire_date) }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">발령날짜</th>
          <td class="text-center">{{ dateFormat(empInfo.from_date) }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">급여</th>
          <td class="text-center">{{ salFormat }}</td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info" @click="updateEmp(empInfo.emp_no)">
        수정
      </button>
      <router-link to="/empList" class="btn btn-success">목록</router-link>
      <button class="btn btn-warning" @click="deleteEmp(empInfo.emp_no)">
        삭제
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      searchNo: "",
      empInfo: {},
    };
  },
  computed: {
    empGender() {
      return this.empInfo.gender == "M" ? "남자" : "여자";
    },
    salFormat() {
      return String(this.empInfo.salary).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  created() {
    this.searchNo = this.$route.query.no;
    this.getEmpInfo();
  },
  methods: {
    dateFormat(value) {
      // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
      let date = new Date(value);
      // 연도, 월, 일 추출
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);
      return `${year}년 ${month}월 ${day}일`;
    },
    async getEmpInfo() {
      let result = await axios
        .get(`/api/emps/${this.searchNo}`)
        .catch((err) => {
          console.log(err);
        });
      let Info = result.data;
      this.empInfo = Info;
    },
    async deleteEmp(empNo) {
      let data = {
        param: {
          to_date: "2023-12-07",
        },
      };
      let result = await axios
        .delete(`/api/emps/${empNo}`, { data: data })
        .catch((err) => console.log(err));
      console.log(result.data);
      let count = result.data.affectedRows;
      if (count == 0) {
        alert("정상적으로 삭제되지 않았습니다.");
      } else {
        alert("정상적으로 삭제되었습니다.");
        this.$router.push({ name: `empList` });
      }
    },
    updateEmp(Eno) {
      this.$router.push({ path: `/empUpdate`, query: { no: Eno } });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <table class="table" style="border: 1px solid #444444">
        <tr>
          <th class="text-right table-primary">No.</th>
          <td class="text-center">{{ empInfo.emp_no }}</td>
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
          <th class="text-right table-primary">성별</th>
          <td class="text-center">{{ empGender }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">입사날짜</th>
          <td class="text-center">{{ dateFormat }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">급여</th>
          <td class="text-center">{{ empInfo.salary }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">부서번호</th>
          <td class="text-center">{{ empInfo.dept_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">부서이름</th>
          <td class="text-center">{{ empInfo.dept_name }}</td>
        </tr>
      </table>
    </div>
    <!-- <div class="row">
      <button class="btn btn-info" @click="updateInfo(empInfo.emp_no)">
        수정
      </button>
      <router-link to="/" class="btn btn-success">목록</router-link>
      <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)">
        삭제
      </button>
    </div> -->
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
    dateFormat() {
      // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
      let date = new Date(this.empInfo.hire_date);
      // 연도, 월, 일 추출
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);
      return `${year}년 ${month}월 ${day}일`;
    },
  },
  created() {
    this.searchNo = this.$route.query.emp_no;
    this.getEmpInfo();
  },
  methods: {
    async getEmpInfo() {
      let result = await axios
        .get(`/api/emps/${this.searchNo}`)
        .catch((err) => {
          console.log(err);
        });
      let Info = result.data;
      this.empInfo = Info;
    },
    // async deleteInfo(empNo) {
    //   let result = await axios
    //     .delete(`/api/emps/${empNo}`)
    //     .catch((err) => console.log(err));
    //   console.log(result.data);
    //   let count = result.data.affectedRows;
    //   if (count == 0) {
    //     alert("정상적으로 삭제되지 않았습니다.");
    //   } else {
    //     alert("정상적으로 삭제되었습니다.");
    //     this.$router.push({ name: `emplist` });
    //   }
    // },
    // updateInfo(no) {
    //   this.$router.push({ path: `/empUpdate`, query: { empNo: no } });
    // },
  },
};
</script>
<style scoped>
th,
td {
  border: 1px solid #444444;
  padding: 10px;
}
</style>

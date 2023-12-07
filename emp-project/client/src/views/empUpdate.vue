<template>
  <div class="container">
    <div class="row">
      <table class="table" style="border: 1px solid #444444">
        <tr>
          <th class="text-right table-primary">사원번호</th>
          <td class="text-center">
            <input type="number" v-model="empInfo.emp_no" readonly />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">부서번호</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.dept_no" readonly />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">부서이름</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.dept_name" readonly />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">firstName</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.first_name" readonly />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">lastName</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.last_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">생년월일</th>
          <td class="text-center">
            <input type="date" v-model="empInfo.birth_date" readonly />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">
            <input
              type="radio"
              value="M"
              v-model="empInfo.gender"
              onclick="return false;"
            />
            남자
            <input
              type="radio"
              value="F"
              v-model="empInfo.gender"
              onclick="return false;"
            />
            여자
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">입사날짜</th>
          <td class="text-center">
            <input type="date" v-model="empInfo.hire_date" readonly />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">발령날짜</th>
          <td class="text-center">
            <input type="date" v-model="empInfo.from_date" readonly />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">급여</th>
          <td class="text-center">
            <input type="number" v-model="empInfo.salary" readonly />
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info" @click="updateEmp(empInfo.emp_no)">
        수정
      </button>
      <router-link to="/" class="btn btn-success">목록</router-link>
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
      return `${year}-${month}-${day}`;
    },
    async getEmpInfo() {
      let result = await axios
        .get(`/api/emps/${this.searchNo}`)
        .catch((err) => {
          console.log(err);
        });
      let Info = result.data;
      this.empInfo = Info;
      this.empInfo.hire_date = this.dateFormat(this.empInfo.hire_date);
      this.empInfo.birth_date = this.dateFormat(this.empInfo.birth_date);
      this.empInfo.from_date = this.dateFormat(this.empInfo.from_date);
    },

    async updateEmp(Eno) {
      let datas = {
        param: {
          last_name: this.empInfo.last_name,
        },
      };
      let result = await axios.put(`/api/emps/${this.empInfo.emp_no}`, datas);
      if (result.data.changedRows == 0) {
        alert(`수정실패\n${result.data.message}`);
      } else {
        alert(`수정성공`);
        this.$router.push({ path: `/empInfo`, query: { no: Eno } });
      }
    },
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

<template>
  <div class="container">
    <div class="row">
      <table class="table" style="border: 1px solid #444444">
        <tr>
          <th class="text-right table-primary">사원번호</th>
          <td class="text-center">
            <input type="number" v-model="emp_no" @input="getEmpNo()" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">부서번호(d00x)</th>
          <td class="text-center">
            <input type="text" v-model="dept.dept_no" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성</th>
          <td class="text-center">
            <input type="text" v-model="emp.first_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">
            <input type="text" v-model="emp.last_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">생년월일</th>
          <td class="text-center">
            <input type="date" v-model="emp.birth_date" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">
            <input type="radio" value="M" v-model="emp.gender" /> 남자
            <input type="radio" value="F" v-model="emp.gender" /> 여자
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">입사날짜</th>
          <td class="text-center">
            <input type="date" v-model="emp.hire_date" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">발령날짜</th>
          <td class="text-center">
            <input type="date" v-model="from_date" @input="getFromdate()" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">급여</th>
          <td class="text-center">
            <input type="number" v-model="sal.salary" />
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-success" @click="insertInfo">저장</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      emp: {
        emp_no: "",
        birth_date: "",
        first_name: "",
        last_name: "",
        gender: "",
        hire_date: "",
      },
      dept: {
        emp_no: "",
        dept_no: "",
        from_date: "",
        to_date: "9999-01-01",
      },
      sal: {
        emp_no: "",
        salary: "",
        from_date: "",
        to_date: "9999-01-01",
      },
    };
  },
  created() {
    this.emp.hire_date = this.getToday();
  },
  methods: {
    async insertInfo() {
      if (!this.validation()) return;

      let data = {
        emp: this.emp,
        dept: this.dept,
        sal: this.sal,
      };
      let result = await axios
        .post("api/emps", JSON.stringify(data), {
          //method : 'post',
          headers: {
            "Content-Type": "application/json",
          },
          //data : JSON.stringify(data)
        })
        .catch((err) => console.log(err));
      //result = await axios.post('/api/users', data);
      console.log(result.data);
      if (result.data.length == 3) {
        alert(`등록성공`);
        this.$router.push({ name: "empList" });
      } else {
        alert(`등록실패\n${result.data.message}`);
      }
    },
    getEmpNo() {
      this.emp.emp_no = this.emp_no;
      this.dept.emp_no = this.emp_no;
      this.sal.emp_no = this.emp_no;
    },
    getFromdate() {
      this.dept.from_date = this.from_date;
      this.sal.from_date = this.from_date;
    },
    getToday() {
      let today = new Date();
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      let day = ("0" + today.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    },
    validation() {
      if (this.emp.emp_no == "") {
        alert("사원번호가 입력되지 않았습니다.");
        return false;
      }
      if (this.emp.first_name == "") {
        alert("이름이 입력되지 않았습니다.");
        return false;
      }
      return true;
    },
  },
};
</script>

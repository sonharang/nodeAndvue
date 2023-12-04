<template>
  <div class="container">
    <div class="row">
      <table class="table" style="border: 1px solid #444444">
        <tr>
          <th class="text-right table-primary">ID</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_id" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">Password</th>
          <td class="text-center">
            <input type="password" v-model="userInfo.user_pwd" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">
            <input type="radio" value="M" v-model="userInfo.user_gender" /> 남자
            <input type="radio" value="F" v-model="userInfo.user_gender" /> 여자
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">나이</th>
          <td class="text-center">
            <input type="number" v-model="userInfo.user_age" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">가입일자</th>
          <td class="text-center">
            <input type="date" v-model="userInfo.join_date" />
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
      userInfo: {
        user_id: "",
        user_pwd: "",
        user_name: "",
        user_gender: "",
        user_age: 0,
        join_date: "",
      },
    };
  },
  created() {
    this.userInfo.join_date = this.getToday();
  },
  methods: {
    async insertInfo() {
      if (!this.validation()) return;

      let data = {
        param: this.userInfo,
      };
      let result = await axios
        .post("api/users", JSON.stringify(data), {
          //method : 'post',
          headers: {
            "Content-Type": "application/json",
          },
          //data : JSON.stringify(data)
        })
        .catch((err) => console.log(err));
      //result = await axios.post('/api/users', data);
      console.log(result.data);
      if (result.data.insertId == 0) {
        alert(`등록실패\n${result.data.message}`);
      } else {
        alert(`등록성공`);
        this.$router.push({ name: "userlist" });
      }
    },
    getToday() {
      let today = new Date();
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      let day = ("0" + today.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    },
    validation() {
      if (this.userInfo.user_id == "") {
        alert("아이디가 입력되지 않았습니다.");
        return false;
      }
      if (this.userInfo.user_pwd == "") {
        alert("비밀번호가 입력되지 않았습니다.");
        return false;
      }
      return true;
    },
  },
};
</script>

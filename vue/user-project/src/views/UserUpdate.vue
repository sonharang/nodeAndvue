<template>
  <div class="container">
    <div class="row">
      <table class="table" style="border: 1px solid #444444">
        <tr>
          <th class="text-right table-primary">No.</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_no" readonly />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">ID</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_id" readonly />
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
          <th class="text-right table-primary">가입날짜</th>
          <td class="text-center">
            <input type="date" v-model="userInfo.join_date" />
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-success" @click="updateInfo">수정</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      searchNo: "",
      userInfo: {},
    };
  },
  created() {
    this.searchNo = this.$route.query.userId;
    this.getUserInfo();
  },
  computed: {
    userGender() {
      return this.userInfo.user_gender == "M" ? "남자" : "여자";
    },
  },
  methods: {
    async getUserInfo() {
      let result = await axios
        .get(`/api/users/${this.searchNo}`)
        .catch((err) => {
          console.log(err);
        });
      let Info = result.data;
      this.userInfo = Info;
      let newDate = this.dateFormat(this.userInfo.join_date);
      this.userInfo.join_date = newDate;
    },
    async updateInfo() {
      if (!this.validation()) return;

      let data = {
        param: this.userInfo,
      };
      let result = await axios
        .put(`api/users/${this.userInfo.user_id}`, JSON.stringify(data), {
          //method : 'post',
          headers: {
            "Content-Type": "application/json",
          },
          //data : JSON.stringify(data)
        })
        .catch((err) => console.log(err));
      //result = await axios.post('/api/users', data);
      console.log(result.data);
      if (result.data.changedRows == 0) {
        alert(`수정실패\n${result.data.message}`);
      } else {
        alert(`수정성공`);
        this.$router.push({ name: "userlist" });
      }
    },
    dateFormat(value) {
      let today = new Date(value);
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth + 1)).slice(-2);
      let day = ("0" + today.getDay).slice(-2);
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

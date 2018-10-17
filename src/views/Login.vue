<template>
  <div class="login">
    <el-row class="el-row-top">
      医疗衣物管理平台
    </el-row>
    <el-row class="el-row-content">
      <div style="width: 400px;height: 300px;margin: 50px auto;text-align: center;background-color: #ccc;padding-top: 40px;">
        <el-form style="width: 320px;margin-left: 40px;" :label-position="'left'" :model="loginForm" :rules="rules" ref="loginForm" label-width="70px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
          </el-form-item>
        </el-form>

        <el-button @click.native="loginClick" style="width:320px;" type="primary">登录</el-button>
      </div>
    </el-row>
    <el-row class="el-row-bottom">
      <div style="text-align:center;">
        Copyright © 2015-2018 英腾教育 备案信息：桂ICP备13003351号-2
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { userLogin } from "../server/data";
let that;
export default {
  name: "",
  components: {},
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["userLoginInfo"])
  },
  created() {
    that = this;
    if (this.userLoginInfo.hasOwnProperty("userID")) {
      that.$router.push("/GarmentFactoryIndex");
      //that.$router.push("/HospitalIndex");
    }
  },
  methods: {
    ...mapActions({ setUserLoginInfo: "setUserLoginInfo" }),
    loginClick() {
      userLogin(this.loginForm.username, this.loginForm.password).then(res => {
        console.log(res.data);
        if (res.data[0]) {
          that.setUserLoginInfo(res.data[0]);
        }
        // that.setUserLoginInfo(res.datas);
       that.$router.push("/GarmentFactoryIndex");
      });
    }
  }
};
</script>

<style>
.login {
  height: 100%;
  /* display: flex; */
}
.login .el-row-top {
  height: 60px;
  background: #409eff;
}
.login .el-row-content {
  height: calc(100% - 120px);
  overflow: auto;
}
.login .el-row-bottom {
  height: 60px;
  background: #409eff;
}
</style>

<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo"
         href="http://www.meituan.com">美团网</a>
    </div>
    <div class="login-panel">
      <div class="banner-img">
        <img src="https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/page/static/banner/www.jpg"
             width="480"
             height="370"
             alt="美团网">
      </div>
      <div class="login-section">
        <div class="form">
          <h4 v-if="error"
              class="tips">
            {{error}}
          </h4>
          <p class="login-type">
            <span class="login-type">账号登陆</span>
          </p>
          <div :class="{phone_input_wrapper:true,error:error && !userName}">
            <span class="country-area">
              <span class="plus"></span><span>+86</span>
              <i class="right-arrow"></i>
            </span>
            <el-input v-model="userName"
                      placeholder="手机号/用户名/邮箱"></el-input>
          </div>
          <div :class="{pw_input_wrapper:true,error:error && !passWord}">
            <i class="
               icon
               icon-password"></i>
            <el-input v-model="passWord"
                      placeholder="密码"></el-input>
          </div>
          <div class="foot">
            <a href="#">忘记密码?</a>
          </div>
          <el-button class="btn-login"
                     type="primary"
                     @click="submit">登陆</el-button>
          <p class="reg">
            <span>还没有账号?</span>
            <router-link :to="{name:'register'}">
              免费注册
            </router-link>
          </p>

          <div class="oauth-wrapper">
            <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
            <div class="oauth">
              <span class="oauth__link oauth__link--qq"
                    data-href="/account/connect/tencent"
                    target="_blank"></span>
              <span class="oauth__link oauth__link--weibo"
                    target="_blank"></span>
            </div>
            <i id="thirdLoginRiskpartner"></i>
          </div>
        </div>
      </div>
    </div>
    <footer class="login-footer">
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>
        ©2022 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>

<script>
import api from "@/api/index.js"
export default {
  data () {
    return {
      error: '',
      userName: "",
      passWord: ""
    }
  },
  methods: {
    submit () {
      if (!this.userName) {
        this.error = "请输入账号!"
        return false;
      }
      if (!this.passWord) {
        this.error = "请输入密码!"
        return false;
      }

      api.login({
        params: {
          username: this.userName,
          password: this.passWord
        }
      }).then((res) => {
        if (res.data.em == "success") {
          this.$router.push({ name: "index" });
          this.$store.commit("setUserName", this.userName);
        } else {
          // this.error = "请输入账号密码重试";
          this.error = res.data.data.userInfo.msg;
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/login/index.scss';
</style>
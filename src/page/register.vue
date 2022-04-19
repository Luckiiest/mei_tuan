<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#"
           class="site-logo">美团</a>
        <div class="login">
          <span>已有美团账号?</span>
          <router-link :to="{name: 'login'}">登陆</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-registerForm">
        <el-form-item label="用户名"
                      prop="userName">
          <el-input type="text"
                    v-model="ruleForm.userName"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="pass">
          <el-input type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    @input="input"></el-input>
          <div class="pw-strength">
            <div :class="['bar',strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import api from "@/api/index.js"
export default {
  data () {
    var userName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 4 && value.length > 16) {
        callback(new Error('用户名长度位4-16位数字字母下划线组成!'));
      }
      else {
        if (this.ruleForm.userName !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 4 && value.length > 16) {
        callback(new Error('密码长度位6-16位数字字母下划线组成!'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }

    return {
      strengthClass: '',

      ruleForm: {
        pass: '',
        checkPass: '',
        userName: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userName: [
          { validator: userName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.register({
            params: this.ruleForm
          }).then(res => {
            if (res.data.status == 'success') {
              this.$router.push({ name: "login" });

            } else {
              alert(res.data.msg);
            }
          })
        } else {
          console.log('注册失败');
          return false;
        }
      });
    },
    input () {
      var regStr = /(\w)+/g;
      var regNum = /(\d)+/g;
      var reg = /(_)+/g;
      var strongth = this.ruleForm.pass.match(reg) && this.ruleForm.pass.match(regStr) && this.ruleForm.pass.match(regNum);

      if (this.ruleForm.pass.length > 20 || (this.ruleForm.pass.length > 6 && strongth)) {
        this.strengthClass = "strong";
      } else if (this.ruleForm.pass.length < 8) {
        this.strengthClass = 'week'
      } else if (this.ruleForm.pass == "") {
        this.strengthClass = '';
      } else {
        this.strengthClass = 'normal';
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/register/index.scss';
</style>
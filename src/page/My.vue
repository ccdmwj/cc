<template>
  <div id="my">
    <section class="login-view" >
      <div >

      </div>
      <div >
        <form>
            <div class="form-group" >
                <input type="text" class="form-control" placeholder="输入手机号" ><span ></span>
            <div class="input-bg" ></div>
            </div>
            <div class="form-group" >
                <input type="password" class="form-control" placeholder="输入验证码" >
                <div class="input-bg" ></div>
            </div>
            <div class="form-group captcha">
                <input type="text" class="form-control code" placeholder="图形验证码" >
                <img src="" width="100" height="30" >
                <div class="input-bg" >

                </div>
            </div>
            <span class="wrong-msg" ></span>
            <button type="submit" class="center-block submit" >登录
            </button>
         </form>
      </div>
    </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'My'
}
</script>

<style>
#my{
  margin-top: 50px;
}
.login-view, .bind-view {
  position: absolute;
  min-height: 100%;
  width: 100%;
  background-color: #f6f6f6;
}
.login-view form, .bind-view form {
  padding: 0px 31px 0px 31px;
}

.login-view form .form-group, .bind-view form .form-group {
  margin: 30px 0 0;
  position: relative;
}
.login-view .captcha, .bind-view .captcha {
  display: none;
}
.wrong-msg {
  display: block;
  height: 16px;
  color: #fe8233;
  padding-left: 8px;
}
.login-view .submit, .bind-view .submit {
  width: 163px;
  background-color: #fe8233;
  color: #fff;
  border: none;
  border-radius: 36px;
  margin-top: 45px;
  padding: 8px 12px;
  font-size: 15px;
  outline: none;
}
.login-view input.form-control, .bind-view input.form-control {
  border: none;
  background-color: #f6f6f6;
  border-radius: 0px;
  box-shadow: none;
  outline: none;
}
.input-bg, .bind-view form .form-group .input-bg {
  position: absolute;
  top: 20px;
  height: 12px;
  width: 100%;
  border: solid #c4c4c4;
  border-width: 0 1px 1px 1px;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;

  background-image: none;}
.center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.login-view, .bind-view {

  height: 616px;
  width: 100%;
  background-color: #f6f6f6;
}


</style>

<template>
<div id="">
  <div >
    <label >卡号：</label>
    <input type="text" placeholder="请输入电子卖座卡号" >
    <div class="line" >

    </div>
  </div>
  <div class="msg">

  </div>
  <button class="card_query_bottom center-block" >查询</button>
</div>
</template>

<script>
export default {
  name: 'Kd'
}
</script>

<style scoped>
  div {
    margin-top: 30px;

    padding: 0 16px;
  }
  label {
    font-weight: normal;
    line-height: 34px;
    margin: 0 15px 0 10px;
    float: left;
    display: inline-block;
    max-width: 100%;
  }
  input {
    border: none;
    background-color: transparent;
    height: 34px;
    width: 55%;
    font-size: 14px;
    vertical-align: top;
    border: none;
    outline: medium;
  }
  .line {
    border-width: 0px 1px 1px;
    border-style: solid;
    border-color: #ccc;
    height: 5px;
    margin-top: -5px;
  }
  .msg {
    margin: 0 20px;
    color: #fe8233;
    height: 25px;
    padding: 5px 20px;
  }
  .card_query_bottom {
    width: 160px;
    margin: 25px auto 30px;
    border-radius: 18px;
    background-color: #fe8233;
    height: 36px;
    color: #fff;
    font-size: 14px;
    line-height: 36px;
    border: none;
  }





</style>

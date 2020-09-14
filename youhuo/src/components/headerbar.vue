<template>
    <div class="header">
       <span class="logo"></span>
       <span class="iconfont dd">&#xe60b;</span>
    </div>
</template>

<style lang="scss" scoped>
.header{
    height: 52.73px;
    width: 100%;
    background-image: linear-gradient(#323232,#414141);
    position: relative;
    display: flex;
    .dd{
      color: #fff;
      font-size: 28px;
     position: absolute;
     right: 10px;
     top: 10px;
    }
    .logo{
        background: url(https://cdn.yoho.cn/yohobuywap-node/img/yohologo02.4b84a9fb7d.png) no-repeat 50% ;
        display: block;
        margin: 0 auto;
        width: 121.88px;  
        height:100%;
        background-size: 100%;
        text-align: center;
    }
  }
</style>
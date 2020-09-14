<template>
  <div class="home">
    <div class="mine">
      <router-view></router-view>
    </div>
      <ul class="footer">
        <router-link active-class='active' to="/home/homepage" tag='li'>
        <span class="iconfont">&#xe601;</span> 
            首页
        </router-link>
        <router-link active-class='active' to="/home/classification" tag='li'>
        <span class="iconfont">&#xe66b;</span> 
        分类
        </router-link>
        <router-link active-class='active' to="/home/stroll" tag='li'>
        <span class="iconfont">&#xe62c;</span> 
        逛
        </router-link>
        <router-link active-class='active' to="/home/shopping-cart" tag='li'>
        <span class="iconfont">&#xe689;</span> 
        购物车
        </router-link>
        <router-link active-class='active' to="/home/my" tag='li'>
        <span class="iconfont">&#xe609;</span> 
        我的
        </router-link>
      </ul>
  </div>
</template>

<script>
import Homepage from '../home/homepage/home-page'
export default {

  
  components: {
    Homepage
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
   display: flex;
  flex-direction: column;
  .mine{
    overflow: hidden;
    flex: 1;
  }  
  .footer{
    height: 58.59px;
    box-sizing: border-box;
    display: flex;
    padding-top: 5px;
    list-style: none;
    border-top: 1px solid #ccc;
     li{
        list-style: none;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 12px;
        color:#696969;
        span{
            font-size: 25px;
        }
    }
    .active{
      color: black;
    }
  }
  .mine{
    flex: 1;
  }
}
</style>

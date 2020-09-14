<template>
<div class="newshop" ref="good">
    <div>
        <div class="header">
        <span class="iconfont dd" @click="fanhui">
            &#xe619;
        </span>
        <p class="nav-title">新品到着</p>
        <span class="iconfont dd" @click.stop="ShowHidden = !ShowHidden">&#xe662;</span>
        <div class="homebutton" v-if="ShowHidden" @click.stop="">
            <ul >
                <router-link active-class="active" tag="li" to="/home/homepage">
                    <span class="iconfont">&#xe602;</span>
                    <span>首页</span>
                </router-link>
                <router-link active-class="active" tag="li" to="/home/classification">
                    <span class="iconfont">&#xe600;</span>
                    <span>分类</span>
                </router-link>
                <router-link active-class="active" tag="li" to="/home/shopping-cart">
                    <span class="iconfont">&#xe64a;</span>
                    <span>购物车</span>
                </router-link>
                <router-link active-class="active" tag="li" to="/home/my">
                    <span class="iconfont">&#xe64f;</span>
                    <span>我的</span>
                </router-link>
            </ul>
            <router-view></router-view>
        </div>
        </div>
        <div class="banner">
            <div class="banner-top">
                <img src="https://img11.static.yhbimg.com/yhb-img01/2017/04/28/13/0195a172b6ec4c098533f4c5c082fad146.jpg?imageView2/2/w/640/h/240/q/60" alt="">
            </div>
        </div>
        <ul class="list-nav">
            <router-link active-class='active' tag='li' to="/home/newshop">
                <span>9月10号</span>
            </router-link>
            <router-link active-class='active' tag='li' to="/home/newshop/two">
                <span>本周上新</span>
            </router-link>
            <router-link active-class='active' tag='li' to="/home/newshop/three">
                <span>销量</span>
            </router-link>
            <router-link active-class='active' tag='li' to="/home/newshop/four">
                <span>筛选</span>
            </router-link>
        </ul>
        <router-view></router-view>
        <div class="good-container">
            <div class="container">
                <div class="goods-info" v-for="item in getcccc " :key="item.id">
                    <div class="kong"></div>
                    <div class="good-detail-img"><img :src="item.img" alt=""></div>
                    <div class="good-detail-text">
                        <div class="name">
                            <span class="name-text">{{item.title}}</span>
                        </div>
                        <div class="price">
                                <span class="sale-price">{{item.yuanjia}}</span>
                                <span class="old-price">{{item.xianjia}}</span>
                        </div>
                        <span class="iconfont">&#xe60c;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import {get} from '@/api/http'
import BScroll from '@better-scroll/core'
import Pullup from "@better-scroll/pull-up"
BScroll.use(Pullup)
export default {
    data(){
         return {
             getcccc:[],
            ShowHidden: false
        }
    },
    created(){
        this.getdddd()
    },
    methods: {
    //导入数据
    async getdddd(){
      let rs = await get('/new')
      this.getcccc = rs.data;
      this.$nextTick(()=>{
            this.initScroll()
        })
    },
    //滚动条
     initScroll(){
        this.bscroll = new BScroll(this.$refs.good, {
            pullUpLoad: true,
            // eventPassthrough:"horizontal"
            click:true
        })
        this.bscroll.on("pullingUp", () => {
            console.log("up....")
        })
    },
    fanhui(){
        this.$router.go(-1)
    },
    // 点击页面事件 隐藏需要隐藏的区域
    HiddenClick () {
    this.ShowHidden = false
    },
    // 点击列表内，选中内容，并隐藏
    ConBtn (val) {
    alert('内容' + val)
    this.ShowHidden = false
    }
    },
    mounted () {
    document.addEventListener('click', this.HiddenClick)
    },
}
</script>

<style lang="scss" scoped>
.newshop{
    width: 100%;
     overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 608.59px;
    .header{
        justify-content: space-between;
        align-items: center;
        height: 52.73px;
        width: 100%;
        background-image: linear-gradient(#323232,#414141);
        position: relative;
        display: flex;
        .dd{
            color: #fff;
            font-size: 28px;
            width: 52.73px;
            height: 52.73px;
            text-align: center;
            line-height: 52.73px;
        }
        .nav-title{
            font-size: 20px;
            font-weight: 400;
            color: #fff;
        }
        .homebutton{
            position: absolute;
            top: 58px;
            right: 7px;
            border-radius: 5px;
            width: 164.06px;
            height: 198.04px;
            background-image: linear-gradient(#434343,#171717);
            z-index: 5;
            ul{
                width: 100%;
                height: 198px;
                padding: 1px 0;
                li{
                    padding-left: 23.4px;
                    height: 49.21px;
                    color: white;
                    line-height: 49.21px;
                    border-bottom: 1px solid #444;
                    span:nth-child(1){
                        font-size: 20px;
                        width: 48.8px;
                    }
                    span:nth-last-child(1){
                        margin-left: 30px;
                    }
                }
                li:nth-last-child(1){
                    border: 0;
                }
            }
        }
    }
    .banner{
        width: 100%;
        .banner-top{
           height: 117.19px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .list-nav{
        list-style: none;
        border-top: .05rem solid #fff;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            border-width: 6px;
            border-color: #999 transparent transparent transparent;
            right: 18px;
            top: 46%;
            border-style: solid;
        }
    
        li{
            float: left;
            width: 25%;
            height: 38.66px;
            line-height: 38.66px;
            text-align: center;
            font-size: 13.5px;
            color: #999;
            position: relative;
        }
        .active{
            color: #000;
        }
    }
    .good-container{
        padding: 4.8765px 0px 0px 8.789px;
        width: 100%;

        .container{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .goods-info{
            width: 161.71px;
            height: 296.48px;
            margin: 5.859px 8.789px 23.4375px;
            .kong{
                width: 100%;
                height: 16.4px;
                overflow: hidden;
            }
            .good-detail-img{
                height: 215.63px;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .good-detail-text{
                position: relative;
                font-size: 12px;
                .name{
                    width: 100%;
                    height: 31.64px;
                    color: #444;
                    margin: 8.78px 0 5.85px;
                    padding: 2.92px 0;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .price{
                    
                    white-space: nowrap;
                    .sale-price{
                        color: #d62927;
                    }
                    .old-price{
                        text-decoration:line-through;
                        margin: 0 0 0 6px;
                        color: #b0b0b0;
                    }
                }
                .iconfont{
                    color: #ccc;
                    position: absolute;
                    right: 0;
                    top: 40px;
                }
            }
        }
        }
        
    }
}
</style>
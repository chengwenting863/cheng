<template>
    <div class="stroll-home" ref="homebox">
        <div>
            <div class="nav-scroll">
                <ul id="guang-nav" class="guang-nav">
                    <router-link class="guang-nav-item focus" tag="li" to="">
                        <span>最新</span>
                    </router-link>
                    <router-link class="guang-nav-item " tag="li" to="">
                        <span>搭配</span>
                    </router-link>
                    <router-link class="guang-nav-item " tag="li" to="">
                        <span>头条</span>
                    </router-link>
                    <router-link class="guang-nav-item " tag="li" to="">
                        <span>上新</span>
                    </router-link>
                    <router-link class="guang-nav-item " tag="li" to="">
                        <span>视频</span>
                    </router-link>
                </ul>
            </div>
            <router-view></router-view>
        <!-- 轮播图 -->
            <div class="swiper-info">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="@/assets/img/13.jpg" /></div>
                    <div class="swiper-slide"><img src="@/assets/img/14.jpg" /></div>
                    <div class="swiper-slide"><img src="@/assets/img/15.jpg" /></div>
                    <div class="swiper-slide"><img src="@/assets/img/16.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="@/assets/img/17.jpg" /></div>
                    <div class="swiper-slide"><img src="@/assets/img/18.jpg" /></div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>  
            </div>
        <!-- 数据 -->
            <div class="guang-info">
                <div  v-for="item in guangtit " :key="item.id">
                    <div class="info-img">
                    <div class="img-box">
                        <img :src="item.img" alt="">
                    </div>
                    
                    </div>
                    <div class="ingo-deps">
                        <div class="info-title text-overflow">{{item.title}}</div>
                        <p class="info-text">{{item.text}}</p>
                        <div class="time-view-like-share">
                            <span>搭配</span>&nbsp;&nbsp;|&nbsp;
                            <span class="page-view">{{item.men}}</span>人阅读
                            <div class="like-share-container">
                                    <span class="like-count">{{item.like}}</span>&nbsp;
                                    <span class="iconfont">&#xe611;</span>
                            </div>
                        </div>
                    </div>
                    <div class="product-box">
                        <ul class="product-list">
                            <li class="good-box" v-for="item in guangtxt " :key="item.id">
                                <div class="good-img">
                                    <img :src="item.img" alt="">
                                </div>
                                <div class="good-info">
                                    <p class="title">{{item.title}}</p>
                                    <p class="price">{{item.price}}</p>
                                </div>
                            </li>
                        </ul>
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
        return{
            guangtit:[],
            guangtxt:[]
        }
    },
    created(){
        this.getaaaa()
        this.getbbbb()
    },
    methods:{
        async getaaaa(){
        let rs = await get('/guang')
        this.guangtit = rs.data;
            
        },
        
        async getbbbb(){
        let rs = await get('/guangbox')
        this.guangtxt = rs.data;
            this.$nextTick(()=>{
                this.initmovieScroll()
            })
        },
        initmovieScroll(){
            this.bscroll = new BScroll(this.$refs.homebox, {
                pullUpLoad: true,
                eventPassthrough:"horizontal"
            })
            this.bscroll.on("pullingUp", () => {
                console.log("up....")
            })
        },
    },
    mounted() {
    var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination', //分页器
    loop: true, //循环
    paginationClickable:true, //分页器点击
    spaceBetween: 30, // swiper-slide 间的距离为30
    autoplay: 3000, //时长
    autoplayDisableOnInteraction: false, //点击不会取消自动
    });
}
}
</script>

<style lang="scss" scoped>
.stroll-home{
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 608.59px;
    .text-overflow {
    // overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .nav-scroll{
        height: 46.88px;
        .guang-nav {
            display: flex;
            background-color: #fff;
            height:100%;
            white-space: nowrap;
            padding: 0 13.4766px;
            text-align: center;
            .guang-nav-item{
                flex: 1;
                color: #ccc;
                list-style: none;
                height: 100%;
                span{
                    line-height: 46.88px;
                }
            }
        }
    }
    .swiper-container {
        width: 100%;
        height: 181.64px;
        img{
            height: 100%;
        }
    }
    .guang-info{
        background-color: #fff;
        padding: 0 0 14.06px;
        margin: 0 0 17.57px;
        .info-img{
            width: 100%;
            .img-box{
            padding: 17.578px 17.578px 0;
            }
            img{
                width: 100%;
            }
        }
        .ingo-deps{
            margin: 18.75px 0px 0px;
            padding: 0px 23.43px 0px 17.578px;
            .info-title{
                color: #000;
                font-size: 20px;
                font-weight: 700;
            }
            .info-text{
                margin: 9.375px 0px 0px;
                font-size: 14px;
                color: #444;
            }
            .time-view-like-share{
                color: #b0b0b0;
                margin: 9.375px 0px 0px;
                font-size: 13px;
                .like-share-container{
                    float: right;
                }
            }
        }
        .product-box{
            width: 100%;
            overflow: hidden;
            margin: 23.437px 0px 0px;
            padding: 0px 0px 0px 12px;
            .product-list{
                height: 80.58px;
                // width: 364px;
                display: flex;
                overflow-y: hidden;
                white-space: nowrap;
                margin-bottom: 5px;
                .good-box{
                    width: 187.5px;
                    height: 80.85px;
                    display: flex;
                    box-sizing: border-box;
                    margin-right: 10px;
                    .good-img{
                        width: 62px;
                        height: 80.85px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .good-info{
                        width: 125.39px;
                        height: 80.85px;
                        background-color: rgb(241, 236, 236);
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                        padding: 9.375px;
                        .title{
                            white-space: normal;
                            font-size: 13px;
                            color: #444;
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-box-orient: vertical;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 2;
                        }
                        .price{
                            margin: 11.7px 0px 0px;
                            color: #d0021b;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
}
    
</style>
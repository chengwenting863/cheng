<template>
    <div class="home-page" ref="mabylike">
        <div>
            <Headerbar></Headerbar>
            <Swape></Swape>
            <div class="claear">
                <ul class="clearfix">
                    <router-link active-class="active" tag="li" to="/home/newshop">
                        <span><img src="@/assets/img/05.png" alt=""></span>
                        <span>新品到着</span>
                    </router-link>
                    <router-link active-class='active' to="/home/stroll" tag='li'>
                        <span><img src="@/assets/img/06.png" alt=""></span>
                        <span>人气搭配</span>
                    </router-link>
                    <router-link active-class='active' to="" tag='li'>
                        <span><img src="@/assets/img/07.png" alt=""></span>
                        <span>折扣专区</span>
                    </router-link>
                    <router-link active-class='active' to="" tag='li'>
                        <span><img src="@/assets/img/08.png" alt=""></span>
                        <span>有货拼团</span>
                    </router-link>
                    <router-link active-class='active' to="" tag='li'>
                        <span><img src="@/assets/img/09.png" alt=""></span>
                        <span>全部分类</span>
                    </router-link>
                </ul> 
            </div>
        <!-- 热门品类 -->
             <div class="kong"></div>
            <div class="hot-category">
                <div class="title"><h2>热门品类</h2> </div>
                <ul class="cate-list">
                    <li  v-for="item in exprect " :key="item.id">
                        <div class="img-box">
                            <img :src="item.img" :alt="item.nm">
                        </div>
                    </li>
                </ul>
            </div> 
        <!-- 热门品牌 -->
            <div class="kong"></div>
            <div class="img-pic">
                <div class="title"><h2>热门品牌</h2> </div>
                <ul class="hot-pic">
                    <li  v-for="item in imga " :key="item.id">
                        <div class="img-box1">
                            <img :src="item.img">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="kong"></div>
        <!-- 新人福利 -->
            <div class="newmen">
                <img src="@/assets/img/11.jpg" alt="">
            </div>
            <div class="hot-single">
                <div class="title"><h2>人气推荐</h2> </div>
                <div class="newmen">
                    <img src="@/assets/img/12.jpg" alt="">
                </div>
                <div class="hot-goodlist" ref="exprect">
                    <ul class="hot-goodlistul">
                        <li  v-for="item in hotlist " :key="item.id">
                            <img :src="item.img" alt="">
                            <div class="good-info">
                                <p class="price">{{item.price}}</p>
                                <p class="view-num">{{item.men}}</p>
                                <p class="view-status">{{item.nm}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        <!-- 你可能喜欢 -->
            <div class="kong"></div>
            <div class="maby-like" >
                <p class="maby-title">
                    <span class="iconfont">&#xe7fb;</span>
                    <span>你可能喜欢</span>
                </p>
                <div class="maby-box">
                    <div class="maby-info" v-for="item in mabyover " :key="item.id">
                        <div class="maby-one"></div>
                        <div class="maby-two"><img :src="item.img" alt=""></div>
                        <div class="maby-three">
                            <p class="name">{{item.name}}</p>
                            <p class="price">
                                <span class="xianjia">{{item.xianjia}}</span>
                                <span class="yuanjia">{{item.yuanjia}}</span>
                            </p>
                            <span class="iconfont">&#xe60c;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from "@better-scroll/pull-up"
import {get} from '@/api/http'
import Headerbar from '../../../components/headerbar'
import Swape from '../../../components/swape'
BScroll.use(Pullup)

export default {
    components: {
        Headerbar,
        Swape
  },
  data(){
      return{
          exprect:[],
          imga:[],
          hotlist:[],
          mabyover:[],
          start:9,
          limit:10,
      }
  },
    created(){
        this.getaaa(),
        this.getbbb(),
        this.getccc(),
        this.getddd()
    },
  
  methods:{
      
    async getaaa(){
    let rs = await get('/expectlist')
    this.exprect = rs.data;
    },
    async getbbb(){
      let rs = await get('/imgpic')
      this.imga = rs.data;
    },
    async getccc(){
      let rs = await get('/dist')
      this.hotlist = rs.data;
      this.$nextTick(()=>{
        this.initScroll()
    })
    },
    initScroll(){
        if(this.bs){
            this.bs.refresh()
            return
        }
        //确保DOM生成完毕
        this.bs = new BScroll(this.$refs.exprect,{
            scrollX:true,
            click:true,
            probeType:3
        })
    },

    // 滚动
    async getddd(){
      let rs = await get('/over')
      this.mabyover = rs.data;
      this.$nextTick(()=>{
        this.initmovieScroll()
    })
    },
     initmovieScroll(){
        this.bscroll = new BScroll(this.$refs.mabylike, {
        pullUpLoad: true,
        click:true
        })
         this.bscroll.on("pullingUp", () => {
                console.log("up....")
                // this.getMoreMovielist()
        })
    },
    },
}
</script>

<style lang="scss" scoped>
.home-page{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .claear{
        height: 93.85px;
        position: relative;
        .clearfix{
        height: 75.85px;
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        li{
            height: 70px;
            width: 20%;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                height: 40px;
                width: 40px;
            }
            span{
                flex: 1;
                font-size: 12px;
                line-height: 22px;
            }
        }
    }
    }
    
    .kong{
        height: 14PX;
        width: 100%;
        background-size: 100% 100%;
        background: #f0f0f0;
    }
    .title{
        height: 46.4px;
        background: #f0f0f0;
        line-height: 46.4px;
        text-align: center;
        h2{
        font-size: 15px;
        font-weight: 500;
        color: #444;
        }
    }
    .hot-category{
        border-bottom: 1px solid #e0e0e0;
        .cate-list{
            background-color: #fff;
               display: flex;
               flex-wrap: wrap;
            li{
                display: flex;
                flex-direction: column;
                width: 92.75px;
                height: 101.95px;
                border-top: 1px solid #e0e0e0;
                border-left: 1px solid #e0e0e0;
                overflow: hidden;
                .img-box{
                    width: 100%;
                    height: 100%;
                    line-height: 100.95px;
                    text-align: center;
                    overflow: hidden;
                    font-size: 0;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
    .img-pic{
        border-bottom: 1px solid #e0e0e0;
        background: #fff;
        .hot-pic{
            display: flex;
            flex-wrap: wrap;
            li:last-child{
                width:186.5px ;
            }
            li{
                background-color: #e0e0e0;
                width: 92.75px;
                height: 92.75px;
                overflow: hidden;
                padding: 1PX 1PX 0 0;
                  .img-box1{
                    width: 100%;
                    height: 100%;
                    line-height: 92.75px;
                    text-align: center;
                    overflow: hidden;
                    font-size: 0;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
    .newmen{
        height: 117.19px;
        width: 100%;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .hot-goodlist{
        width: 100%;
        overflow: scroll;
        .hot-goodlistul{
            width: 600px;
            height: 183.35px;
            white-space: nowrap;
            padding: 14.684px 0px 9.96094px 15.2344px;
            li{
                width: 89.64px;
                height: 169.91px;
                display:inline-block;
                margin-right: 10px;
                img{
                    height: 120px;
                    width: 100%;
                }
                .good-info{
                    text-align: center;
                    .price{
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 1;
                        color: #444;
                         margin-top: 5px;
                    }
                    .view-num{
                        font-size: 9px;
                        color: #b0b0b0;
                         line-height: 1;
                         margin-top: 5px;
                    }
                    .view-status{
                        font-size: 9px;
                        color: #b0b0b0;
                         line-height: 1;
                         margin-top: 5px;
                    }
                }
            }
        }
    }
    .maby-like{
        width: 100%;
        background-color: #fff;
        padding-left: 8.78906px;
        border-top: 1px solid #ccc;
        .maby-title{
            height: 60.94px;
            font-size: 20px;
            line-height: 60.94px;
            text-align: center;
            color: #dadada;
            .iconfont{
                font-size: 18.16px;
                padding-right: 5px;
            }
        }
        .maby-box{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .maby-info{
                width: 161.71px;
                height: 296.48px;
                margin: 5.86px 8.8px 23.4px;
                .maby-one{
                    height: 16px;
                    width: 100%;
                }
                .maby-two{
                    height: 215px;
                    width: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .maby-three{
                    position: relative;
                    font-size: 12px;
                    .name{
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
                        .xianjia{
                            color: #d62927;
                        }
                        .yuanjia{
                            text-decoration:line-through;
                            margin: 0 0 0 6px;
                            color: #b0b0b0;
                        }
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

</style>
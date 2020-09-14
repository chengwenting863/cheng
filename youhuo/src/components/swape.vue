<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/img/01.jpg" /></div>
        <div class="swiper-slide"><img src="../assets/img/02.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/img/03.jpg" /></div>
        <div class="swiper-slide"><img src="../assets/img/04.jpg" /></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{

    },
    mounted() {
    var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination', //分页器
    loop: true, //循环
    paginationClickable:true, //分页器点击
    spaceBetween: 30, // swiper-slide 间的距离为30
    autoplay: 1000, //时长
    autoplayDisableOnInteraction: false, //点击不会取消自动
    });
}
}
</script>

<style lang="scss" scoped>
.swiper-container {
width: 100%;
height: 182.81px;
img{
    height: 100%;
}
}
</style>
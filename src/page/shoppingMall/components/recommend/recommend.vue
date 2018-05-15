<template>
    <div class="recommend">
        <div class="title">商品推荐</div>
        <div class="recommend-list">
            <swiper :options='swiperOption'>
                <swiper-slide v-for="item in recommend" :key="item.goodsId">
                    <router-link tag='div' class="item" :to="'/goodsDetail?goodsId='+item.goodsId" >
                        <img v-lazy="item.image" alt="">
                        <div class="price">
                            <span class="real-price">￥{{item.price}}</span>
                            <span class="del-price">￥{{item.mallPrice}}</span>
                        </div>
                        <div class="recommend-tips">推荐</div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
        <div class="floor-list">
            <div class="floor">
                <div class="floor-title">
                    <div class="floor-num">1F</div>
                    <div class="desc">{{floorName.floor1}}</div>
                </div>
                <div class="floor-goods  clearfix">
                    <router-link  v-for="item in floor1" :key="item.goodsId" tag='div' class="item" :to="'/goodsDetail?goodsId='+item.goodsId" >
                        <img v-lazy="item.image" alt="">
                    </router-link>
                </div>
            </div>
            <div class="floor">
                <div class="floor-title">
                    <div class="floor-num">2F</div>
                    <div class="desc">{{floorName.floor2}}</div>
                </div>
                <div class="floor-goods  clearfix">
                    <router-link  v-for="item in floor2" :key="item.goodsId" tag='div' class="item" :to="'/goodsDetail?goodsId='+item.goodsId" >
                        <img v-lazy="item.image" alt="">
                    </router-link>
                </div>
            </div>
            <div class="floor">
                <div class="floor-title">
                    <div class="floor-num">3F</div>
                    <div class="desc">{{floorName.floor3}}</div>
                </div>
                <div class="floor-goods  clearfix">
                    <router-link v-for="item in floor3" :key="item.goodsId" tag='div' class="item" :to="'/goodsDetail?goodsId='+item.goodsId" >
                        <img :src="item.image" alt="">
                    </router-link>
                </div>
            </div>
        </div>
        <div class="hotGoods">
            <div class="floor-title">
                <div class="floor-num">火</div>
                <div class="desc">火爆专区</div>
            </div>
            <div class="goods-list">
                <router-link tag='div' :to="'/goodsDetail?goodsId='+item.goodsId" v-for="item in hotGoods" :key="item.goodsId" class="item">
                    <div class="img">
                        <img v-lazy="item.image" alt="">
                    </div>
                    <div class="desc">{{item.name}}</div>
                    <div class="price">
                        <div class="left">￥{{item.mallPrice}}</div>
                        <div class="right">￥{{item.price}}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["recommend",'floorName','floor1','floor2','floor3','hotGoods'],
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3
                }
            };
        },
    };
</script>

<style lang='stylus' scoped>
.recommend 
    background: #fff;
    margin-bottom: 20px;
    .title 
        color: #dd574f;
        font-size: 16px;
        height: 36px;
        line-height: 36px;
        padding-left: 8px;
    .recommend-list 
        display: flex;
        .item 
            position relative
            box-sizing: border-box;
            display: flex;
            flex-shrink: 0;
            flex-direction: column;
            align-items: center;
            border-right: 1px solid #ececec;
            border-top: 1px solid #ececec;
            padding-top: 20px;
            img 
                width: 80%;
            .price 
                padding-bottom: 5px;
                span 
                    display: block;
                    text-align: center;
                .del-price 
                    text-decoration: line-through;
                    font-size: 13px;
                    color: #ccc;
                    margin-top: 2px;
            .recommend-tips
                position absolute
                right 0
                background #de2c01
                top 50%
                transform translateY(-50)
                color #fff
                font-size 12px
                padding 4px 12px
                border-radius 12px 0 0 12px

    .floor-title
        display flex
        justify-content center
        align-items center
        height 40px
        line-height 40px
        background #efefef
        color #e0440e   
    .floor-num
        width 28px
        height 28px
        border-radius 50%
        background #e0440e
        line-height 28px
        text-align center
        color #fff
        font-size 16px
        margin-right 10px             
    .floor-list
        .floor-goods
            .item
                width 50%
                float left
                img
                    width 100%
                    border-right 1px solid #ececec
                    border-bottom 1px solid #ececec
                    box-sizing border-box
    .hotGoods
        .goods-list
            display flex
            flex-wrap wrap
            .item
                display flex
                width 50%
                flex-direction column
                align-items center
                .img
                    height 160px
                    padding 20px
                    box-sizing border-box
                    img
                        width 80%
                .desc
                    color #f44a60
                    padding 0 5px
                    height 35px
                .price
                    width 100%
                    display flex
                    justify-content space-between
                    padding 0 24px
                    box-sizing border-box
                    margin-top 10px
                    .left
                        color #c63110
                        font-size 18px
                    .right
                        text-decoration line-through
                        color #e8e8e8
</style>
<template>
    <div class="infoBar shadow-lg container-fluid">
        <div class="infoBar__item" v-for="(item,index) in infoStats" :key="index">
            <p class="m-0 mt-1 mb-1 text-secondary">{{item.title}}</p>
            <p class="m-0 mt-1 mb-1 h2 infoBar__item-count">{{item.count}}</p>
            <div class="m-0 mt-2 mb-2">
                <b-icon :class="item.class" :icon="item.icon" font-scale=".8"></b-icon>
                <span class="text-success mr-1 ml-1" :class="item.class">{{item.rate}}</span>
                <span class="text-secondary">vs last week</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'',
    data:()=>{
        return{
        }
    },
    methods:{
    },
    computed:{
        ...mapState({
            infoStats : state => state.InfoBar.infoStats 
        })
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/mixins.scss";
    .infoBar{
        @include colorBack(#f1f2f3,#000);
        @include flexCenter(space-around,center,false);
        @include fontSet(16px,500);
        padding: 15px;
        border-radius: 15px;
        height: 100%;
        &__item{
            @include flexItems(center,flex-start,column,25%,0,0);
            border-right: 1px solid rgba($color: #000000, $alpha: .1);
            padding: 0px 10px;
            &-count{
                color:#354c6b;
            }
        }
    }
</style>
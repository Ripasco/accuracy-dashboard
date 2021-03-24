<template>
    <div class="storage">
        <div class="storage__item">
            <div class="storage__item-title">Склад</div>
            <div class="storage__item-info">Статистика по всем товарам</div>
        </div>
        <div class="storage__item">
            <div class="storage__item-content" v-for="(item,index) in statsStorage" :key="index">
                <p class="storage__item-content-title">{{item.title}}</p>
                <h1 class="storage__item-content-stat">{{item.stat}}</h1>
                <p class="storage__item-content-info">{{item.info}}</p>
            </div>
        </div>
    </div>
</template>
<script>

import { mapState } from 'vuex'

export default {

    name:'storageHeader',
    data:()=>{
        return{

        }
    },
    methods:{

    },
    computed:{
        ...mapState({
            statsStorage : state => state.Storage.allStorageStats
        })
    }
}
</script>
<style lang="scss" scoped>

@import "../../../assets/sass/mixins.scss";

    .storage{
        box-shadow: 0px 1em 3em rgba(#000,.175);
        max-height: 250px;
        &__item{
            @include fontSet(14px,500);
            padding: 20px;
            &-title{
                @include fontSet(18px,600);
                margin:10px 0px;
            }
            &-info{
                @include fontSet(13px,600);
                color: rgb(150, 150, 150);
            }
            &-content{
                @include flexItems(flex-start,start,column,20%,0,10px 20px);
                &-title{
                    @include fontSet(16px,500);
                    margin:0;
                    padding:0;
                }
                &-stat{
                    @include fontSet(26px,bold);
                    font-weight: bolder;
                    margin: 10px 0px;
                }
                &-info{
                    @include fontSet(15px,500);
                    color: rgb(150, 150, 150);
                    margin:0;
                    padding:0;
                }
            }
        }
        &__item:nth-child(1){
            padding: 0px 40px 0px 40px;
        }
        &__item:nth-child(2){
            text-align: left;
            @include flexCenter(space-around,center,false);
        }
    }
</style>
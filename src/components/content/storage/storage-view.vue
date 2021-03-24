<template>
    <div class="storage">
        <div class="storage__filter">
            <div class="storage__filter-item">
                <div class="storage__filter-item-tag" v-for="(item,index) in filterTags" :key="index">
                    <span>{{item.title}}</span>
                    <b-icon icon="x-diamond" font-scale="1.4" class="icon"></b-icon>
                </div>
                <div class="storage__filter-item-icon" >
                    <b-icon :icon="arrowTitle" font-scale="1.25" class="arrow-icon" @click="arrowChange" v-show="isActive"></b-icon>
                </div>
            </div>
            <div class="storage__filter-item">
                <div class="btn">
                    <b-icon icon="cloud-upload" class="btn__icon"></b-icon>
                    <span class="btn__text">XLS</span>
                </div>
            </div>
        </div>
        <div class="storage__content">

        </div>
    </div>    
</template>
<script>
export default {
    name:'storageView',
    data:()=>{
        return{
            filterTags:[
                {
                    title:'Москва'
                },
                {
                    title:'Пермь'
                },
                {
                    title:'Саратов'
                }
            ],
            arrowTitle:'arrow90deg-down',
            isActive:true,
        }
    },
    methods:{
        arrowChange(){
            this.isActive = false;
            setTimeout(()=>{
                if(this.arrowTitle == 'arrow90deg-down'){
                    this.arrowTitle = "arrow90deg-up"
                }else{
                    this.arrowTitle = 'arrow90deg-down'
                }
                this.isActive = true;
            },80)
        }
    }
}
</script>
<style lang="scss" scoped>

@import "../../../assets/sass/mixins.scss";

    .storage{
        margin: 25px;
        @include colorBack(#f1f2f3,#000);
        box-shadow: 0px 1em 3em rgba($color: #000000, $alpha: .175);
        &__filter{
            @include flexCenter(space-around,center,false);
            padding: 10px;
            &-item{
                position: relative;
                
                &-tag{
                    height: 60%;
                    padding: 10px;
                    border-bottom: 3px solid #f1f2f3;
                    border-radius: 13px;
                    margin: 0px 5px;
                    cursor: pointer;
                    @include colorBack(rgba(197, 197, 197,.2),rgb(0, 0, 0));
                    @include flexCenter(space-around,center,false);
                    &:hover{
                        background-color: rgba(15, 125, 235,.15);
                        border-bottom: 3px solid #0f7deb;
                        color: #0f7deb;
                    }
                    &:hover .icon{
                        transform: rotate(180deg);
                        color: rgba($color: #0f7deb, $alpha: 1);
                    }
                    &:hover span{
                        opacity: .2;
                    }
                }
                &-icon{
                    position: absolute;
                    right:25px;
                    margin-right:auto;
                    cursor: pointer;
                    &:hover .arrow-icon{
                        color: #0f7deb;
                    }
                }
            }
            &-item:nth-child(1){
                @include flexItems(flex-start,center,false,80%,0,0);
                padding: 8px;
                border: 1px solid rgba(128, 128, 128,.255);
                
            }
            &-item:nth-child(2){
                @include flexItems(center,center,false,20%,0,0);
                span{
                    @include fontSet(15px,600);
                }
            }
        }
    }
    .icon{
        margin: 0px 0px 0px 10px;
        color: rgba($color: #0f7deb, $alpha: .2);
        transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1); 
    }
    .btn{
        @include flexCenter(space-around,center,false);
        padding: 10px 25px;
        width: 15%;
        border: 1px solid rgba($color: #000000, $alpha: .151);
        cursor: pointer;
        border-radius: 4px;
        border-bottom: 3px solid rgba($color: #000000, $alpha: .151);
        &:hover{
            background-color: rgba(15, 125, 235,.15);
            border-bottom: 3px solid #0f7deb;
            color: #0f7deb;
        }
        &__icon{
            transition: all .25s cubic-bezier(.1,1.95,.66,1.7);
        }
        &:hover &__icon{
            transform: translateY(-3.5px);
        }
    }
    .arrow-icon{
        transition: all 1.15s cubic-bezier(0.075, 0.82, 0.165, 1);
        animation: Animate .45s cubic-bezier(0.075, 0.82, 0.165, 1);
    }   
    @keyframes Animate {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
</style>
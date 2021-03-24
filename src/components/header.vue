<template>
    <div class="header">
        <div class="header__item">
            <div class="header__item-logo">
                Accuracy
            </div>
            <span class="header__item-span">.io</span>
        </div>
        <div class="header__item">
            <b-icon icon="bell" font-scale="2"></b-icon>
        </div>
    </div>
</template>
<script>
export default {

    name:'',
    data:()=>{
        return{

        }
    },
    methods:{

    },
    computed:{

    }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/mixins.scss";
    .header{
        border-bottom: 1px solid rgba(0,0,0,.3);
        min-height: 30px;
        @include flexCenter(space-between,center,false);
        &__item{
            @include flexItems(flex-start,center,false,50%,0,10px);
            &-logo{
                @include fontSet(30px,bold);
            }
            &-span{
                @include fontSet(30px,bold);
                color: rgb(79, 163, 241);
            }
        }
        &__item:nth-child(2){
            justify-content: flex-end;
        }

    }
</style>

    
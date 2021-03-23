<template>
    <div class="navMenu__main">
        <div class="navMenu__main" v-for="(item,index) in menu" :key="index">
            <div class="navMenu__main-head">{{item.title}}</div>
            <div class="navMenu__main-menu">
                <div v-for="(item,index) in item.menuChild" :key="index" class="navMenu__main-menu-item">
                    <b-icon :icon="item.icon" font-scale="1.5"></b-icon>
                    <p class="text">
                        {{item.title}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    name:'',
    data:()=>{
        return{
            menu:[
                {
                    title:"Основное",
                    menuChild:[
                        {
                            title:"Аналитика",
                            icon:"grid",
                        },
                        {
                            title:"Склад",
                            icon:"building",
                        },
                        {
                            title:"Товары",
                            icon:"box-seam",
                        },
                        {
                            title:"Оповещения",
                            icon:"bell",
                        },
                    ]
                },
                {
                    title:'Профиль',
                    menuChild:[
                        {
                            title:"Личный кабинет",
                            icon:"grid",
                        },
                        {
                            title:"Интеграция",
                            icon:"building",
                        },
                        {
                            title:"Тарифы",
                            icon:"box-seam",
                        },
                        {
                            title:"Помощь",
                            icon:"bell",
                        },
                    ]
                }
            ]
        }
    },
    methods:{

    },
    computed:{
        MenuMain(){
            return this.menuMain
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../../../assets/sass/mixins.scss";

    .navMenu__main{
        padding: 15px 0px 15px 15px;
        &-head{
            @include colorBack(#f1f2f3,rgb(133, 132, 132));
            @include fontSet(15px,600);
            margin: 30px 0px;
        }
        &-menu{
            &-item{
                @include flexCenter(flex-start,center,false);
                @include colorBack(#f1f2f3,#000);
                padding:0px 10px;
                border-right: 3px solid #f1f2f3;
                @include fontSet(15px,600);
                cursor: pointer;
                &:hover{
                    background-color: rgba(15, 125, 235,.15);
                    border-right: 3px solid #0f7deb;
                    color: #0f7deb;
                }
                
            }
        }
    }
    .text{
        padding: 0px 30px;
    }
</style>

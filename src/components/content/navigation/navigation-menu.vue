<template>
    <div class="navMenu__main">
        <div class="navMenu__main">
            <div class="navMenu__main-head">Основное</div>
            <div class="navMenu__main-menu">
                <div v-for="(itemMenu,index) in menuChild" :key="index" class="navMenu__main-menu-item  mb-3 p-2" :class="itemMenu.class" @click="selectMenu(itemMenu)" ref="menuItem">
                    <b-icon :icon="itemMenu.icon" font-scale="1.5"></b-icon>
                    <p class="text align-middle m-0">
                        {{itemMenu.title}}
                    </p>
                </div>
            </div>
        </div>
        <div class="navMenu__main">
            <div class="navMenu__main-head">Профиль</div>
            <div class="navMenu__main-menu">
                <div v-for="(item,index) in profileChild" :key="index" class="navMenu__main-menu-item mb-3 p-2" :class="item.class" @click="selectMenu(item)" ref="profilItem">
                    <b-icon :icon="item.icon" font-scale="1.5"></b-icon>
                    <p class="text align-middle m-0">
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
              menuChild:[
                  {
                      title:"Склад",
                      icon:"building",
                      class:''
                  },
                  {
                      title:"Товары",
                      icon:"box-seam",
                      class:''
                  },
                  {
                      title:"Аналитика",
                      icon:"grid",
                      class:''
                  },
                  {
                      title:"Оповещения",
                      icon:"bell",
                      class:''
                  },
              ],
              profileChild:[
                  {
                      title:"Личный кабинет",
                      icon:"person",
                      class:''
                  },
                  {
                      title:"Интеграция",
                      icon:"cloud-upload",
                      class:''
                  },
                  {
                      title:"Тарифы",
                      icon:"card-checklist",
                      class:''
                  },
                  {
                      title:"Помощь",
                      icon:"question-diamond",
                      class:''
                  },
              ]
        }
    },
    methods:{
        selectMenu(item){
            if(item.title == "Склад"){
                this.$root.$emit('change','storage');
            }else if(item.title == "Товары"){
                this.$root.$emit('change','products');
            }else if(item.title == "Аналитика"){
                this.$root.$emit('change','analisys');
            }else{
                console.error("Some runs wrong");
            }

            for (let i = 0; i < this.profileChild.length; i++) {
                if(this.profileChild[i] == item && this.profileChild[i].class != "select"){
                    this.profileChild[i].class = "select";
                }else{
                    this.profileChild[i].class = '';
                }
            }
            for (let i = 0; i < this.menuChild.length; i++) {
                if(this.menuChild[i] == item && this.menuChild[i].class != "select"){
                    this.menuChild[i].class = "select";
                }else{
                    this.menuChild[i].class = '';
                }
            }
        }
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
    .select{
        background-color: rgba(15, 125, 235,.15);
        border-right: 3px solid #0f7deb;
        color: #0f7deb;
    }
    .text{
        padding: 0px 30px;
    }
</style>

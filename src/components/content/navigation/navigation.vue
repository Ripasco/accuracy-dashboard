<template>
    <div class="navbars">
        <nav-menu/>
    </div>
</template>
<script>

import NavMenu from './navigation-menu.vue'

export default {
    name:'navBar',
    data:()=>{
        return{

        }
    },
    components:{
        NavMenu
    },
    mounted(){
        // this.$root.$on("change",el => {
        //     console.log(el);
        // })
    }
}
</script>

<style lang="scss">

@import "../../../assets/sass/mixins.scss";

    .navbars{
        box-shadow: 0px 1em 3em rgba(#000,.175);
        height: 91.92vh;
        max-width: 300px;
        min-width: 300px;
        @include colorBack(#f1f2f3,#000);
        border-right: 1px solid rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="analisys d-flex mt-3">
        <div class="col-lg-8 d-flex flex-column align-items-center">
            <info-bar class="col-lg-3 mw-100" />
            <daily-active class="col-lg-5 mw-100"/>
            <div class="d-flex col-lg-4 mw-100 p-0 shadow-lg justify-content-between mt-3">
                <Demography class="col-lg-6 rounded-lg"/>
                <Gender class=" shadow-lg charts__item rounded-lg"/>
                <operating-sys class="col-lg-3 shadow-lg rounded-lg"/>
            </div>
        </div>
        <div class="d-flex col-lg-5 flex-column align-items-center"></div>
    </div>
</template>
<script>
import DailyActive from '../../modules/charts/daily-active.vue'
import Demography from '../../modules/charts/demography.vue'
import Gender from '../../modules/charts/gender.vue'

import infoBar from '../../modules/charts/info-bar.vue'
import OperatingSys from '../../modules/charts/operating-sys.vue'

export default {

    name:'',
    data:()=>{
        return{

        }
    },
    components:{
        infoBar,
        DailyActive,
        Demography,
        Gender,
        OperatingSys
    },
    methods:{

    },
    computed:{

    }
}
</script>
<style lang="scss" scoped>
    .charts__item{
        flex-basis: 23%;
    }
</style>
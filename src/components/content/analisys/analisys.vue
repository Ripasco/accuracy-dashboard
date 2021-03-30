<template>
    <div class="analisys">
        <analisys-header/>
        <analisys-charts/>
    </div>
</template>
<script>
import AnalisysCharts from './analisys-charts.vue'
import AnalisysHeader from './analisys-header.vue'
export default {

    name:'',
    data:()=>{
      
          return{

        }
    },
    components:{
        AnalisysHeader,
        AnalisysCharts
    },
    methods:{

    },
    computed:{

    }
}
</script>
<style scoped>

</style>
<template>
    <div class="system">
        <h2 class="system__title">System</h2>
        <div class="system__chart">
            <div class="system__chart-text">65%</div>
            <canvas ref="canvas" ></canvas>
        </div>
    </div>
</template>
<script>

import Chart from 'chart.js'

export default {
    name:'',
    data:()=>{
        return{
        }
    },
    mounted(){

        let chart = new Chart(this.$refs.canvas, {
			type: 'pie',
			data: {
                labels:['Anroid','Windows','IOS'],
                datasets: [{
                    labels: 'Operating System',
                    data: [40, 100,20],
                    backgroundColor: [
                        'rgba(92, 193, 202,.8)',
                        "rgba(84, 114, 232,.8)",
                        "rgba(255, 82, 82,.8)",
                    ],
                    pointBackgroundColor:[
                        'rgba(92, 193, 202,.8)',
                        "rgba(84, 114, 232,.8)",
                        "rgba(255, 82, 82,.8)",
                    ],
                    borderWidth: 2
                }]  
            },
            options:{
                text: {
                    display: true,
                    text: 'Operating System'
                }
            }
		});
        chart.options.cutoutPercentage = 85;
        chart.update();
        console.log(chart);
		
    },
    methods:{
    },
    computed:{
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/mixins.scss";

    .system{
        padding: 15px;
        width: 100%;
        @include colorBack(#f1f2f3,#000);
        &__title{
            @include fontSet(22px,600);
            color:#354c6b;
        }
        &__chart{
           position: relative;
           &-text{
                @include fontSet(30px,600);
                position: absolute;
                top: 46%;
                left: 40%;
                color:rgb(84, 114, 232);
           }
        }
    }
</style>
<template>
    <div class="dailyActive shadow-lg">
        <h2 class="dailyActive__title">Уровень активности</h2>
        <canvas ref="dailyActive" class="chartjS" height="250"></canvas>
    </div>
</template>
<script>

import Chart from 'chart.js'

export default {
    name:'dailyActive',
    data:()=>{
        return{

        }
    },
    mounted(){
        const chart = new Chart(this.$refs.dailyActive,{
            type: 'line',
            data: {
                labels: ['23.03', '24.03', '25.03', '26.03', '27.03', '28.03', '29.03'],
                datasets: [{
                    label: 'Активных пользователей',
                    data: [1100, 2530, 1604, 5425, 7148, 4022, 8415],
                    fill: false,
                    borderColor: '#5473e8'
                },
                {
                    label: 'Активных покупателей',
                    data: [520, 1530, 1251, 3250, 5142, 3115, 6485],
                    fill: false,
                    borderColor: '#ff5151'
                },
                ]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Уровень активности пользователей за неделю'
                },
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        display: true,
                    }]
                }
            }
        }) 
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

    .dailyActive{
        width: 100%;
        padding: 25px;
        margin: 10px 0px;
        height: 500px !important;
        @include colorBack(#f1f2f3,#000);
    }
    .chartjS{
        width: 100%;
    }
    .dailyActive__title{
        @include fontSet(25px,600);
        color:#354c6b;
    }
</style>
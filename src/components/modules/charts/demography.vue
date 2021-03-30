<template>
    <div class="demography shadow-lg">
        <div class="demography__title">Демография</div>
        <div class="mt-3 d-flex align-items-start">
            <div class="d-flex flex-column">
                <p class="mt-1 mb-2 text-secondary">Years</p>
                <div>
                    <p class="mt-1 mb-1 text-secondary">Los angeles</p>
                    <p class="mt-1 mb-1 text-secondary">San Jose</p>
                    <p class="mt-1 mb-1 text-secondary">San Diego</p>
                </div>
            </div>
            <div class="d-flex flex-column w-75 ml-4" v-for="(item,index) in demography" :key="index">
                <div  class="d-flex justify-content-around text-secondary">
                    <span v-for="(el,idn) in item.title" :key="idn">{{el}}</span>
                </div>
                <div v-for="(count,idx) in item.dataset" :key="idx" class="d-flex justify-content-around  mt-2">
                    <div  v-for="(val,id) in count.data" :key="id" class="wrap" :style="val"></div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'dailyActive',
    data:()=>{
        return{
            demography:[
                {
                    title:["<20","21-30","31-40","41-50","51-60","61-70","<70"],
                    dataset:[
                        {
                            title:'losAngeles',
                            data:[
                                "opacity:1",
                                "opacity:0.1",
                                "opacity:0.7",
                                "opacity:0.5",
                                "opacity:0.3",
                                "opacity:0.8",
                                "opacity:0.5"
                            ]
                        },
                        {
                            title:'losAngeles',
                            data:[
                                "opacity:1",
                                "opacity:0.1",
                                "opacity:0.7",
                                "opacity:0.5",
                                "opacity:0.3",
                                "opacity:0.8",
                                "opacity:0.5"
                            ].reverse()
                        },
                        {
                            title:'losAngeles',
                            data:[
                                "opacity:1",
                                "opacity:0.1",
                                "opacity:0.7",
                                "opacity:0.5",
                                "opacity:0.3",
                                "opacity:0.8",
                                "opacity:0.5"
                            ]
                        },
                    ]
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/mixins.scss";

    .demography{
        padding: 15px;
        width: 100%;
        @include colorBack(#f1f2f3,#000);
    }
    .demography__title{
        @include fontSet(25px,600);
        color:#354c6b;
    }
    .wrap{
        width: 70px;
        height: 25px;
        background-color: #5473e8;;
    }
</style>
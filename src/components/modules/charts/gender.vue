<template>
    <div class="gender">
        <div class="gender__title">Gender</div>
        <div class="gender__content mt-3">
            <div class="d-flex justify-content-center align-items-center flex-column" v-for="(item,index) in genders" :key="index">
                <div class="d-flex justify-content-between w-100">
                    <span>{{item.title}}</span>
                    <span>{{item.percent}}%</span>
                </div>
                <div class="progress w-100">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :class="item.backColor" :style="`width:${item.percent}%`" :aria-valuenow="item.percent" aria-valuemin="0" aria-valuemax="100"></div>
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
            genders:[
                {
                    title:'Female',
                    percent:53,
                    backColor:'bg-primary'
                },
                {
                    title:'Male',
                    percent:41,
                    backColor:'bg-info'
                },
                {
                    title:'Third gender',
                    percent:6,
                    backColor:'bg-dark'
                },
            ]
        }
    },
    methods:{
    },
    computed:{
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/mixins.scss";

    .gender{
        padding: 15px;
        width: 100%;
        @include colorBack(#f1f2f3,#000);
        &__title{
            @include fontSet(22px,600);
            color:#354c6b;
        }
    }
    
</style>
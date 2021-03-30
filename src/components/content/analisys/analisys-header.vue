<template>
    <div class="container-fluid mt-3">
        <div class="row d-flex justify-content-between">
            <div class="col-lg-6 d-flex justify-content-start align-items-center">
                <div class="d-flex align-items-center">
                    <p class="ml-2 mb-0 link">Day</p>
                    <p class="ml-2 mb-0 link">Week</p>
                    <p class="ml-2 mb-0 link">Month</p>
                    <p class="ml-2 mb-0 link">Year</p>
                </div>
                <div class="d-flex justify-content-around ml-4 align-items-center">
                    <b-icon icon="calendar3-range" class="text-primary" font-scale="1"></b-icon>
                    <span class="ml-2 ">20.03.2021-27.03.2021</span>
                </div>
            </div>
            <div class="col-lg-6 d-flex justify-content-end link-active"> + Add widget</div>
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

@import "../../../assets/sass/mixins.scss";

    .link{
        @include fontSet(16px,500);
        color: rgb(109, 109, 109);
        cursor: pointer;
        transition: all 1.175s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
            color: #5473e8;
            text-decoration: underline;
        }
        &-active{
            @include fontSet(18px,500);
            color: #5473e8;
            cursor: pointer;
        }
    }
</style>
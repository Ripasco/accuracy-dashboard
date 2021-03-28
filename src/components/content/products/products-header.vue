<template>
    <div class="products d-flex justify-content-between shadow-lg align-items-center">
        <div class="d-flex justify-content-center flex-column">
            <h3 class="products__title">Товары</h3>
            <p class="products__info text-secondary">Обновлено 28.03.2021 в 16:30</p>
        </div>
        <div class="">
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary  shadow-lg rounded-lg">Обновить</button>
            </div>
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

    .products{
        padding: 15px 15px 5px 15px;
        &__info{
            @include fontSet(12px,bold);
        }
    }
</style>
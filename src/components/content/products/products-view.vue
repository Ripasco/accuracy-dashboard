<template>
    <div class="product shadow-lg">
        <div class="product__filter container-fluid p-4">
            <div class="form-group d-flex align-items-center">
                <div class="form-row col-lg-7">
                    <input type="text" class="form-control" placeholder="Поиск по артиклу...">
                </div>
                <div class="form-row col-lg-3">
                    <select v-model="countList[0].title" class="form-control">
                        <option v-for="(item,index) in countList" :key="index">
                            {{item.title}}
                        </option>
                    </select>
                </div>
                <div class="form-row col-lg-2">
                   <div class="btnUpload">
                        <b-icon icon="cloud-upload" class="btnUpload__icon"></b-icon>
                        <span class="btnUpload__text">XLS</span>
                    </div>
                </div>    
            </div>    
        </div>
        <div class="product__content">
            <div class="container-fluid">
                <table class="table table-hover table-bordered ">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col" v-for="(item,index) in productsTitle" :key="index" class="align-middle">{{item.title}}</th>
                        </tr>
                    </thead>
                    <tbody class="product__content-item">
                        <tr v-for="(item,index) in products" :key="index">
                            <td scope="row" class="text-left" v-for="(store,idx) in item.data" :key="idx">
                                <div v-if="store.isIcon">
                                    <b-icon :icon="store.icon" font-scale="1.3"></b-icon>
                                </div>
                                {{store.title}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>    
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {

    name:'',
    data:()=>{
        return{
            countList:[
                {
                    title:'Показывать по 10 шт.'
                },
                {
                    title:'Показывать по 100 шт.'
                },
                {
                    title:'Показывать по 1000 шт.'
                },
                {
                    title:'Показывать по 10000 шт.'
                },
            ]
        }
    },
    methods:{

    },
    computed:{
        ...mapState({
            productsTitle : state => state.Products.productsTitle,
            products : state => state.Products.products
        })
    }
}
</script>
<style lang="scss" scoped>

@import "../../../assets/sass/mixins.scss";

    .product{
        height: 71vh;
        margin:30px;
        @include colorBack(#f1f2f3,#000);
        &__content-item{
            cursor: pointer;
        }
    }

    .btnUpload{
        @include flexCenter(space-around,center,false);
        padding: 10px 25px;
        width: 65%;
        border: 1px solid rgba($color: #000000, $alpha: .151);
        cursor: pointer;
        border-radius: 4px;
        border-bottom: 3px solid rgba($color: #000000, $alpha: .151);
        &:hover{
            background-color: rgba(15, 125, 235,.15);
            border-bottom: 3px solid #0f7deb;
            color: #0f7deb;
        }
        &__icon{
            transition: all .25s cubic-bezier(.1,1.95,.66,1.7);
        }
        &:hover &__icon{
            transform: translateY(-3.5px);
        }
    }
    .icon{
        margin: 0px 0px 0px 10px;
        color: rgba($color: #0f7deb, $alpha: .2);
        transition: all .775s cubic-bezier(0.075, 0.82, 0.165, 1);
        transform:scale(.4); 
    }
</style>
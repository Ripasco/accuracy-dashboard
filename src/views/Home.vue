<template>
  <div class="home">
    <Header/>
    <div class="main">
      <nav-bar/>
      <div class="content">
        <div class="storage" v-show="contents[0].visible">
          <storage-header />
          <storage-content />
        </div>
        <div class="products" v-show="contents[1].visible">
          <products-header/>
          <products-view/>
        </div>
        <div class="analisys" v-if="contents[2].visible">
          <Analisys/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header.vue'
import NavBar from '../components/content/navigation/navigation.vue'
import StorageHeader from '../components/content/storage/storage-header.vue'
import StorageContent from '../components/content/storage/storage-view.vue'
import ProductsHeader from '../components/content/products/products-header.vue'
import ProductsView from '../components/content/products/products-view.vue'
import Analisys from '../components/content/analisys/analisys.vue'

export default {
  name: 'Home',
  components: {
    Header,
    NavBar,
    StorageHeader,
    StorageContent,
    ProductsHeader,
    ProductsView,
    Analisys
  },
  data:()=>{
    return{
      contents:[
        {
          title:'storage',
          visible:false,
        },
        {
          title:'products',
          visible:false,
        },
        {
          title:'analisys',
          visible:true,
        },
      ]
    }
  },
  mounted(){
    this.$root.$on('change', data => {
      
      for (let i = 0; i < this.contents.length; i++) {
        
        if(this.contents[i].visible == false && this.contents[i].title == data){
          this.contents[i].visible = true;
          console.log(data);
          console.log(this.contents[i].title);
        }else{
          this.contents[i].visible = false;
        }
      }
    });
  },
}
</script>
<style lang="scss" scoped>
    .content{
      width: 100%;
    }
    .main{
      display: flex;
    }
</style>

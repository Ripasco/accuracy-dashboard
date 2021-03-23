<template>
  <div class="home">
    <Header/>
    <div class="main">
      <nav-bar/>
      <div class="content">
        <div class="storage">
          <storage-header/>
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

export default {
  name: 'Home',
  components: {
    Header,
    NavBar,
    StorageHeader
  }
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

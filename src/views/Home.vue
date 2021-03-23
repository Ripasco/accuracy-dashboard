<template>
  <div class="home">
    <Header/>
    <nav-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header.vue'
import NavBar from '../components/content/navigation/navigation.vue'


export default {
  name: 'Home',
  components: {
    Header,
    NavBar
  }
}
</script>

<template lang="jade">
  #app
    app-header
    router-view
    app-footer
</template>

<script>
import Header from './components/Shareds/Header.vue'
import Footer from './components/Shareds/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  name: 'app'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

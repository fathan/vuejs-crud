<template lang="jade">
  #app-dashboard
    .container
      .row
        .col-md-12
          .jumbotron
            p.text-center
              {{ msg }}
              br
              button(v-on:click='greeting()', type='button', class='btn btn-default')
                | cek
</template>

<script>
export default {
  name: 'app-dashboard',
  data () {
    return {
      msg: 'Welcome to App with Vue.js 2'
    }
  },
  methods: {
    greeting: function () {
      console.log('Hello Word!')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

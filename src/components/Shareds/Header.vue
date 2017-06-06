<template lang="jade">
  #app-header
    nav.navbar.navbar-default
      .container
        .navbar-header
          button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#bs-example-navbar-collapse-1', aria-expanded='false')
            span.sr-only
              | Toggle navigation
            span.icon-bar
            span.icon-bar
            span.icon-bar
          router-link(to='/', class='navbar-brand')
            | CRUD With Vue.js 2

        .collapse.navbar-collapse#bs-example-navbar-collapse-1
          ul.nav.navbar-nav.navbar-right
            li
              router-link(to='/blogs') Blog
            li
              a Logout
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style lang="scss" scope>
  .navbar{
    border-radius: 0;
  }
</style>

<template lang="jade">
  #app-blog-new
    .container
      .row
        .col-md-12
          .panel.panel-default
            .panel-body
              .row
                .col-md-12
                  router-link(to='/blogs', class='btn btn-primary') Show All Blogs
                  br
                  br
              .row
                .col-md-6
                  .panel.panel-default
                    .panel-body
                      h4.text-center
                        strong INPUT DATA
                      hr
                      form
                        .col-md-6
                          label
                            | Title
                          input(v-model='title', type='text', class='form-control', placeholder='Masukan judul disini!')
                          br

                        .col-md-6
                          label
                            | Status
                          input(v-model='status', type='text', class='form-control', placeholder='Status!')
                          br

                        .col-md-12
                          label
                            | Description
                          textarea(v-model='description', class='form-control', placeholder='Masukan deskripsi disini!')
                          br

                        .col-md-12
                          br
                          button.btn.btn-success
                            | Submit

                .col-md-6
                  .panel.panel-default
                    .panel-body
                      h4.text-center
                        strong PREVIEW INPUT DATA
                      hr
                      .col-md-12
                        label Title :
                        p
                          {{ title }}
                      .col-md-12
                        label Description :
                        p
                          {{ description }}
                      .col-md-12
                        label Status :
                        p
                          {{ status }}
</template>

<script>
  export default {
    name: 'app-blog-new',
    data () {
      return {
        title: '',
        description: '',
        status: ''
      }
    }
  }
</script>

<style lang="scss" scope>

</style>

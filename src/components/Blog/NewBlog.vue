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
                        .col-md-12
                          div(v-if='submitted')
                            .alert.alert-success
                              | Thanks for adding your post blog :)
                        .col-md-6
                          label
                            | Title
                          input(v-model.lazy='blog.title', type='text', class='form-control', placeholder='Masukan judul disini!', required)
                          br

                        .col-md-2
                          label
                            | Status
                          br
                          input(v-model.lazy='blog.status', type='checkbox', value='', required)
                          br

                        .col-md-4
                          label
                            | Author
                          br
                          select(v-model.lazy='blog.author', class='form-control' required)
                            option(v-for='author in authors')
                              {{ author }}
                          br

                        .col-md-12
                          label
                            | Description
                          textarea(v-model.lazy='blog.description', class='form-control', placeholder='Masukan deskripsi disini!', required)
                          br

                        .col-md-12
                          br
                          button(v-on:click.prevent='post', class='btn btn-success')
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
                          {{ blog.title }}
                      .col-md-12
                        label Description :
                        p
                          {{ blog.description }}
                      .col-md-12
                        label Status :
                        p
                          {{ blog.status }}
                      .col-md-12
                        label Author :
                        p
                          {{ blog.author }}
</template>

<script>
  export default {
    name: 'app-blog-new',
    data () {
      return {
        blog: {
          title: '',
          description: '',
          status: '',
          author: ''
        },
        authors: [
          'Fathan Rohman',
          'Febryan Setiawan',
          'Teguh Hartono',
          'Dewi',
          'Intan Permatasari'
        ],
        submitted: false
      }
    },
    methods: {
      post: function () {
        this.$http.post('http://localhost:3000/blog', {
          title: this.blog.title,
          description: this.blog.description,
          status: this.blog.status,
          author: this.blog.author
        }).then(function (res) {
          console.log(res)
          this.submitted = true
        })
      }
    }
  }
</script>

<style lang="scss" scope>

</style>

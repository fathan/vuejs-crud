<template lang="jade">
  #app-blog-edit
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
                        strong EDIT DATA
                      hr
                      form
                        .col-md-12
                          div(v-if='submitted')
                            .alert.alert-success
                              | Thanks for updating your post blog :)
                        .col-md-6
                          label
                            | Title
                          input(v-model.lazy='blogs.title', type='text', class='form-control', placeholder='Masukan judul disini!', required)
                          br

                        .col-md-2
                          label
                            | Status
                          br
                          input(v-model.lazy='blogs.status', type='checkbox', value='', required)
                          br

                        .col-md-4
                          label
                            | Author
                          br
                          select(v-model.lazy='blogs.author', class='form-control' required)
                            option(v-for='author in authors')
                              {{ author }}
                          br

                        .col-md-12
                          label
                            | Description
                          textarea(v-model.lazy='blogs.description', class='form-control', placeholder='Masukan deskripsi disini!', required)
                          br

                        .col-md-12
                          br
                          button(v-on:click.prevent='update', class='btn btn-success')
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
                          {{ blogs.title }}
                      .col-md-12
                        label Description :
                        p
                          {{ blogs.description }}
                      .col-md-12
                        label Status :
                        p
                          {{ blogs.status }}
                      .col-md-12
                        label Author :
                        p
                          {{ blogs.author }}
</template>

<script>
  export default {
    name: 'app-blog-edit',
    data () {
      return {
        blogs: {},
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
      getById: function (id) {
        this.$http.get('http://localhost:3000/blog/' + id)
                  .then(function (res) {
                    console.log(res)
                    this.blogs = res.data
                  })
      },
      update (e) {
        if (!this.blogs.title || !this.blogs.status || !this.blogs.author || !this.blogs.description) {
          alert('Form tidak boleh ada yang kosong!')
        } else {
          let updateBlogs = {
            title: this.blogs.title,
            status: this.blogs.status,
            author: this.blogs.author,
            description: this.blogs.description
          }
          this.$http.put('http://localhost:3000/blog/' + this.$route.params.id, updateBlogs)
            .then((response) => { this.$router.push({ path: '/' }) })
          e.preventDefault()
        }
        e.preventDefault()
      }
    },
    created () {
      this.getById(this.$route.params.id)
      console.log(this.$route.params.id)
    }
  }
</script>

<style lang="scss" scope>

</style>

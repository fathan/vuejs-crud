<template lang="jade">
  #app-blog-index
    .container
      .row
        .col-md-12
          .pull-left
            router-link(to='/blog/new', class='btn btn-default btn-sm') New Blog
          .pull-right
            input(v-model='search', class='form-control', placeholder='Masukan pencarian!')
          br
          br
          table.table.table-hovered.table-bordered.table-striped
            thead.bg-primary
              tr
                td
                  strong No
                td
                  strong Title
                td
                  strong Status
                td
                  strong Action
            tbody
              tr(v-for='(blog, index) in filteredBlogs')
                td
                  {{ index+1 }}
                td
                  {{ blog.title | to-uppercase }}
                td
                  div(v-if='blog.status === true')
                    label.label.label-success
                      | Published
                  div(v-if='blog.status === false')
                    label.label.label-danger
                      | Unpublished
                td
                  a(class='btn btn-xs btn-warning')
                    | Edit
                  &nbsp;
                  a(class='btn btn-xs btn-danger')
                    | Delete
</template>

<script>
  export default {
    name: 'app-blog-index',
    data () {
      return {
        blogs: [],
        search: ''
      }
    },
    methods: {

    },
    created () {
      this.$http.get('http://localhost:3000/blog').then(function (res) {
        console.log(res)
        this.blogs = res.body.slice(0, 10)
      })
    },
    computed: {
      filteredBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        })
      }
    }
  }
</script>

<style lang="scss" scope>

</style>

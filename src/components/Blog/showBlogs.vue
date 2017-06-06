<template lang="jade">
  #app-blog-index
    .container
      .row
        .col-md-12
          router-link(to='/blog/new', class='btn btn-default btn-sm') New Blog
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
              tr
                td
                  | 1
                td
                  | Judul blog ke 1
                td
                  label.label.label-success
                    | Aktif
                td
                  a(class='btn btn-xs btn-warning')
                    | Edit
                  &nbsp;
                  a(class='btn btn-xs btn-danger')
                    | Delete
</template>

<script>
  export default {
    name: 'app-blog-index'
  }
</script>

<style lang="scss" scope>

</style>

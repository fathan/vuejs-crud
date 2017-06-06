import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import ShowBlogs from '@/components/Blog/ShowBlogs.vue'
import NewBlog from '@/components/Blog/NewBlog.vue'
import EditBlog from '@/components/Blog/EditBlog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/blogs',
      component: ShowBlogs
    },
    {
      path: '/blog/new',
      component: NewBlog
    },
    {
      path: '/blog/edit/:id',
      component: EditBlog
    }
  ]
})

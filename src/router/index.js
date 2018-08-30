import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Paragraph from '@/components/Paragraph'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Article'
    },
    {
      path:'/Article',
      name:'Article',
      component: Article
    },
    {
      path:'/Article/Result',
      name:'ArtResult',
      component: Article
    },
    {
      path:'/Paragraph/Result',
      name:'ParResult',
      component: Paragraph
    },
    {
      path:'/Paragraph',
      name:'Paragraph',
      component: Paragraph
    }
  ]
})

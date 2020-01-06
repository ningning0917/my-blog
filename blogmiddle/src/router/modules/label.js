/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout/Layout'

const labelRouter = {
  path: '/label',
  component: Layout,
  redirect: '/table/index',
  name: 'Label',
  meta: {
    title: 'label',
    icon: 'label'
  },
  children: [
    {
      path: 'label',
      component: () => import('@/views/label/index'),
      name: 'Label',
      meta: { title: 'label', noCache: true }
    }
  ]
}
export default labelRouter

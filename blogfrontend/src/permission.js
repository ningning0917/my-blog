import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)
  // if (this) {
  //   console.log(this.$route.query.title, 'title')
  // }
  // determine whether the user has logged in
  next()
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})

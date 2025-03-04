/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const PageController = () => import('#controllers/page_controller')
const NewsletterController = () => import('#controllers/newsletters_controller')
const AdminController = () => import('#controllers/admin_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', [PageController, 'home']).as('home')
router.get('/privacy_policy', [PageController, 'privacyPolicy']).as('privacy_policy')
router.post('/newsletter', [NewsletterController, 'store']).as('newsletter.store')
router
  .get('/newsletter/confirmation', [NewsletterController, 'confirmation'])
  .as('newsletter.confirmation')
router
  .get('/newsletter/validate/:validationToken', [NewsletterController, 'validate'])
  .as('newsletter.validate')
router
  .get('/newsletter/unsubscribe/:unsubscribeToken', [NewsletterController, 'unsubscribe'])
  .as('newsletter.unsubscribe')

// AUTH (LOGIN)

router.get('/login', [AuthController, 'login']).as('login')
router.post('/login', [AuthController, 'postLogin']).as('login.post')
router.get('/logout', [AuthController, 'logout']).as('logout')

// ADMIN

router
  .group(() => {
    router.get('/dashboard', [AdminController, 'dashboard']).as('dashboard')
  })
  .as('admin')
  .prefix('admin')
  .use([middleware.auth()])

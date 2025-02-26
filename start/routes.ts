/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const HomeController = () => import('#controllers/home_controller')
const NewsletterController = () => import('#controllers/newsletters_controller')

router.get('/', [HomeController, 'index']).as('home')
router.post('/newsletter', [NewsletterController, 'store']).as('newsletter.store')
router
  .get('/newsletter/confirmation', [NewsletterController, 'confirmation'])
  .as('newsletter.confirmation')

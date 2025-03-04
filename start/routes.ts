/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const PageController = () => import('#controllers/page_controller')
const NewsletterController = () => import('#controllers/newsletters_controller')

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

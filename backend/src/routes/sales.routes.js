const { Router } = require('express')
const SaleCtrl = require('../controllers/sale.controller')
const router = Router()

router.post('/create', SaleCtrl.create)
router.get('/:user', SaleCtrl.searchSalesByUser)

module.exports = router
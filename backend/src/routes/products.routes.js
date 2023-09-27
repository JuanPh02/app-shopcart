const { Router } = require('express')
const ProductCtrl = require('../controllers/product.controller')
const router = Router()

router.get('/:sku', ProductCtrl.searchBySKU)
router.get('/', ProductCtrl.searchAll)

module.exports = router
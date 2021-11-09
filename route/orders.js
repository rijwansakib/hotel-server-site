// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/orders');

const router = express.Router();

/**
 * /api/orders
 * http://localhost:5000/api/orders
 */

router.get('/order-list', controller.orderList);
router.get('/order-list/:id', controller.orderListById);
router.post('/add-order', controller.addOrder);
router.put('/update-order/:id', controller.updateOrder);
router.delete('/delete-order/:id', controller.deleteOrderById);

// Export All router..
module.exports = router;
// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/room');

const router = express.Router();

/**
 * /api/rooms
 * http://localhost:5000/api/rooms
 */

router.get('/room-list', controller.roomList);
router.get('/get-single-room/:id', controller.getRoomById);
router.post('/add-room', controller.addRoom);
router.delete('/delete-room/:id', controller.deleteRoomById);
router.put('/update-room/:id', controller.updateRoom);

// Export All router..
module.exports = router;
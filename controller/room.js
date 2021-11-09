
// Require Post Schema from Model..
const Room = require('../model/room');


/**
 * Room
 */

exports.roomList = async (req, res) => {

    try {
        const data = await Room.find();
        res.status(200).json({
            success: true,
            message: 'Rooms get Successfully!',
            data: data
        });

    }
    catch (err) {
        console.log(err);
    }

}

exports.getRoomById = async (req, res) => {
    const param = req.params.id;
    const query = { _id: param }
    try {
        const data = await Room.findOne(query);
        res.status(200).json({
            success: true,
            message: 'Room get Successfully!',
            data: data
        });

    }
    catch (err) {
        console.log(err);
    }
}

exports.addRoom = async (req, res) => {

    try {
        const data = new Room(req.body);
        await data.save();

        res.status(200).json({
            success: true,
            message: 'Room Added Successfully!'
        });
    }
    catch (err) {
        console.log(err);
    }
}

exports.deleteRoomById = async (req, res) => {
    const param = req.params.id;
    const query = { _id: param }

    try {
        const data = await Room.deleteOne(query);
        res.status(200).json({
            success: true,
            message: 'Room delete Successfully!',
            data: data
        });
    } catch (err) {
        console.log(err);
    }
}

exports.updateRoom = async (req, res) => {
    const param = req.params.id;
    const query = { _id: param }

    const updatedData = req.body;
    const push = { $set: updatedData }

    try {
        await Room.findOneAndUpdate(query, push);
        res.status(200).json({
            success: true,
            message: 'Room Updated Successfully!'
        });

    } catch (err) {
        console.log(err);
    }

}
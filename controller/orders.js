
// Require Post Schema from Model..
const Order = require('../model/orders');


/**
 * Order
 */

exports.orderList = async (req, res) => {

    try {
        const data = await Order.find({});
        res.status(200).json({
            success: true,
            message: 'Orders get Successfully!',
            data: data
        });

    }
    catch (err) {
        console.log(err);
    }

}
exports.orderListById = async (req, res) => {

    const param = req.params.id;
    console.log(param);
    const query = { uId: param }
    try {
        const data = await Order.find(query);
        res.status(200).json({
            success: true,
            message: 'Orders get Successfully!',
            data: data
        });

    }
    catch (err) {
        console.log(err);
    }

}

exports.addOrder = async (req, res) => {

    try {
        console.log(req.body);
        const data = new Order(req.body);
        await data.save();

        res.status(200).json({
            success: true,
            message: 'Order Added Successfully!'
        });
    }
    catch (err) {
        console.log(err);
    }
}

exports.updateOrder = async (req, res) => {
    const param = req.params.id;
    const query = { _id: param }

    console.log(req.body, param);
    const updatedData = req.body;
    const push = { $set: updatedData }

    try {
        await Order.findOneAndUpdate(query, push);
        res.status(200).json({
            success: true,
            message: 'Order Updated Successfully!'
        });

    } catch (err) {
        console.log(err);
    }

}

exports.deleteOrderById = async (req, res) => {
    const param = req.params.id;
    console.log(param);
    const query = { _id: param }

    try {
        const data = await Order.deleteOne(query);
        res.status(200).json({
            success: true,
            message: 'Order delete Successfully!',
            data: data
        });
    } catch (err) {
        console.log(err);
    }
}
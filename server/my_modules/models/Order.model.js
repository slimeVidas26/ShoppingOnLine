const Order = require('./../schemas/order.schema');

module.exports = {
    all: () => {
        return Order.find();
    },
    create: (orderObj) => {
        let order = new Order(orderObj);
        return order.save()
       
    },
    byUser: (user_id) => {
        return Order.find({
            user_id: user_id
        });
    },
    byId: (id) => {
        return Order.findOne({
            _id: id
        })

    },
    update: (id, orderObj) => {
        let order = new Order(orderObj);
        order._id = id;
        return Order.updateOne({
            _id: id
        }, order);
    },



    updateOrder: (id, city, delivery_adress, delivery_date, payment_method) => {
        console.log(id, city, delivery_adress, delivery_date, payment_method);
        return Order.updateOne({
            _id: id
        }, {
            $set: {
                "city": city,
                "delivery_adress": delivery_adress,
                "delivery_date": delivery_date,
                "payment_method": payment_method
            }
        });
    },

}


// Model.deleteMany()
// Model.deleteOne()
//////////////////////////////////////// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
///////////////////////////////////// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndRemove()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
//////////////////////////////////// Model.updateOne()
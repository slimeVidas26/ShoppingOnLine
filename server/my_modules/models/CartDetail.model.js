const CartDetail = require('./../schemas/cartDetail.schema');

module.exports = {
    all: () => {
        return CartDetail.find()
            .populate('product')
            .exec();
    },


    create: (cartDetailObj) => {
        let cartDetail = new CartDetail(cartDetailObj);
        return cartDetail.save();
    },
    
    byCart: (cart) => {
        return CartDetail.findOne({
            _cart: cart
        })
        //   .populate('_cart')
        //      .exec();
    },
    byId: (id) => {
        return CartDetail.findOne({
                _id: id
            })
            // .populate('_cart')
            // .exec();
    },



    updateTotal: (id, totalAmount) => {
        console.log(id, totalAmount);
        return CartDetail.updateOne({
            _id: id
        }, {
            $set: {
                "total_amount": totalAmount
            }
        });
    },

    getAmount: (id) => {
        return CartDetail.findOne({
            _id: id
        }, "total_amount");
    },

    pushProduct: (id, product_id, name, cat, price, picture, quantity) => {
        console.log(id, product_id, name, cat, price, picture, quantity);
        return CartDetail.updateOne({
            _id: id
        }, {
            $push: {

                "product": {
                    "_id": product_id,
                    "product_name": name,
                    "_category": cat,
                    "price": price,
                    "picture": picture,
                    "quantity": quantity,
                    "sub_total": price * quantity
                }

            }
        });
    },

}

//     delete: (id,cartDetailObj) => {
//         // let deleteIndex = null;
//         let cartDetail = new CartDetail(cartDetailObj);
//         let products = cartDetail.product;
//         for (let i=0;i<products.length;i++) {
//             id = product[i]._id;
//                 console.log('products[i]',products[i])
//                 if (products[i]._id ==id) {
//                     // deleteIndex = i; 
//                     return cartDetail.findOneAndDelete({_id:id},products);            
//                 }  
//     }
// }
  




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
const Cart = require('./../schemas/cart.schema');

module.exports = {
    all: () => {
        return Cart.find();
    },

    create: (cartObj) => {
        let cart = new Cart(cartObj);
        return cart.save();
    },
    // byUsername: (username) => {
    //     return Users.findOne({username:username});
    // },
    byId: (id) => {
        return Cart.findOne({
                _id: id
            })
            .populate('_user')
            .exec();
    },

    byUser: (user) => {
        return Cart.findOne({
            _user: user
        });
    },


    //  update: (id,userObj) => {
    //      let user = new Users(userObj);
    //      user._id = id;
    //      return Cart.updateOne({_id:id},user, $currentDate: { yourField: true} ); 
    //  }

}
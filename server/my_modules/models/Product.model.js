const Product = require('./../schemas/product.schema');

module.exports = {
    all: () => {
        return Product.find()
            .populate('_category')
            .exec();
    },
    countProducts: () => {
        return Product.find().countDocuments();
            
    },
    create: (productObj) => {
        let product = new Product(productObj);
        return product.save();
    },
    byProductName: (productName) => {
        return Product.findOne({
            product_name: productName
        });
    },

    byCategory: (category) => {
        return Product.find({
             _category: category
        })
        .populate('_category')
        .exec();
    },

    byId: (id) => {
        return Product.findOne({
                _id: id
            })
            .populate('_category')
            .exec();
    },
    update: (id, productObj) => {
        let product = new Product(productObj);
        product._id = id;
        return Product.updateOne({
            _id: id
        }, product);
    },
    delete: (id, productObj) => {
        let product = new Product(productObj);
        product._id = id;
        return Product.findByIdAndRemove({
            _id: id
        }, product);
    }

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
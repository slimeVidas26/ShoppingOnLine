const Category = require('./../schemas/category.schema');

module.exports = {
    all: () => {
        return Category.find();
    },
    
    byCategoryName: (category_name) => {
        return Category.findOne({
            category_name: category_name
        });
    },
    byCategoryId: (id) => {
        return Category.findOne({
            _id: id
        });
    }
}
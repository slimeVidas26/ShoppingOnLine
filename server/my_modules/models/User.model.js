const User = require('./../schemas/user.schema');

module.exports = {
    all: () => {
        return User.find();
    },
    register: (userObj) => {
        let user = new User(userObj);
        return user.save();
    },
    byUsername: (username) => {
        return User.findOne({
            username: username
        });
    },

    getRole: (id) => {
        return User.findOne({
            _id: id
        }, 'role');
    }

}

// Model.deleteMany()
// Model.deleteOne()
////////////////////////////////////////  Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
///////////////////////////////////////// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndRemove()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()
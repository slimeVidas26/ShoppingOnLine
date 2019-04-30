const jwt = require('jsonwebtoken');
const userModel = require('../my_modules/models/User.model');
const cartDetailModel = require('../my_modules/models/CartDetail.model');
const cartModel = require('../my_modules/models/Cart.model');



module.exports = async (req,res,next) => {    
    
    try {        
        // expecting client to send the token via header authorization in this format:
        // Authorization: Bearer thetokengoeshere
        let token = null;
        if(!req.headers.authorization) {
            throw "Missing Authorization header";
        }
        else {
            let broken = req.headers.authorization.split(" "); 
            if(broken.length!=2 || broken[0]!='Bearer' || broken[1]=='') {
                throw "Invalid Authorization header";
            }
            else {
                token = req.headers.authorization.split(" ")[1]; 
                // jwt.verify will decode token first then check against the secret key}
                const decoded = jwt.verify(token, process.env.JWT_KEY);
                
                // store the decoded and verified object in a newly created request parameter
                let c = await cartDetailModel.byCart(decoded.cart);
                let t = await cartDetailModel.getAmount(c);
                let k = await cartModel.byUser(decoded.id);

                req.userData = {
                    id: decoded.id,
                    first_name: decoded.first_name,
                    last_name: decoded.last_name,
                    ID:decoded.ID,
                    city:decoded.city,
                    adress:decoded.adress,
                    role: decoded.role,
                    cart: decoded.cart,
                    total_amount : t,
                     //cart : c._id
                    //cartDetail : "5b5d18035e155f4d3e8d3aef"
                   
                    //level: decoded.level
                    // role: u.role                    
                }
                // if(req.userData.cartDetail == null) {
                //     throw "New Cart"
                // }
                /*console.log('user cart is',req.userData.cart);
                console.log("decoded",decoded);
                console.log("continue shopping")*/
                // continue
                next(); 
            }
        }
    }
    catch(e) { // throws an error if failed
        console.log('Error',e);
        return res.status(403).end();
    }        
}

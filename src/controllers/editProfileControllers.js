 require('dotenv').config();
 const User = require('./../models/user')
 const {ERROR, SUCCESS} = require('.././assests/constants')



const editProfile = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await User.findById({userId: id});
        if (userData) {
            res.status(SUCCESS).json({
                message:'userData found successfully',
                data:userData
            })
        }else {
            res.status(ERROR).json({
                message: 'Wrong data found'
            })
        }
        
    }catch (err) {
        res.status(ERROR).json({
            message: err.message
        })
    }
}
module.exports = {
    editProfile
}
const User=require('../Models/user')
exports.getprofile= async (req,res)=>{
    try{
        const user = await User.findByPk(req.user.id, {
            attributes: { exclude: ['password'] }
    });
    res.json(user);
 } catch (error) {
  res.status(400).json({ error: error.message });
}
};
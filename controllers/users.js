const users=require('../connection/users')
async function handleSignup(req,res) {
    const {name,email,password}=req.body;
    await users.create({
        name,
        email,
        password
    })
   return res.render("home")

}
module.exports={
    handleSignup
}
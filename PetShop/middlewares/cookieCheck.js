module.exports = function(req,res,next){
    if(req.cookies.userPetShopVSG){
        console.log(req.cookies.userPetShopVSG)
        req.session.user = req.cookies.userPetShopVSG;
        res.locals.user = req.session.user  
        next()
    }else{
        next()
    }
}
/*
IF - VERIFICA QUE EL USUARIO ESTE LOGEADO Y SI LO ESTA, MIENTRAS ESA
DISTINTO AL IDE DEL ADMINSTRADOR LO REDIRECCIONA AL HOME SI QUIERE 
ENTRAR A LA RUTA /products/productAdd.
ELSE - CUANDO NO HAY NINGUN USUARIO LOGEADO, SERÍA UN INVITADO, TAMBIEN
LO REDIRECCIONA AL HOME SI QUIERE ENTRAR A LA RUTA /products/productAdd
*/
module.exports = function redirectAdmin(req,res,next){
    if(req.session.user){
        let usuario = req.session.user;
        if(usuario.id!=1){
            res.redirect('/')
        }
    }if(!req.session.user){
        res.redirect('/')
    }
    next();
}
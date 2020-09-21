const path = require('path');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'))
const dbUsers = require(path.join(__dirname,'..','data', 'dbUsers'));
const fs = require('fs');

module.exports = {
    index: function (req, res) {
        res.render('index', {
            title: "index",
            css: "index.css",
            productos: dbProducts
        })
    },
    register: function(req,res){
        let ultimoID = 1;
        dbUsers.forEach(userID => {
            if(userID.id>ultimoID){
                ultimoID = userID.id;
            }
        });
        let nuevoUser ={
            id: ultimoID+1,
            name: req.body.name,
            email: req.body.email,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        }
        dbUsers.push(nuevoUser);
        fs.writeFileSync(path.join(__dirname,"..","data","usersDataBase.json"),JSON.stringify(dbUsers),'utf-8');
        res.send(dbUsers[ultimoID]);
    }
}
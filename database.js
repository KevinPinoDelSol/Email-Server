var database = function (req, res, next){

    var indice = function(){
        let fs = require('fs');

        //let path = './indice.json';
        //this.indice = require (path);
        
        this.buscarNombre = function(name, next){
            name= name+".json";
            fs.readdir('./database/usuarios',(error, usuarios)=>{
                let lugar=-1;
                for(let i=0; i<usuarios.length ; i++){
                    if(name==usuarios[i]){
                        lugar=i;
                        break;
                    }
                }
                next(lugar);
            });
        }
    
    }
    res.indice= new indice();
    next();
}
module.exports = database;
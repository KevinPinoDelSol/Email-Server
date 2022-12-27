var fs = require('fs');

var database = function(){
    const path = './indice.json';
    let indice = require (path);

    const buscarNombre = function(name){
        let lugar;
        fs.readdir('./usuarios',(error, files)=>{
            return items;
        });
        /*for(let i=0; i<indice.usuarios.length ; i++){
            if(name==indice.usuarios[i]){
                lugar=i;
                break;
            }
        }
        return lugar;*/
    }

    
    
}
    module.exports = database;
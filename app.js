const express = require ('express');
const app = express();
var fs = require('fs');
const indice = require ('./database.js');


app.set('view', 'public');

//#region rutas

app.use(express.json());
app.use(indice);

app.get('/', (req, res)=>{
    //let html = fs.readFileSync('./public/login.html', 'UTF-8');
    res.sendfile('./public/login.html');
});

app.get('/login', (req,res)=>{
    let nombre = req.query.nombre;
    console.log('Usuario logeado: '+ nombre);
    console.log(res.indice);
    res.indice.buscarNombre(nombre,(lugar)=>{
        if(lugar==-1){
            res.send('usuario no encontrado');
        } else {
            res.sendfile('./public/index.html');
        }
    });

});

app.use(express.static('public'));
//#endregion

app.listen(3000, ()=>{
    console.log('server');
});

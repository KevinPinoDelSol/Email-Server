const express = require ('express');
const app =express();
var fs =require('fs');

app.set('view', 'public');
//#region rutas

/*app.get('/:name', (req, res)=>{
    let html = fs.readFileSync('./public/index.html', 'UTF-8');
    //html=html.replace('<h1 align="left">KeterKnights</h1>', '<h1 align="left">KerKnights</h1>');
    res.send(html);
});*/

app.get('/', (req, res)=>{
    //let html = fs.readFileSync('./public/login.html', 'UTF-8');
    res.sendfile('./public/login.html');
});


app.use(express.static('public'));
//#endregion

app.listen(3000, ()=>{
    console.log('server');
});

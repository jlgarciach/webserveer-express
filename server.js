/* 

*/

const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



/* se debe tener cuidado con este código si se utilizan rutas estaticas como app.use()
   por eso se desabilita el siguiente código */
// app.get('/', (req, res) => {
//     //res.send('Hola Mundo!!!');
//     let salida = {
//         nombre: 'JLGarcia',
//         edad: 50,
//         url: req.url
//     };
//     res.send(salida);
// });

// app.get('/data', (req, res) => {
//     res.send('Hola DATA');
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'JLGarcía'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});
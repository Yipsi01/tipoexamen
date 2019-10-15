
var express = require ('express');
var rauter = express.Router();
var uuid = require('uuid/V4');    //generar identificador unico

var PersonaCollection = [];
var PersonaStruct = {

    id :0,
    nombre: 'Yipsi',
    correo: 'ymoncadaavila@gmail.com',
    telefono: '98998999',
    nota: '0000',
}


PersonaCollection.push(

);

router.get('/:id',(req,res,next)=>{
    res.status(403).json({msg:"not implemented"});
});          //GET ONE BY ID


router.get ('/',(req,res,next)=>{
    res.status(200).json(PersonasColleccion);
});              //METODO GET

router.post('/', (req,res,next)=>{
    var newPersona = Object.assign(
    {},
    personaStruct,
    { id: uuid()},
    req.body);
    
    Persona.Collection.push(newPersona);
    res.status(200).json(newPersona);
    });
      //METODO POST

rauter.put('/:id', (req,res,next)=>{
    res.status(403)({mgs:"not implemented"});
});        //METODO PUT

router.delete('/:id',(req,next,res)=>{
    res.status(403)({mgs:"not implemented"});
});                         //METODO DELETE

module.exports = router;




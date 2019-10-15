
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
    if(!req.params.id)return next();
    var id=req.params.id;
    var persona=PersonaCollecion.filter((e,i)=>{return (e.id===id);
    });   //FILTER
    if(persona.lenght > 0){
        res.status(200).json(persona[0]);
    }else {

        res.status(404).json({});
    }
 
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
    var id = req.params.id;
    var modifiedPersona = {};
    var originalPersona = {};

    PersonaCollecion = PersonaCollecion.map( (e, i)=>{
        if (e.id ===id){originalPersona=Object.assign({}, e, req.body);
    }
    return e;
    });
    
    res.status(200).json({0:originalPersona, m:modifiedPersona});
});        //METODO PUT

router.delete('/:id',(req,next,res)=>{

    var id = req.params.id;
    var deletedPersona = {};
    PersonaCollecion = PersonaCollecion.filter((e,i)=>{
        if(e.id ===id)
        deletedPersona = Object.assign({},e);
        return false;
    }
    return true;

    });   //FILTER

    res.status(200).json({d:deletedPersona, c:PersonaCollecion});
});                         //METODO DELETE

module.exports = router;




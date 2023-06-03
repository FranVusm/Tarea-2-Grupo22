import prisma from '../prismaClient.js'
//Todos los personajes
const getPj = async (req , res) => {
    
        const personajes = await prisma.personajes.findMany()
        if(personajes.length == 0){
            res.status(500).send("no se encontro ningún elemento ");
        }
        if(personajes.length != 0){
            res.json(personajes)
        }
    
   
}
//personajes por id doy una id que no exista que pasa... 
const getPjById = async (req, res) => {
   
        const { id } = req.params
        
        const personajes = await prisma.personajes.findUnique({
            where: {
                id: Number(id)
            }
            
        })
        if(personajes != null){
            res.json(personajes)
        }
        else{
            res.status(500).send("No se encontro ningun personaje con la id proporcionada")
        }
}
    
       
   
 
//creador de personaje, que no el body necesario
const createPj = async (req, res) => {
    try {
        const {nombre,fuerza, fecha_nacimiento, objeto} = req.body
        const personajes = await prisma.personajes.create({
            data :{
                nombre,
                fuerza,
                fecha_nacimiento,
                objeto,
            }
        })
        res.json(personajes)
    }
    catch(error){
        res.status(500).send("No se puedo Crear al personaje, revise los parametros dados")
    }
    
}
//update de personaje, si no existe la id ...
const updatePj = async (req, res) => {
    try{
        const {id} = req.params
        const update = await prisma.personajes.update({
            where: {
                id: Number(id)
            },
            data: req.body
        })
        res.json(update)
    }
    catch(error){
        res.status(500).send("No se encontro a ningún personaje con la id proporcionada")
    }
    
}
//delete de personaje, si no existe la id que pasa...
const deletePj = async (req, res) => {
    try{
        const {id} = req.params
        const deletepj = await prisma.personajes.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(deletepj)
    }
    catch(error){
        res.status(500).send("No se encontro a ningún personaje con la id proporcionada")
    }
}


            
const PjController = {
    getPj,
    getPjById,
    createPj, 
    updatePj,
    deletePj
}

export default PjController



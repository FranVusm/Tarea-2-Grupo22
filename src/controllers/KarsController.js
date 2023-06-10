import prisma from '../prismaClient.js'

const getKart = async (req , res) => {
    const karts = await prisma.karts.findMany()
    if(karts.length == 0){
        res.status(404).send("no se encontro ningún elemento ");
    }
    if(karts.length != 0){
        res.json(karts)
    }
}
const getKartById = async (req, res) => {
    const { id } = req.params
    const karts = await prisma.karts.findUnique({
        where: {
            id: Number(id)
        }
    })
    if(karts != null){
        res.json(karts)
    }
    else{
        res.status(404).send("No encontro ningun kart con la id dada")
    }
}
const createKart = async (req, res) => {
    const {modelo, color, velocidad_maxima,personajesId} = req.body
    try{
        const kart = await prisma.karts.create({
            data:{
                modelo,
                color,
                velocidad_maxima,
                id_personaje:{connect:{id: personajesId}},
            }
        })
        res.json(kart)
    
    }
    catch(error){
        res.status(404).send("error al crear el kart, favor de revisar los parametros");
    }
    
}
const updateKart = async (req, res) => {
    const {id} = req.params
    const {modelo, color, velocidad_maxima} = req.body
    const modelo1 = modelo ? modelo : undefined
    const color1 = color ? color : undefined
    const velocidad_maxima1 = velocidad_maxima ? velocidad_maxima : undefined
    
        const update = await prisma.karts.update({
            where: {
                id: Number(id)
            },
            data: {
                modelo: modelo1,
                color: color1,
                velocidad_maxima: velocidad_maxima1
            }
        })
        res.json(update)
     
}
const deleteKart = async (req, res) => {
    try{
        const {id} = req.params
        const deleteKart = await prisma.karts.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(deleteKart)
    }
   
    catch(error){
        res.status(404).send("error al eliminar, favor de revisar los parametros");
    }
}

const KarsController = {
    getKart,
    getKartById,
    createKart,
    updateKart,
    deleteKart
}

export default KarsController
import prisma from '../prismaClient.js'

const getKart = async (req , res) => {
    const reinos = await prisma.reinos.findMany()
    res.json(reinos)
}
const getKartById = async (req, res) => {
    const { personajesId } = req.params
    const reinos = await prisma.reinos.findUnique({
        where: {
            id: Number(personajesId)
        }
    })
    res.json(reinos)
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
        res.status(500).send("error al crear el kart, favor de revisar los parametros");
    }
    
}
const updateKart = async (req, res) => {
    const {personajesId} = req.params
    try{
        const update = await prisma.karts.update({
            where: {
                id: Number(personajesId)
            },
            data: req.body
        })
        res.json(update)
    }
    catch(error){
        res.status(500).send("error al actualizar, favor de revisar los parametros");
    }
}
const deleteKart = async (req, res) => {
    try{
        const {personajesId} = req.params
        const deleteKart = await prisma.karts.delete({
            where: {
                id: Number(personajesId)
            }
        })
        res.json(deleteKart)
    }
   
    catch(error){
        res.status(500).send("error al eliminar, favor de revisar los parametros");
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
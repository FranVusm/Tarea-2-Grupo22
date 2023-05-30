import prisma from '../prismaClient.js'

const getKart = async (req , res) => {
    const reinos = await prisma.reinos.findMany()
    res.json(reinos)
}
const getKartById = async (req, res) => {
    const { id } = req.params
    const reinos = await prisma.reinos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(reinos)
}
const createKart = async (req, res) => {
    const {modelo, color, velocidad_maxima, personajesId} = req.body
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

const KarsController = {
    getKart,
    getKartById,
    createKart
}
export default KarsController
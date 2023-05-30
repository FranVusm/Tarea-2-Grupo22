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
const updateKart = async (req, res) => {
    const {id} = req.params
    const update = await prisma.karts.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    res.json(update)
}
const deleteKart = async (req, res) => {
    const {id} = req.params
    const deleteKart = await prisma.karts.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deleteKart)
}
const KarsController = {
    getKart,
    getKartById,
    createKart,
    updateKart,
    deleteKart
}

export default KarsController
import prisma from '../prismaClient.js'

const getReino = async (req , res) => {
    const reinos = await prisma.reinos.findMany()
    res.json(reinos)
}
const getReinosById = async (req, res) => {
    const { id } = req.params
    const reinos = await prisma.reinos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(reinos)
}
const createReino = async (req, res) => {
    const {nombre,ubicacion, superficie} = req.body
    const reinos = await prisma.reinos.create({
        data :{
            nombre,
            ubicacion,
            superficie
        }
    })
    res.json(reinos)
}
const updateReino = async (req, res) => {
    const {id} = req.params
    const update = await prisma.reinos.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    res.json(update)
}
const deleteReinos = async (req, res) => {
    const {id} = req.params
    const deleteReinos = await prisma.reinos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deleteReinos)
}


const ReinosController = {
    getReino,
    getReinosById,
    createReino,
    updateReino,
    deleteReinos
}

export default ReinosController
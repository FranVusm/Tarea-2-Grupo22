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
    try{
    const {nombre,ubicacion, superficie} = req.body
    const reinos = await prisma.reinos.create({
        data :{
            nombre,
            ubicacion,
            superficie
        }
    })
    res.json(reinos)}
    catch(error){
        res.status(500).send("error al crear el Reino, favor de revisar los parametros");
    }
}
const updateReino = async (req, res) => {
    try{
    const {id} = req.params
    const update = await prisma.reinos.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    res.json(update)}
    catch(error){
        res.status(500).send("error al actualizar, favor de revisar los parametros");
    }
}
const deleteReinos = async (req, res) => {
    try{
    const {id} = req.params
    const deleteReinos = await prisma.reinos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deleteReinos)}
    catch(error){
        res.status(500).send("error al eliminar, favor de revisar los parametros");
    }
}


const ReinosController = {
    getReino,
    getReinosById,
    createReino,
    updateReino,
    deleteReinos
}

export default ReinosController
import prisma from '../prismaClient.js'
const getTra = async (req , res) => {
    const personajes = await prisma.trabajos.findMany()
    res.json(personajes)
}

const getTraById = async (req, res) => {
    const { id } = req.params
    const trabajos = await prisma.trabajos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajos)
}

const createTrabajo = async (req,res) => {
    const {descripcion, sueldo} = req.body
    const trabajos = await prisma.trabajos.create({
        data:{
            descripcion,
            sueldo
        }
    })
    res.json(trabajos)
}

const updateTra = async (req, res) => {
    const {id} = req.params
    const update = await prisma.trabajos.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    res.json(update)
}

const deleteTra = async (req, res) => {
    const {id} = req.params
    const deletetra = await prisma.trabajos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deletetra)
}

const TraController = {
    createTrabajo,
    updateTra,
    deleteTra,
    getTraById,
    getTra
}



export default TraController
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
    try{
    const {descripcion, sueldo} = req.body
    const trabajos = await prisma.trabajos.create({
        data:{
            descripcion,
            sueldo
        }
    })
    res.json(trabajos)}
    catch(error){
        res.status(500).send("error al crear un trabajo, favor de revisar los parametros");
    }
}

const updateTra = async (req, res) => {
    try{
    const {id} = req.params
    const update = await prisma.trabajos.update({
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

const deleteTra = async (req, res) => {
    try{
    const {id} = req.params
    const deletetra = await prisma.trabajos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deletetra)}
    catch(error){
        res.status(500).send("error al eliminar, favor de revisar los parametros");
    }
}

const TraController = {
    createTrabajo,
    updateTra,
    deleteTra,
    getTraById,
    getTra
}



export default TraController
import prisma from '../prismaClient.js'

const getReino = async (req , res) => {
    const reinos = await prisma.reinos.findMany()
    if(reinos.length == 0){
        res.status(404).send("no se encontro ningún elemento ");
    }
    if(reinos.length != 0){
        res.json(reinos)
    }
}
const getReinosById = async (req, res) => {
    const { id } = req.params
    const reinos = await prisma.reinos.findUnique({
        where: {
            id: Number(id)
        }
    })
    if(reinos != null){
        res.json(reinos)
    }
    else{
        res.status(404).send("No se encontro nigún reino con la id proporcionada")
    }
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
        res.status(404).send("error al crear el Reino, favor de revisar los parametros");
    }
}
const updateReino = async (req, res) => {
    try{
    const {id} = req.params
    const {nombre, ubicacion, superficie} = req.body
    const nombre1 = nombre ? nombre : undefined
    const ubicacion1 = ubicacion ? ubicacion : undefined
    const superficie1 = superficie ? superficie : undefined
    const update = await prisma.reinos.update({
        where: {
            id: Number(id)
        },
        data: {
            nombre: nombre1,
            ubicacion: ubicacion1,
            superficie: superficie1
        }
    })
    res.json(update)}
    catch(error){
        res.status(404).send("error al actualizar, favor de revisar los parametros");
    }
}
const deleteReinos = async (req, res) => {
    try{
    const {id} = req.params
    const deleteReinos = await prisma.reinos.delete({
        where: {
            id: Number(id)
        },
        include:{defensas: true, diplomacias: true, diplomacias2: true, pesonaje_habita_reino: true}
    })
    res.json(deleteReinos)}
    catch(error){
        res.status(404).send("error al eliminar, favor de revisar los parametros");
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
import prisma from '../prismaClient.js'
const getDiplo = async (req , res) => {
    const pjtra = await prisma.diplomacias.findMany()
    res.json(pjtra)
}
/*const getdiploById = async (req, res) => {
    const { id } = req.params
    const pjtra = await prisma.personaje_tiene_trabajo.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(pjtra)
}*/
const createDiplo = async (req, res) => {
    const {es_aliado,reinos1,reinos2} = req.body
    const diplo = await prisma.diplomacias.create({
        data :{
            id_reino_1:{connect:{id:reinos1}},
            id_reino_2:{connect:{id:reinos2}},
            es_aliado
        }
    })
    res.json(diplo)
}
const updateDiplo = async (req, res) => {
    const {id_reino_1,id_reino_2} = req.params[1].req.params[2]
    const update = await prisma.personaje_tiene_trabajo.update({
        where: {
            id_reino_1: Number(id_reino_1) , id_reino_2: Number(id_reino_2)
        },
        data: req.body
    })
    res.json(update)
}
const deleteDiplo = async (req, res) => {
    const {id} = req.params
    const deletePjTra = await prisma.personaje_tiene_trabajo.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deletePjTra)
}

const DiploController = {
    getDiplo,
    //getdiploById
    createDiplo,
    updateDiplo,
    deleteDiplo
}
export default DiploController
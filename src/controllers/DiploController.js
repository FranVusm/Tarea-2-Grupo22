import prisma from '../prismaClient.js'
const getDiplo = async (req , res) => {
    const pjtra = await prisma.diplomacias.findMany()
    res.json(pjtra)
}
const getdiploById = async (req, res) => {
    
    const {id_1,id_2} = req.params
    const diplo = await prisma.diplomacias.findUnique({
        where: 
        {reinos1_reinos2:{reinos1 : Number(id_1), reinos2: Number(id_2) }}
    }) 
    res.json(diplo)
}
const createDiplo = async (req, res) => {
    const {es_aliado,reinos1,reinos2} = req.body
    const diplo = await prisma.diplomacias.create({
        data :{
            id_reino_1:{connect:{id:Number(reinos1)}},
            id_reino_2:{connect:{id:Number(reinos2)}},
            es_aliado
        }
    })
    res.json(diplo)
}
const updateDiplo = async (req, res) => {
    const {id_1,id_2} = req.params
    const update = await prisma.diplomacias.update({
        where: {
            reinos1_reinos2: {reinos1 : Number(id_1), reinos2: Number(id_2) }
        },
        data: req.body
    })
    res.json(update)
}
const deleteDiplo = async (req, res) => {
    const {id} = req.params
    const deletePjTra = await prisma.diplomacias.delete({
        where: {
            reinos1_reinos2: {reinos1 : Number(id_1), reinos2: Number(id_2) }
        }
    })
    res.json(deletePjTra)
}

const DiploController = {
    getDiplo,
    getdiploById,
    createDiplo,
    updateDiplo,
    deleteDiplo
}
export default DiploController
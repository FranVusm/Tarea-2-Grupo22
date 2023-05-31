import prisma from '../prismaClient.js'
const getPjTra = async (req , res) => {
    const pjtra = await prisma.personaje_tiene_trabajo.findMany()
    res.json(pjtra)
}
const getPjTraById = async (req, res) => {
    const {id_tra, id_pj} = req.params
    const pjtra = await prisma.personaje_tiene_trabajo.findUnique({
        where: {
            personajesId_trabajosId: {personajesId: Number(id_pj), trabajosId: Number(id_tra)}
        }
    })
    res.json(pjtra)
}
const createPjTra = async (req, res) => {
    const {trabajosId, personajesId,fecha_inicio, fecha_termino} = req.body
    const personajesTra = await prisma.personaje_tiene_trabajo.create({
        data :{
            id_trabajo:{connect:{id:trabajosId}},
            id_personaje:{connect:{id:personajesId}},
            fecha_inicio,
            fecha_termino,
        }
    })
    res.json(personajesTra)
}
const updatePjTra = async (req, res) => {
    const {id_pj,id_tra} = req.params
    const update = await prisma.personaje_tiene_trabajo.update({
        where: {
            personajesId_trabajosId: {personajesId: Number(id_pj), trabajosId: Number(id_tra)}
        },
        data: req.body
    })
    res.json(update)
}
const deletePjTra = async (req, res) => {
    const {id_pj,id_tra} = req.params
    const deletePjTra = await prisma.personaje_tiene_trabajo.delete({
        where: {
            personajesId_trabajosId: {personajesId: Number(id_pj), trabajosId: Number(id_tra)}
        }
    })
    res.json(deletePjTra)
}


const PjTraController = {
    createPjTra,
    getPjTra,
    getPjTraById,
    updatePjTra,
    deletePjTra
}

export default PjTraController
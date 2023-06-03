import prisma from '../prismaClient.js'
const getPjTra = async (req , res) => {
    const pjtra = await prisma.personaje_tiene_trabajo.findMany()
    if(pjtra.length == 0){
        res.status(500).send("no se encontro ningún elemento ");
    }
    if(pjtra.length != 0){
        res.json(pjtra)
    }
   
}
const getPjTraById = async (req, res) => {
    const {id_tra, id_pj} = req.params
    const pjtra = await prisma.personaje_tiene_trabajo.findUnique({
        where: {
            personajesId_trabajosId: {personajesId: Number(id_pj), trabajosId: Number(id_tra)}
        }
    })
    if(pjtra != null){
        res.json(pjtra)
    }
    else{
        res.status(500).send("No se encontro a ningún trabajor con las id's proporcionadas")
    }
}
const createPjTra = async (req, res) => {
    try{
    const {trabajosId, personajesId,fecha_inicio, fecha_termino} = req.body
    const personajesTra = await prisma.personaje_tiene_trabajo.create({
        data :{
            id_trabajo:{connect:{id:trabajosId}},
            id_personaje:{connect:{id:personajesId}},
            fecha_inicio,
            fecha_termino,
        }
    })
    res.json(personajesTra)}
    catch(error){
        res.status(500).send("error al crear trabajador, favor de revisar los parametros");
    }
}
const updatePjTra = async (req, res) => {
    const {id_pj,id_tra} = req.params
    try{
    const update = await prisma.personaje_tiene_trabajo.update({
        where: {
            personajesId_trabajosId: {personajesId: Number(id_pj), trabajosId: Number(id_tra)}
        },
        data: req.body
    })
    res.json(update)}
    catch(error){
        res.status(500).send("error al actualizar, favor de revisar los parametros");
    }
}
const deletePjTra = async (req, res) => {
    try{
    const {id_pj,id_tra} = req.params
    const deletePjTra = await prisma.personaje_tiene_trabajo.delete({
        where: {
            personajesId_trabajosId: {personajesId: Number(id_pj), trabajosId: Number(id_tra)}
        }
    })
    res.json(deletePjTra)}
    catch(error){
        res.status(500).send("error al eliminar, favor de revisar los parametros");
    }
}


const PjTraController = {
    createPjTra,
    getPjTra,
    getPjTraById,
    updatePjTra,
    deletePjTra
}

export default PjTraController
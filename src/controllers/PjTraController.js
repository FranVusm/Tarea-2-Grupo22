import prisma from '../prismaClient.js'
const getPjTra = async (req , res) => {
    const pjtra = await prisma.personaje_tiene_trabajo.findMany()
    if(pjtra.length == 0){
        res.status(404).send("no se encontro ningún elemento ");
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
        res.status(404).send("No se encontro a ningún trabajor con las id's proporcionadas")
    }
}
const createPjTra = async (req, res) => {
    try{
    const {trabajosId, personajesId,fecha_inicio, fecha_termino} = req.body
    const personajesTra = await prisma.personaje_tiene_trabajo.create({
        data :{
            id_trabajo:{connect:{id:trabajosId}},
            id_personaje:{connect:{id:personajesId}},
            fecha_inicio: new Date(fecha_inicio),
            fecha_termino: new Date(fecha_termino),
        }
    })
    res.json(personajesTra)}
    catch(error){
        res.status(404).send("error al crear trabajador, favor de revisar los parametros");
    }
}
 
const updatePjTra = async (req, res) => {
    try{
    const {id_pj,id_tra} = req.params
     const {fecha_inicio,fecha_termino} = req.body
     const fechaInicio = fecha_inicio ? new Date(fecha_inicio) : undefined
     const fechaTermino = fecha_termino ? new Date(fecha_termino) : undefined

     const update_ = await prisma.personaje_tiene_trabajo.update({
        where: {
            personajesId_trabajosId: {personajesId: Number(id_pj), trabajosId: Number(id_tra)}
        },
        data:{
            fecha_inicio: fechaInicio,
            fecha_termino: fechaTermino
        }
    })
    res.json(update_)}
    catch(error){
        res.status(404).send("error al actualizar el trabajo del personaje, favor de revisar los parametros");
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
        res.status(404).send("error al eliminar, favor de revisar los parametros");
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
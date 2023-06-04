import prisma from '../prismaClient.js'
const getPjReino = async (req , res) => {
    const PjReino = await prisma.pesonaje_habita_reino.findMany()
    if(PjReino.length == 0){
        res.status(500).send("no se encontro ningún elemento ");
    }
    if(PjReino.length != 0){
        res.json(PjReino)
    }
}

const getPjReinoId = async (req, res) => {
    const {id_1,id_2} = req.params
    const PjReino = await prisma.pesonaje_habita_reino.findUnique({
        where: 
        {personajesId_reinosId:{personajesId : Number(id_1), reinosId: Number(id_2) }}
    }) 
    if(PjReino != null){
        res.json(PjReino)
    }
    else{
        res.status(500).send("No se encontro a ningún ciudadano con las id's proporcionadas")
    }
}
const createPjReino = async (req, res) => { 
    try{
        const {reinosId, personajesId, es_gobernate} = req.body
        
        const PjReino = await prisma.pesonaje_habita_reino.create({
            data :{
                id_reino:{connect:{id: Number(reinosId)}},
                id_personaje:{connect:{id: Number(personajesId)}},
                fecha_registro: new Date( ),
                es_gobernate,
            }
        })
        res.json(PjReino)
    }
   catch(error){
    res.status(500).send("error al crear ciudadano, favor de revisar los parametros");
   }
}
const updatePjReino = async (req, res) => {
    try{
        const {id_1,id_2} = req.params
        const update = await prisma.pesonaje_habita_reino.update({
            where: {
                personajesId_reinosId:{personajesId : Number(id_1), reinosId: Number(id_2) }
            },
            data: req.body
        })
        res.json(update)
    }
    catch(error){
        res.status(500).send("error al actualizar, favor de revisar los parametros");
    }
}
const deletePjReino = async (req, res) => {
    try{
        const {id_1,id_2} = req.params
        const deletePjReino = await prisma.pesonaje_habita_reino.delete({
            where: {
                personajesId_reinosId:{personajesId : Number(id_1), reinosId: Number(id_2) }
            }
        })
        res.json(deletePjReino)
    }
    catch(error){
        res.status(500).send("error al eliminar, favor de revisar los parametros");
    }
}
const PjReinoController = {
    getPjReino,
    getPjReinoId,
    createPjReino,
    updatePjReino,
    deletePjReino
}

export default PjReinoController
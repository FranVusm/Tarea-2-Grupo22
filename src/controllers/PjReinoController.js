import prisma from '../prismaClient.js'
const getPjReino = async (req , res) => {
    const pjtra = await prisma.pesonaje_habita_reino.findMany()
    res.json(pjtra)
}

const getPjReinoId = async (req, res) => {
    const {id_1,id_2} = req.params
    const PjReino = await prisma.pesonaje_habita_reino.findUnique({
        where: 
        {personajesId_reinosId:{personajesId : Number(id_1), reinosId: Number(id_2) }}
    }) 
    res.json(PjReino)}

const createPjReino = async (req, res) => {
    const {reinosId, personajesId,fecha_registro, es_gobernate} = req.body
    const PjReino = await prisma.pesonaje_habita_reino.create({
        data :{
            id_reino:{connect:{id: Number(reinosId)}},
            id_personaje:{connect:{id: Number(personajesId)}},
            fecha_registro,
            es_gobernate,
        }
    })
    res.json(PjReino)
}
const updatePjReino = async (req, res) => {
    const {id_1,id_2} = req.params
    const update = await prisma.pesonaje_habita_reino.update({
        where: {
            personajesId_reinosId:{personajesId : Number(id_1), reinosId: Number(id_2) }
        },
        data: req.body
    })
    res.json(update)
}
const deletePjReino = async (req, res) => {
    const {id_1,id_2} = req.params
    const deletePjReino = await prisma.pesonaje_habita_reino.delete({
        where: {
            personajesId_reinosId:{personajesId : Number(id_1), reinosId: Number(id_2) }
        }
    })
    res.json(deletePjReino)
}
const PjReinoController = {
    getPjReino,
    getPjReinoId,
    createPjReino,
    updatePjReino,
    deletePjReino
}

export default PjReinoController
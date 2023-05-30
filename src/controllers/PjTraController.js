import prisma from '../prismaClient.js'

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
const PjTraController = {
    createPjTra
}

export default PjTraController
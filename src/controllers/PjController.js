import prisma from '../prismaClient.js'
//Todos los personajes
const getPj = async (req , res) => {
    const personajes = await prisma.personajes.findMany()
    res.json(personajes)
}
//personajes por id doy una id que no exista que pasa... 
const getPjById = async (req, res) => {
    const { id } = req.params
    const personajes = await prisma.personajes.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(personajes)
}
//creador de personaje, que no el body necesario
const createPj = async (req, res) => {
    const {nombre,fuerza, fecha_nacimiento, objeto} = req.body
    const personajes = await prisma.personajes.create({
        data :{
            nombre,
            fuerza,
            fecha_nacimiento,
            objeto,
        }
    })
    res.json(personajes)
}
//update de personaje, si no existe la id ...
const updatePj = async (req, res) => {
    const {id} = req.params
    const update = await prisma.personajes.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    res.json(update)
}
//delete de personaje, si no existe la id que pasa...
const deletePj = async (req, res) => {
    const {id} = req.params
    const deletepj = await prisma.personajes.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deletepj)
}

const usersPosts = async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            posts: true
        }
    })
    res.json(user)
}

            
const PjController = {
    getPj,
    getPjById,
    createPj, 
    usersPosts,
    updatePj,
    deletePj
}

export default PjController



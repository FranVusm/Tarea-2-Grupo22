import prisma from '../prismaClient.js'

const getPj = async (req , res) => {
    const personajes = await prisma.personajes.findMany()
    res.json(personajes)
}

const getPjById = async (req, res) => {
    const { id } = req.params
    const personajes = await prisma.personajes.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(personajes)
}

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

            
const UsersController = {
    getPj,
    getPjById,
    createPj, 
    usersPosts,
    updatePj,
    deletePj
}

export default UsersController



import prisma from '../prismaClient.js'

const getPj = async (req , res) => {
    const personajes = await prisma.personajes.findMany()
    res.json(personajes)
}


const getPjById = async (req, res) => {
    const { id } = req.params
    const user = await prisma.personajes.findUnique({
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
    usersPosts
}

export default UsersController



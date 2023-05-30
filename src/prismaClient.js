import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default prisma

/*const deleate = await prisma.personajes.deleteMany()
const createMany = await prisma.personajes.createMany({
    data: [
        {nombre: "Princesa Daisy",fuerza: 99,fecha_nacimiento: new Date(2023, 4, 25),objeto: "manos"},
        {nombre: "Princesa Peach",fuerza: 1,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Corona"},
        {nombre: "Bowser",fuerza: 98,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Caparazón"}
    ],
    skipDuplicates: true,
})*/

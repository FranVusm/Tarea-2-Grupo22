import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default prisma

const createMany = await prisma.personajes.createMany({
    data: [
        {nombre: "Princesa Daisy",fuerza: 99,fecha_nacimiento: new Date(2023, 4, 25),objeto: "manos"},
        {nombre: "Princesa Peach",fuerza: 1,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Corona"},
        {nombre: "Bowser",fuerza: 98,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Caparazón"},
        {nombre: "Princesa Rosalina",fuerza: 50,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Corona"},
        {nombre: "Yoshi",fuerza: 60,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Montura"},
        {nombre: "Toad",fuerza: 10,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Hongo"},
        {nombre: "Cajuelo",fuerza: 100,fecha_nacimiento: new Date(2023, 4, 25)},
        {nombre: "Capitán Goomba",fuerza: 20,fecha_nacimiento: new Date(2023, 4, 25)},
        {nombre: "Cebolleto",fuerza: 10,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Maceta"},
        {nombre: "Charline Bloquette",fuerza: 30,fecha_nacimiento: new Date(2023, 4, 25),objeto: "Baguette"},
        {nombre: "Mario",fuerza: 80,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Gorra"},
        {nombre: "Luigi",fuerza: 80,fecha_nacimiento: new Date(2023, 4, 25),objeto:"Poltergust 3000 "},
        {nombre: "Waluigi",fuerza: 80,fecha_nacimiento: new Date(2023, 4, 25)},
    ],
    skipDuplicates: true,
})

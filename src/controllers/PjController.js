import prisma from '../prismaClient.js'
//Todos los personajes
const getPj = async (req , res) => {
    
        const personajes = await prisma.personajes.findMany()
        if(personajes.length == 0){
            res.status(404).send("no se encontro ningún elemento ");
        }
        if(personajes.length != 0){
            res.json(personajes)
        }
    
   
} 
const getPjById = async (req, res) => {
   
        const { id } = req.params
        
        const personajes = await prisma.personajes.findUnique({
            where: {
                id: Number(id)
            }
            
        })
        if(personajes != null){
            res.json(personajes)
        }
        else{
            res.status(404).send("No se encontro ningun personaje con la id proporcionada")
        }
}
    
       
   
 
 
const createPj = async (req, res) => {
    try {
        const {nombre,fuerza, fecha_nacimiento, objeto} = req.body
        
        const personajes = await prisma.personajes.create({
            data :{
                nombre,
                fuerza,
                fecha_nacimiento: new Date(fecha_nacimiento),
                objeto,
            }
        })
        res.json(personajes)
    }
    catch(error){
        res.status(404).send("No se puedo Crear al personaje, revise los parametros dados")
    }
    
}
 
const updatePj = async (req, res) => {
    try{
        const {id} = req.params
        const {fecha_nacimiento, fuerza, nombre, objeto} = req.body
        const fechaNacimiento = fecha_nacimiento ? new Date(fecha_nacimiento) : undefined
        const fuerza1 = fuerza ? fuerza : undefined
        const nombre1 = nombre ? nombre : undefined
        const objeto1 = objeto ? objeto : undefined
        const update = await prisma.personajes.update({
            where: {
                id: Number(id)
            },
            data:{
                fecha_nacimiento: fechaNacimiento,
                fuerza: fuerza1,
                nombre: nombre1,
                objeto: objeto1
            }
        })
        res.json(update)
    }
    catch(error){
        res.status(404).send("No se encontro a ningún personaje con la id proporcionada")
    }
    
}
 
const deletePj = async (req, res) => {
    try{
        const {id} = req.params
        const deletepj = await prisma.personajes.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(deletepj)
    }
    catch(error){
        res.status(404).send("No se encontro a ningún personaje con la id proporcionada")
    }
}

const PjFuertes5 =  async  (req,res) => {
    try{
        const personaje = await prisma.personajes.findMany({
            take: 5,
            orderBy: {
                  fuerza: 'desc',
            }}
        )
        res.json(personaje)
    }
    catch(error){
        res.status(404).send("No se encontraron personajes")
    }
}
const KartsMas = async (req,res) => {
    try{
    const personajes = await prisma.personajes.findMany({
    take:1,
      include: {
        _count:{
            select:{
                karts: true
            }
        }
      }})
    const {nombre, _count} = personajes[0]
     res.json({
        nombre,
        cantidad: _count.karts
     })}
     catch(error){
        res.status(404).send("No se encontraron personajes con karts")
     }
    
    
}
const  Pjporreion = async(req, res) =>{
    try{
    const {id} = req.params
    const pjReino = await prisma.reinos.findMany({
        where:{
            id: Number(id)
        },
        include:{
            _count:{
                select:{pesonaje_habita_reino: true}
            }
        }
    })
    const {nombre, _count} = pjReino[0]
    res.json({
       nombre,
       cantidad: _count.pesonaje_habita_reino
    }) }
    catch(error){
        res.status(404).send("No se encontro reino con la id proporcionada")
    } 
}
const Reino_gob = async(req,res) =>{
    try{
    const persona = await prisma.personajes.findMany({
        where:{
            pesonaje_habita_reino:{
                some:{
                    es_gobernate: true
               }
            }
        },
        select:{
            nombre: true
        }
})
    res.json(persona)}
    catch(error){
        res.status(404).send("No se encontraron personajes gobernantes o reinos")
    }
}  
const Reino_gob2 = async(req,res) =>{
    try{
    const {id} = req.params
    const reinos1 = await prisma.pesonaje_habita_reino.findMany({
        where:{
            reinosId: Number(id),
            es_gobernate: true    
        },
        select:{
            id_personaje:{
                select:{
                    nombre: true
                }
            }
        }
    })
    let hola;

    hola = reinos1.map((x)=>
        x.id_personaje
    )
    res.json(hola)}
    catch(error){
        res.status(404).send("No se encontro reino con la id proporcionada")
    }
}
const PjController = {
    getPj,
    getPjById,
    createPj, 
    updatePj,
    deletePj,
    PjFuertes5,
    KartsMas,
    Pjporreion,
    Reino_gob,
    Reino_gob2
}

export default PjController



import prisma from '../prismaClient.js'
const getDiplo = async (req , res) => {
    const pjtra = await prisma.diplomacias.findMany()
    if(pjtra.length == 0){
        res.status(500).send("no se encontro ningún elemento ");
    }
    if(pjtra.length != 0){
        res.json(pjtra)
    }
}
const getdiploById = async (req, res) => {
    
    const {id_1,id_2} = req.params
    const diplo = await prisma.diplomacias.findUnique({
        where: 
        {reinos1_reinos2:{reinos1 : Number(id_1), reinos2: Number(id_2) }}
    }) 
    if(diplo != null){
        res.json(diplo)
    }
    else{
        res.status(500).send("No se encontro diplomacia con las id proporcionadas")
    }
}
const createDiplo = async (req, res) => {
    try{
        const {es_aliado,reinos1,reinos2} = req.body
        const diplo = await prisma.diplomacias.create({
            data :{
                id_reino_1:{connect:{id:Number(reinos1)}},
                id_reino_2:{connect:{id:Number(reinos2)}},
                es_aliado
            }
        })
        res.json(diplo)
    }
    catch(error){
        res.status(500).send("error al crear la diplomacia, favor de revisar los parametros");
    }
}
const updateDiplo = async (req, res) => {
    try{
    const {id_1,id_2} = req.params
    const update = await prisma.diplomacias.update({
        where: {
            reinos1_reinos2: {reinos1 : Number(id_1), reinos2: Number(id_2) }
        },
        data: req.body
    })
    res.json(update)
}
    catch(error){
        res.status(500).send("error al actualizar, favor de revisar los parametros");
    }
}
const deleteDiplo = async (req, res) => {
    try{
    const {id} = req.params
    const deletePjTra = await prisma.diplomacias.delete({
        where: {
            reinos1_reinos2: {reinos1 : Number(id_1), reinos2: Number(id_2) }
        }
    })
    res.json(deletePjTra)
    }
    catch(error){
        res.status(500).send("error al eliminar, favor de revisar los parametros");
    }
}

const DiploController = {
    getDiplo,
    getdiploById,
    createDiplo,
    updateDiplo,
    deleteDiplo
}
export default DiploController
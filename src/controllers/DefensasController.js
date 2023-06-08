import prisma from '../prismaClient.js'
const GetDef = async (req, res) => {
    
    const getdef = await prisma.defensas.findMany()
    if(getdef.length == 0){
        res.status(404).send("no se encontro ningún elemento ");
    }
    if(getdef.length != 0){
        res.json(getdef)
    }
}

const GetDefById = async (req,res) => {
    const {id_def} = req.params
        const def = await prisma.defensas.findUnique({
            where: {id: Number(id_def)}
        })
        if(def != null){
            res.json(def)
        }
        else{
            res.status(404).send("No se encontro defensa alguna con la id proporcionada")
        }    
    
}

const createDef = async (req, res) => {
    const {id_reino} = req.params
    const {defensa} = req.body
    try {
        try{
            const reino = await prisma.reinos.findUnique({
                where: {id: Number(id_reino)} 
             })
        }
        catch(error){
            res.status(404).send("No se encontro a un Reino con la Id proporcionada");
        }
   
    const def_reinos = await prisma.defensas.create({
        data:{
            defensa,
            reinos: {
                connect:{id: Number(id_reino)}
            }
        }
    })
    res.json(def_reinos)
}
    catch(error){
       
        res.status(404).send("Ocurrió un error al crear la relación");

    }}
const UpdateDef = async(req,res) => {
    const{id_def} = req.params
    try{
        const update = await prisma.defensas.update({
            where: {id: Number(id_def)},
            data: req.body
        })
        res.json(update)
    }
    catch(error){
        res.status(404).send("error al actualizar, favor de revisar los parametros");
    }
}
const DeleteDef = async(req,res) =>{
    const{id_def} = req.params
    try{
        const deletedef = await prisma.defensas.delete({
            where: {id: Number(id_def)}
        })
        res.json(deletedef)
    }
    catch(error){
        res.status(404).send("error al eliminar, favor de revisar los parametros");
    }
}
const DefensasController = {
    createDef,
    GetDef,
    GetDefById,
    UpdateDef,
    DeleteDef
}

export default DefensasController
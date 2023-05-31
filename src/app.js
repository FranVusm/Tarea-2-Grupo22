import express from 'express';
import PjController from './controllers/PjController.js';
import morgan from 'morgan';
import TraController from './controllers/TraController.js';
import KarsController from './controllers/KarsController.js';
import PjTraController from './controllers/PjTraController.js';
import ReinosController from './controllers/ReinosController.js';
import DiploController from './controllers/DiploController.js';
import PjReinoController from './controllers/PjReinoController.js';
const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
app.get('/personajes', PjController.getPj)
app.post('/personajes', PjController.createPj)
app.get('/personajes/:id', PjController.getPjById)
app.put('/personajes/:id', PjController.updatePj)
app.delete('/personajes/:id', PjController.deletePj)
// Trabajos
app.get('/trabajos', TraController.getTra)
app.post('/trabajos', TraController.createTrabajo)
app.get('/trabajos/:id', TraController.getTraById)
app.put('/trabajos/:id', TraController.updateTra)
app.delete('/trabajos/:id', TraController.deleteTra)
// Karts
app.get('/karts',KarsController.getKart)
app.post('/karts', KarsController.createKart)
app.get('/karts/:id', KarsController.getKartById)
app.put('/karts/:id',KarsController.updateKart)
app.delete('/karts/:id', KarsController.deleteKart)
//PjTra
app.get('/pjtrabajos',PjTraController.getPjTra)
app.post('/pjtrabajos', PjTraController.createPjTra)
app.get('/pjtrabajos/:id_tra/:id_pj', PjTraController.getPjTraById)
app.put('/pjtrabajos/:id_tra/:id_pj',PjTraController.updatePjTra)
app.delete('/pjtrabajos/:id_tra/:id_pj', PjTraController.deletePjTra)
//Reinos 
app.get('/reinos',ReinosController.getReino)
app.post('/reinos', ReinosController.createReino)
app.get('/reinos/:id', ReinosController.getReinosById)
app.put('/reinos/:id',ReinosController.updateReino)
app.delete('/reinos/:id', ReinosController.deleteReinos)
//diplomacias
app.get('/diplomacias',DiploController.getDiplo)
app.post('/diplomacias', DiploController.createDiplo)
app.get('/diplomacias/:id_1/:id_2', DiploController.getdiploById)
app.put('/diplomacias/:id_1/:id_2',DiploController.updateDiplo)
app.delete('/diplomacias/:id', DiploController.deleteDiplo)
//Pjreino
app.get('/pjreino',PjReinoController.getPjReino)
app.post('/pjreino', PjReinoController.createPjReino)
app.get('/pjreino/:id_1/:id_2', PjReinoController.getPjReinoId)
app.put('/pjreino/:id_1/:id_2',PjReinoController.updatePjReino)
app.delete('/pjreino/:id_1/:id_2', PjReinoController.deletePjReino)



//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})
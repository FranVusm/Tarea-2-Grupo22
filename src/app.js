import express from 'express';
import PjController from './controllers/PjController.js';
import morgan from 'morgan';
import postController from './controllers/PostsController.js';
import TraController from './controllers/TraController.js';
import KarsController from './controllers/KarsController.js';
import PjTraController from './controllers/PjTraController.js';
const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
app.get('/personajes', PjController.getPj)
app.get('/personajes/:id', PjController.getPjById)
app.post('/personajes', PjController.createPj)
app.put('/personajes/:id', PjController.updatePj)
app.delete('/personajes/:id', PjController.deletePj)
// Trabajos
app.get('/trabajos', TraController.getTra)
app.post('/trabajos', TraController.createTrabajo)
// Karts
app.post('/karts',KarsController.createKart)
app.get("/posts", postController.getPosts)
//PjTra
app.post('/pjtrabajos', PjTraController.createPjTra)
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
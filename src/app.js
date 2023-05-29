import express from 'express';
import UsersController from './controllers/UsersController.js';
import morgan from 'morgan';
import postController from './controllers/PostsController.js';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
app.get('/personajes', UsersController.getPj)
app.get('/personajes/:id', UsersController.getPjById)

app.post('/personajes', UsersController.createPj)
app.put('/personajes/:id', UsersController.updatePj)
app.delete('/personajes/:id', UsersController.deletePj)
//app.get('/personajes/:id', UsersController.usersPosts)

app.get("/posts", postController.getPosts)
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
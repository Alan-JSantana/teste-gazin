import express from 'express';
import routerDev from './routes/devRoutes.js';
import routerLevel from './routes/levelRoutes.js';

const server = express();

server.use(express.json());
server.use('/api', routerDev);
server.use('/api', routerLevel);
server.listen(5000, ()=>{
    console.log('tamo on rapazz');
});
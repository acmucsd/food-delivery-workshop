import express from 'express';
import router from './api';

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/', router);

server.listen(3000, () => {
  console.log('Server started on port 3000!');
});
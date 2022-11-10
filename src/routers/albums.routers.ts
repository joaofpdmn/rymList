import { Router } from 'express';
import { insertListenedAlbums } from '../controllers/albums.controller.js';

const albumsRouter = Router();

albumsRouter.post('/albums', insertListenedAlbums);

export { albumsRouter } ;
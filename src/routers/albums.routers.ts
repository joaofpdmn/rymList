import { Router } from 'express';
import { getAllAlbums, insertListenedAlbums } from '../controllers/albums.controller.js';

const albumsRouter = Router();

albumsRouter.post('/albums', insertListenedAlbums);
albumsRouter.get('/albums/:dateOrRating', getAllAlbums);

export { albumsRouter } ;
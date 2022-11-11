import { Router } from 'express';
import { deleteAlbum, getAllAlbums, insertListenedAlbums, updateAlbum } from '../controllers/albums.controller.js';

const albumsRouter = Router();

albumsRouter.post('/albums', insertListenedAlbums);
albumsRouter.get('/albums/:dateOrRating', getAllAlbums);
albumsRouter.put('/albums', updateAlbum);
albumsRouter.delete('/albums', deleteAlbum);

export { albumsRouter } ;
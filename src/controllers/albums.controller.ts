import { Request, Response } from "express";
import { deleteAlbumRepository, getAlbumsRepositoryByRating, getAlbumsRepositoryDefault, insertAlbumRepository, updateAlbumRepository } from "../repositories/albums.repository.js";
import { albumsSchema } from "../schemas/albumsSchema.js";

async function insertListenedAlbums(req: Request, res: Response) {
    const { name, artist, rating, critic } = req.body;
    const validation = albumsSchema.validate({ name, artist, rating, critic });
    if (validation.error) {
        return res.sendStatus(400);
    }
    try {
        await insertAlbumRepository({ name, artist, rating, critic });
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

async function getAllAlbums(req: Request, res: Response) {
    const { dateOrRating } = req.params;
    if (dateOrRating==='rating') {
        try {
            const albumsByRating: (string | number)[] = await getAlbumsRepositoryByRating();
            if (!albumsByRating.length) {
                return res.sendStatus(404);
            }
            return res.status(201).send(albumsByRating);
        } catch (error) {
            return res.sendStatus(500);
        }
    }
    try {
        if(dateOrRating!=='date'){
            return res.status(404).send('Parametro invalido!');
        }
        const albumsDefault: (string | number)[] = await getAlbumsRepositoryDefault();
        if (!albumsDefault.length) {
            return res.sendStatus(404);
        }
        return res.status(201).send(albumsDefault);
    } catch (error) {
        return res.sendStatus(500);
    }
}

async function updateAlbum(req: Request, res: Response){
    const { rating } = req.body;
    const { id } = req.query;
    try {
        await updateAlbumRepository({rating, id });
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteAlbum(req: Request, res: Response){
    const { id } = req.query;
    try {
        await deleteAlbumRepository({id});
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export { insertListenedAlbums, getAllAlbums, updateAlbum, deleteAlbum }
import { Request, Response } from "express";
import { getAlbumsRepositoryByRating, getAlbumsRepositoryDefault, insertAlbumRepository } from "../repositories/albums.repository.js";
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

export { insertListenedAlbums, getAllAlbums }
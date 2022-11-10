import { Request, Response } from "express";
import { insertAlbumRepository } from "../repositories/albums.repository.js";
import { albumsSchema } from "../schemas/albumsSchema.js";


async function insertListenedAlbums(req: Request, res: Response){
    const { name, artist, rating, critic } = req.body;
    const validation = albumsSchema.validate({name, artist, rating, critic });
    if(validation.error){
        return res.sendStatus(400);
    }
    try {
        await insertAlbumRepository({name, artist, rating, critic});
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

async function getAllAlbums (req: Request, res: Response){
    
}

export { insertListenedAlbums }
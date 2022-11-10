import connection from "../database/database.js";

async function insertAlbumRepository({name, artist, rating, critic}:
     {
        name: string,
        artist: string,
        rating: number,
        critic: string
     }){
        const albumQuery =  await connection.query(
            `
              INSERT INTO albums (
                name,
                artist,
                rating,
                critic
              ) 
                VALUES ($1, $2, $3, $4);
            `, 
            [ name, artist, rating, critic ]
          );
          return albumQuery;   
}

async function getAlbumsRepository(){
    
}


export { insertAlbumRepository }
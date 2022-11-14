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

async function getAlbumsRepositoryByRating(){
    const allAlbumsQuery = (await connection.query(`
      SELECT * FROM albums ORDER BY rating DESC;
    `)).rows;
    return allAlbumsQuery;
}

async function getAlbumsRepositoryDefault(){
  const allAlbumsQuery = (await connection.query(`
      SELECT * FROM albums;
    `)).rows;
    return allAlbumsQuery;
}

async function updateAlbumRepository({rating, id}){
  const updateAlbumQuery = await connection.query(`UPDATE albums SET rating = $1 WHERE id = $2;`, 
  [rating, id]);
  return updateAlbumQuery;
}

async function deleteAlbumRepository({ id }){
  const deleteAlbumQuery = await connection.query(`DELETE FROM albums WHERE id = $1;`, [id]);
  return deleteAlbumQuery;
}

export { insertAlbumRepository, getAlbumsRepositoryByRating, getAlbumsRepositoryDefault, updateAlbumRepository, deleteAlbumRepository }
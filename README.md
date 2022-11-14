# rymList

Basic implementation to organize albums reviews. 



## API Documentation

#### Add a Album Review to the database

```http
  POST /albums
```
BODY: 

{
  
    "name": "Clara Crocodilo",

    "artist": "Arrigo Barnabé",

    "rating": 10,

    "critic": "Um dos melhores álbuns da minha vida"

}


#### Return All Albums Reviews Based on Date Or Rating

```http
  GET /albums/:dateOrRating
```


#### Update Album Rating

```http
  PUT /albums
```

BODY: 

{

    "rating": 9

}

Receives id from the req.query.


#### Remove Album Review from the database

```http
  DELETE /albums
```

Receives id from the req.query.


## Stack utilizada

**Back-end:** Node, Express, TypeScript

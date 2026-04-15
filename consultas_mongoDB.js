// NIVELL 1
// EXERCICI 1
// Mostra els 2 primers comentaris que hi ha en la base de dades.
[
  { "$sort": { "date": 1 } },
  { "$limit": 2 }
]

// Quants usuaris tenim registrats?
[{ "$count": "total_users" }]

// Quants cinemes hi ha en l'estat de Califòrnia?
[{ "$match": { "location.address.state": "CA" } },
  { "$count": "total_theaters" }]

// Quin va ser el primer usuari/ària en registrar-se?
// Se propuso una búsqueda en el informe, teniendo en cuenta no es posible identificar con certeza el primer usuario registrado mediante un filtro por fecha. 


// Quantes pel·lícules de comèdia hi ha en la nostra base de dades?
[{ "$match": { "genres": "Comedy" } },
  { "$count": "total_comedy_movies" }]


// EXERCICI 2
// Mostra'm tots els documents de les pel·lícules produïdes en 1932, 
// però que el gènere sigui drama o estiguin en francès.
[{"$match": {
      "year": 1932,
      "$or": [{ "genres": "Drama" },
        { "languages": "French" }]
            }
  }
]


// EXERCICI 3
// Mostra'm tots els documents de pel·lícules estatunidenques 
// que tinguin entre 5 i 9 premis que van ser produïdes entre 2012 i 2014.
[
  {"$match": {
      "countries": "USA",
      "awards.wins": { "$gte": 5, "$lte": 9 },
      "year": { "$gte": 2012, "$lte": 2014 }
    }
  }
]




// NIVELL 2
// EXERCICI 1
// Compte quants comentaris escriu un usuari/ària que utilitza "GAMEOFTHRON.ES" 
// com a domini de correu electrònic.
[
  { "$match": { "email": /@gameofthron\.es$/i } },
  { "$count": "total_comments" }
]


// EXERCICI 2
// Quants cinemes hi ha en cada codi postal situats dins de l'estat Washington D. C. (DC)?
[
  { "$match": { "location.address.state": "DC" } },
  {"$group": {
      "_id": "$location.address.zipcode",
      "total_theaters": { "$sum": 1 }
              }
  },
  { "$sort": { "_id": 1 } }
]



// NIVELL 3
// EXERCICI 1
// Troba totes les pel·lícules dirigides per John Landis amb una puntuació IMDb (Internet Movie Database) d'entre 7,5 i 8.
[
  {
    "$match": {
      "directors": "John Landis",
      "imdb.rating": { "$gte": 7.5, "$lte": 8 }
    }
  }
]



// EXERCICI 2
// Mostra en un mapa la ubicació de tots els teatres de la base de dades.
// Se muestra en Schema en el informe

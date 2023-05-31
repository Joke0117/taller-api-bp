import React from 'react'
import { useState } from 'react' 

const SuperHeros = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [paginacion, setPaginacion] = useState(0);

    const traerPersonajes = async (next) => {
        try{
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7be72508776961f3948639fbd796bccd&page=${next}`)
            const respuesta = await res.json()
            const auxPersonajes =  respuesta.results
            setPeliculas(auxPersonajes)
            // console.log(respuesta)
            console.log(auxPersonajes)
        }catch(error){
            console.log(error)
        }
    }

    const traer = () => {
        setPaginacion(paginacion + 1)
        traerPersonajes(paginacion + 1)
    }

    const siguiente = () =>{
        setPaginacion(paginacion + 1)
        traerPersonajes(paginacion + 1)
    }

    const atras = () =>{
        if (paginacion > 1) {
            setPaginacion(paginacion - 1)
            traerPersonajes(paginacion - 1)
        }
    }


  return (
    <div>
        <h1>API de Super Héroes</h1>
        <h2>José Ángel Martínez</h2>
        <button onClick={traer}>Traer Películas</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={atras}>Atrás</button>
        {peliculas.map(pelicula => (
          <div key={pelicula.id}>
            <h3>{pelicula.title}</h3>
            <h3>{pelicula.overview}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title} />
          </div>
        ))}
    </div>
  )
}

export default SuperHeros
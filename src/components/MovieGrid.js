import { useEffect, useState } from 'react/cjs/react.development'
import movies from '../Movies.json'
import { get } from '../utils/httpHelp'
import { MovieCard } from './MovieCard'
import styles from './MovieGrid.module.css'

export function MovieGrid(){
    const[movies, setMovies] = useState([])

    useEffect(()=>{
       get("/discover/movie").then(data=> setMovies(data.results))
    },[])

    if(!movies){
        return null
    }

    return(
        <ul className={styles.container}>
           {movies.map(movie => <MovieCard key={movie.id} movie={movie}/> )}
        </ul>
    )
}
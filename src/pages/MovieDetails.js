import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import { get } from '../utils/httpHelp';
import movie from './movie.json'
import styles from './MovieDetails.module.css'

export function MovieDetails(){
    
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    
    useEffect(()=>{
        
        get("/movie/" + movieId).then((data)=>{
            setMovie(data)
            
            
        })
    },[movieId])
    if(!movie){
        return null
    }
    
    
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
        <div className={styles.container}>
            <img className={styles.col} src={imageUrl} alt={movie.title}/>
            <div className={styles.col}>
            <h2> <strong>Title:</strong> {movie.title}</h2>
            <p>
            <strong>Generos:</strong> {movie.genres.map(el=> el.name).join(", ")}
            </p>
            <p><strong>Description:</strong> {movie.overview}</p>
            
            </div>
            
        </div>
    )
}
import Layout from '../common_ui/layouts/display-layout/layout';
import styles from './movies.module.css';

import { getMovies } from '../utils/api';

export default async function Movies() {
  
  const movies = await getMovies();
  
  return (
    <Layout>
      {movies.map((movie) => (
         <div className={styles.movieData} key={movie._id}>
          <div className={styles.movieMetaData}>
            <h3>{movie.name} </h3>
            <span>Total runtime: {movie.runtimeInMinutes} minutes ({(movie.runtimeInMinutes/60).toFixed(1)} hours)</span>
            
          </div>
          
          <div className={styles.movieStats}>
            <div>Academy awards: {movie.academyAwardWins} 🏆</div>
            <div>Budget: ${movie.budgetInMillions} million 💰</div>
            <div>{movie.rottenTomatoesScore.toFixed(0)}% {parseInt(movie.rottenTomatoesScore.toFixed(0)) > 70 ? '🍅' : '💩'}</div>
          </div>
        </div>
        ))}
   </Layout>
  )
}



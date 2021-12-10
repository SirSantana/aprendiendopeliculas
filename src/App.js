import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import styles from "./App.module.css";
import { MovieGrid } from "./components/MovieGrid";
import { MovieDetails } from "./pages/MovieDetails";



export function App() {
  return (
    <Router>
        <header >
            <Link to="/"><h2 className={styles.title}>Movies</h2></Link>
        </header>
        <main>
            <Routes>
                <Route path="/movies/:movieId" element={<MovieDetails/>}/>
                <Route path="/" element={<MovieGrid/>}/>
                
            </Routes>
        </main>
    </Router>
  )
}

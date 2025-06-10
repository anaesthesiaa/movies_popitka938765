import React, { useState, useEffect}  from "react";
import { Movies, Search, Preloader } from "../components"


export function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMovies('naruto');
    },[])
    

    const fetchMovies = (str, type = "all") => {
        setLoading(true);
        fetch(
            `http://www.omdbapi.com/?apikey=46519c5f&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`
    )
        .then((response) => response.json())
        .then((data) => {setMovies(data.Search); setLoading(false)})
    }
    return <main className="container content">
        <Search searchMovies ={fetchMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    }


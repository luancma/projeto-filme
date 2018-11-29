import React from 'react'

const PopularMovies = props =>{
    return(
        <div>
            <h1>Popular Movies</h1>
            <p>Get a list of the current popular movies on TMDb. This list updates daily.</p>
            <ol>
                {props.movies.map((movie) => (
                <li key={movie.id}>
                <div>
                    <p> {movie.title} </p>
                </div>
                </li>
                ))}
            </ol>
        </div>
    )
}
export default PopularMovies;
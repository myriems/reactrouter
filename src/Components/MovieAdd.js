import React from 'react';
import MovieCard from './MovieCard';

function MovieAdd({movies, handleFunction}) {
    return (
            <div >

            {movies.map(el=> <MovieCard movie={el}/>)}  
             <div className="addmovie">
            <p>Add your favorite movie/ serie</p>  
            <button className="button" onClick={handleFunction}>Add a movie</button>
            </div>
        </div> 

    )
}
export default MovieAdd;
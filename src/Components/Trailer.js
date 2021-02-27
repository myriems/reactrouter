import React from "react";
import {Link} from "react-router-dom";


const Trailer = (props) => {
    const {movies,match} = props
    let movie = movies.find(el => el.title === match.params.id);
    let descriptionMovies;
    let trailerMovies;
    if(movie)
        descriptionMovies = <p>{movie.description}</p>
        trailerMovies = <iframe title={movie.title} width="750" height="300" src={"https://www.youtube.com/embed/"+movie.trailer} ></iframe>
    return (
           
            <div className='trailerdetails'>
                 <Link to='/'>
                <button className="trailerbtn"> X Close Trailer </button>
               </Link>
                {trailerMovies}
                <h4 id="trailertitle" >{movie.title} </h4>
                <p id="trailerdescription">{descriptionMovies}</p>
            </div>
    )
  }
export default Trailer;
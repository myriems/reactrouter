import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import {Link} from "react-router-dom";

function MovieCard({movie}) {
    return ( <>
        <Link to={`/movie/${movie.title}`} style={{textDecoration: 'none'}}>

        <div className="card">
          <a href={movie.link}  >
             <img src={movie.posterUrl}  width="200px" height="300px"></img>
          </a> 
          <div className="description">
              <div className="title">
           <p>{movie.title}</p>
           <div className="star"> {[...Array(movie.rate)].map(el=>{
                  return <FaStarHalfAlt key={Math.random()*1000} color="#dbb42c"  /> }
                  )
                  }
               </div>  
                </div>
           <p>{movie.description}</p> 
           </div>     
        </div>  
      </Link>
      </>
    )
}
export default MovieCard;
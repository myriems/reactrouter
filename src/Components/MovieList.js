import React from 'react';
function MovieList({movies, searchByTitle, searchByRate}) {
    return (

        <div className="searchlist">
          <p>Search your favorite movie/ serie</p>
          <div className="searchdetails">
           <div className="search">
             <input type="text" placeholder="title"  onChange={e=>searchByTitle(e.target.value)}></input>         
             {movies.map(el=><a href={el.link}></a>)}       
          </div>
          <div className="search">
            <input type="number" placeholder="rate" onChange={e=>searchByRate(e.target.value)}></input>
         </div>
         </div>
        </div>
     
    ) 
}
export default MovieList;
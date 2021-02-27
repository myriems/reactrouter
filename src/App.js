import React, {useState} from 'react';
import './App.css';
import Trailer from './Components/Trailer';
import AddCard from './Components/AddCard';
import MovieList from './Components/MovieList';
import MovieAdd from './Components/MovieAdd';
import theHobbit from "./Components/theHobbit.jpg";
import harryPotter from "./Components/harryPotter.jpg";
import gameofThrones from "./Components/gameofThrones.jpg";
import Friends from "./Components/Friends.jpg";
import theLordoftherings from "./Components/theLordoftherings.jpg";
import drHouse from "./Components/drHouse.jpg";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  const [movies, setMovies]=useState(
    [
      {title:"The Lord Of The Rings", description:"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
     posterUrl:theLordoftherings, rate:3, link:"#" ,  trailer: "r5X-hFf6Bwo"},  
      {title:"The Hobbit", description:"Bilbo Baggins (Martin Freeman) lives a simple life with his fellow hobbits in the shire, until the wizard Gandalf arrives and convinces him to join a group of dwarves on a quest to reclaim the kingdom of Erebor.",
     posterUrl:theHobbit, rate:3, link:"#" , trailer:"SDnYMbYB-nU"},
    {title:"Harry Potter", description:"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
     posterUrl:harryPotter, rate:5, link:"#", trailer: "VyHV0BRtdxo" },
    {title:"Game Of Thrones", description:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
     posterUrl:gameofThrones, rate:5, link:"#" , trailer:"gcTkNV5Vg1E"},
       {title:"House", description:"An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.", 
    posterUrl:drHouse, rate:4, link:"#", trailer: "MczMB8nU1sY"},
    {title:"Friends", description:"Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
     posterUrl:Friends, rate:4, link:"#", trailer:"https://youtu.be/hDNNmeeJs1Q"}

    ]
)
const [test, setTest]=useState(true);
const [testSearch, setTestSearch]=useState(false);
const [searchList, setSearchList]=useState(movies);

  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
    setTestSearch(false);
  }

  function handleFunction() { setTest(!test); }

  function searchByTitle(movieSearch) {
    setSearchList(movies.filter(el => el.title.toUpperCase().includes(movieSearch.toUpperCase())));
    setTestSearch(true);
  }

  function searchByRate(rateSearch) {
    setSearchList(movies.filter(el => el.rate == rateSearch));
    setTestSearch(true);
    rateSearch=="" && setTestSearch(false);
  }
  return (
    <div className="homePage" >       
    

     {test? 
      <div className="App" >
        <Router>
        <MovieList movies={!testSearch? movies: searchList}  searchByTitle={searchByTitle} searchByRate={searchByRate}/>
        <Switch>
      <Route
          path="/movie/:id"
          component={(props) => <Trailer {...props} movies={movies} />}
        />
        
      </Switch>
        <MovieAdd movies={!testSearch? movies: searchList} handleFunction={handleFunction}/>
        </Router>
      </div>
     :
       <AddCard addMovie={addMovie} handleFunction={handleFunction}/>
       
       
       }
    </div>
  ) 
}
export default App;
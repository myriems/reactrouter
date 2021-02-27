import React, { useState } from 'react';
function AddCard({addMovie, handleFunction}) {
    const [newMovie,setNewMovie]=useState({title:"", description:"", posterUrl:"", rate:0, link:""});
    const inputFunction=(e)=> {
        setNewMovie({...newMovie, [e.target.target]:e.target.value})
    }
    return (

        <div className="addcard">
              <div className="adddetails" >
                 <p>Add title</p>
                 <input type="text"  placeholder="enter the title" required onChange={inputFunction}/>
              </div>         
             <div className="adddetails" >
                 <p>Add link</p>
                 <input type="text"  placeholder="enter the link" required onChange={inputFunction}/>
             </div>
             <button className="addbtn" type="submit" onClick={e=>{e.preventDefault();addMovie(newMovie); handleFunction()}}>Add</button>
       </div>

    )
}
export default AddCard;

import React, {useState} from "react";
import MovieList from "./Components/MovieList";
import MovieDisplay from "./Components/MovieDisplay";


const App = () => {
   const [selectedMovie, setSelectedMovie] = useState("")


   return(
    <div style={{
      display:"flex",
      justifyContent: "space-around",
  
  }}>
         <MovieList updateMovie={setSelectedMovie}/> 
         <MovieDisplay  selectedMovie={selectedMovie}/>
    </div>
   )


}

export default App;
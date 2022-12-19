import '../styles/main.css'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import RecommendButton from '../components/RecommendButton'
import { useState } from 'react'
import Movie from '../components/Movie'
import { MovieMetaData } from "../components/Movie";

function Form() {
  
  const [movie1, setMovie1] = useState<MovieMetaData>({name: '', posterPath: 'https://images.squarespace-cdn.com/content/v1/56031d09e4b0dc68f6197723/1469030770980-URDU63CK3Q4RODZYH0S1/Grey+Box.jpg?format=1500w'});
  const [movie2, setMovie2] = useState<MovieMetaData>({name: '', posterPath: 'https://images.squarespace-cdn.com/content/v1/56031d09e4b0dc68f6197723/1469030770980-URDU63CK3Q4RODZYH0S1/Grey+Box.jpg?format=1500w'});
  const [movie3, setMovie3] = useState<MovieMetaData>({name: '', posterPath: 'https://images.squarespace-cdn.com/content/v1/56031d09e4b0dc68f6197723/1469030770980-URDU63CK3Q4RODZYH0S1/Grey+Box.jpg?format=1500w'});

  function handleChange1(name: string, posterPath : string) {
    const newMovie : MovieMetaData = {name : name, posterPath : posterPath}
    setMovie1(newMovie);
  }

  function handleChange2(name: string, posterPath : string) {
    const newMovie : MovieMetaData = {name : name, posterPath : posterPath}
    setMovie2(newMovie);
  }

  function handleChange3(name: string, posterPath : string) {
    const newMovie : MovieMetaData = {name : name, posterPath : posterPath}
    setMovie3(newMovie);
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <br></br>
      <div aria-label = "instructions to request for a recommendation"> Enter 1 to 3 movies you are in the mood to watch!</div>
      <br></br>
      <Search setMovie1={handleChange1} setMovie2={handleChange2} setMovie3={handleChange3}  />
      <div className='movieCards' aria-label = "movies you want a recommendation for">
        <Movie movieMetaData={movie1} aria-label = "first inputted movie"/>
        <Movie movieMetaData={movie2} aria-label = "second inputted movie"/>
        <Movie movieMetaData={movie3} aria-label = "third inputted movie"/>
      </div>
      <RecommendButton/>
    </div>
  );
}

export default Form;
import '../styles/main.css'
// import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import RecommendButton from '../components/RecommendButton'
import TrashIcon from '../components/TrashIcon'
import { useState } from 'react'
import React from 'react'
import Movie from '../components/Movie'
import { MovieMetaData } from "../components/Movie";

function Form(props: any) {
  const [count, setCount] = useState(0)

  const [search, setSearch] = useState<string | null>(null)

  const updateCount = (val: any) => {
    setCount(val++);
    console.log("CHECK COUNT HERE " + count)
  };
  
  const [movie1, setMovie1] = useState<MovieMetaData>({name: '', posterPath: ''});
  const [movie2, setMovie2] = useState<MovieMetaData>({name: '', posterPath: ''});
  const [movie3, setMovie3] = useState<MovieMetaData>({name: '', posterPath: ''});

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
      <div>Pick three movies you are in the mood to watch!</div>
      <br></br>
      {/* <Search onClickFunc={props.onClick} searchMovie={props.search} setMovieName1={props.setMovieName1} setMovieName2={props.setMovieName2} setMovieName3={props.setMovieName3} 
      count={count} setCount={updateCount} /> */}
      <Search setMovie1={handleChange1} setMovie2={handleChange2} setMovie3={handleChange3}  />
      <div className='movieCards'>
        <Movie movieMetaData={movie1} />
        <Movie movieMetaData={movie2} />
        <Movie movieMetaData={movie3} />
      </div>
      <RecommendButton></RecommendButton>
    </div>
  );
}
//make 3 props for the movie cards and make a prop for each link for the

export default Form;
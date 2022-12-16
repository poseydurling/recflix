import '../styles/main.css'
import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import RecommendButton from '../components/RecommendButton'
import TrashIcon from '../components/TrashIcon'
import { useState } from 'react'
import React from 'react'


function Form(props: any) {
  const [count, setCount] = useState(0)

  const [search, setSearch] = useState<string | null>(null)

  const updateCount = (val: any) => {
    setCount(val++);
    console.log("CHECK COUNT HERE " + count)
  };

  return (
    <div className="App">
      <NavBar></NavBar>
      <br></br>
      <div>Pick three movies you are in the mood to watch!</div>
      <br></br>
      <Search onClickFunc={props.onClick} searchMovie={props.search} setMovie={props.setSearch} count={count} setCount={updateCount} />
      <div className='movieCards'>
      </div>
      <RecommendButton></RecommendButton>
    </div>
  );
}
//make 3 props for the movie cards and make a prop for each link for the

export default Form;
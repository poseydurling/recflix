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

  const [example1, setExample1] = useState('');
  const [example2, setExample2] = useState('');
  const [example3, setExample3] = useState('');

  return (
    <div className="App">
      <NavBar></NavBar>
      <br></br>
      <div>Pick three movies you are in the mood to watch!</div>
      <br></br>
      <Search onClickFunc={props.onClick} searchMovie={props.search} setMovie={props.setSearch} count={count} setCount={updateCount} />
      <div className='movieCards'>
        <Movie state={example1}/>
        <Movie state={example2}/>
        <Movie state={example3}/>
      </div>
      <RecommendButton></RecommendButton>
    </div>
  );
}
//make 3 props for the movie cards and make a prop for each link for the

export default Form;
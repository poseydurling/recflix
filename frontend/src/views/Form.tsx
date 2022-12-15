import '../styles/main.css'
import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import RecommendButton from '../components/RecommendButton'
import TrashIcon from '../components/TrashIcon'
import {useState} from 'react'


function Form(props: any){
  const [count, setCount] = useState(0)

  const updateCount = (val: any) => {
    setCount(val++);
    console.log("CHECK COUNT HERE"      +count)
};

    return (
        <div className="App">
          <NavBar></NavBar>
            <br></br>
                <div>Pick three movies you are in the mood to watch!</div>
                <br></br>
                <Search onClickFunc={props.onClick} searchMovie={props.search} setMovie={props.setSearch} count={count} setCount={updateCount}/>
                <div className='movieCards'>
                    <Movie card1={props.card1}/>
                    <Movie card2={props.card2} />
                    <Movie card3={props.card3}/>
                    {/* <Movie id="movieCard2"/>
                    <Movie id="movieCard3"/> */}
                    <TrashIcon/>
                    <TrashIcon/>
                    <TrashIcon/>
                </div>
                <RecommendButton></RecommendButton>
        </div>
      );
}
//make 3 props for the movie cards and make a prop for each link for the

export default Form;
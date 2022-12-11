import './App.css'
import Movie from './components/Movie'
import NavBar from './components/NavBar'
import Search from './components/Search'
import RecommendButton from './components/RecommendButton'
import TrashIcon from './components/TrashIcon'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <br></br>
            <div>Pick three movies you are in the mood to watch!</div>
            <br></br>
            <Search></Search>
            <div className='movieCards'>
                <Movie id="movieCard1"/>
                <Movie id="movieCard2"/>
                <Movie id="movieCard3"/>
                <TrashIcon/>
                <TrashIcon/>
                <TrashIcon/>
            </div>
            <RecommendButton></RecommendButton>
    </div>
  );
}

export default App;

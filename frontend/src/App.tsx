import './main.css'
import Movie from './components/Movie'

function App(){
    return (
        <div className='App'>
            <div className='movieCards'>
                <Movie id='movieCard1'>
                    
                </Movie>
                <Movie id='movieCard2'></Movie>
                <Movie id='movieCard2'></Movie>
            </div>
        </div>
    )
}

export default App;
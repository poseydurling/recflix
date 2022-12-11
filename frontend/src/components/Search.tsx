import {getAllMovies} from "../controller/Search"
import {useState} from "react";
import { AutoComplete } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import loadMovieImage from "../controller/Recommendation"

//https://rsuitejs.com/components/auto-complete/
//https://blog.devgenius.io/getting-started-with-react-development-with-the-react-suite-library-autocomplete-and-toggle-169701dbb8c7

export default function Search(){
    const options = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday', 'Sunday']
    const [search, setSearch] = useState('');
    const availableTitles = () => {getAllMovies()};
    const handleChange = (val: any) => {
        setSearch(val);
      }; 
    return (    
        <div>
            {/* onChange={(event) => {setSearch(event.target.value)}} */} 
            <AutoComplete style={{width: '100%'}} id="search-box" placeholder="Enter a movie title here!" data={options} value={search} onChange={handleChange}/>
            <button type="submit" id="submit1" onClick={() => {loadMovieImage(search.toString())}}>Search</button>
        </div>
    )
}

//loadMovieImage(search.toString())
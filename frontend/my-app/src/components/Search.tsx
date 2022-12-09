import {getAllMovies, getMovieAutocomplete} from "../controller/Search"
import {useState} from "react";
//import JqueryReactAutocomplete from "jquery-react-autocomplete";

export default function search(){
    const [search, setSearch] = useState('');
    return (
        <div>
            <input type="text" id="search-box" placeholder="Enter a movie title here!" onChange={(event) => {setSearch(event.target.value)}}/>
            <button type="submit" id="submit1" onClick={() => {registerAutocomplete(search)}}>Search</button>
        </div>
    )
}

function registerAutocomplete(search: String) {
      var availableTitles = () => {getMovieAutocomplete(search)};
    //   $( "#search-box" ).autocomplete({
    //     source: availableTitles

    //   });

    getAllMovies()
}
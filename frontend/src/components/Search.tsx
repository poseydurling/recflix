import {getAllMovies, searchTitle} from "../controller/Search"
import {useState} from "react";
import { AutoComplete } from 'rsuite'
// import 'rsuite/dist/rsuite.min.css';
import loadMovieImage from "../controller/Recommendation"

//https://rsuitejs.com/components/auto-complete/
//https://blog.devgenius.io/getting-started-with-react-development-with-the-react-suite-library-autocomplete-and-toggle-169701dbb8c7

const options = ['Monday', 'Tuesday']

export default function Search(){
    const [search, setSearch] = useState('');
    const handleChange = (val: any) => {
        setSearch(val);
      }; 
    return (    
        <div>
            {/* onChange={(event) => {setSearch(event.target.value)}} */} 
           <AutoComplete style={{width: '100%'}} id="search-box" placeholder="Enter a movie title here!" data={options} value={search} onChange={handleChange}/>
            <button type="submit" id="submit1" onClick={() => {buildRecommendationsbySearch(search)/*getAutocompleteList()*/}}>Search</button>
        </div>
    )
}
export let recMovlist: any[] = []

function buildRecommendationsbySearch(search: string) {

    //build the movie ID lists recommended from the 3 searched titles
    //it'll be used when clicking the recommendation button
    searchTitle(search).then(reclist =>{
        if(reclist !== null) {
            for(let i=0; i<reclist.data.length; i++) {
                recMovlist[i] = reclist.data[i]
            }
        }
    })
}
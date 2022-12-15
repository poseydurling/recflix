import {getAllMovies, getMovieTitleList, searchTitle} from "../controller/Search"
import {useEffect, useState} from "react";
import { AutoComplete } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import loadMovieImage from "../controller/Recommendation"
import { getMovieTitlesFromMap } from "../controller/Search";
import { fetchPoster } from "../controller/Media";


//https://rsuitejs.com/components/auto-complete/
//https://blog.devgenius.io/getting-started-with-react-development-with-the-react-suite-library-autocomplete-and-toggle-169701dbb8c7

const options = ['Monday', 'Tuesday']

//to have a shared state variable between search and form we need to make a useState in the class that contains both the search and 

export default function Search(props: any){
    const [titleList, setTitleList] = useState(['']); 
    const [search, setSearch] = useState('');
    const movieName = async() => {
        const response = await getMovieTitleList();
        setTitleList(response)
    }
    const handleChange = (val: any) => {
        setSearch(val);
      }; 
      const [card1, setcard1] = useState('');
      const [card2, setcard2] = useState('');
      const [card3, setcard3] = useState('');
    
      const handleSettingCard = async()=>{
        const posterResponse1 = await fetchPoster(card1);
        setcard1(posterResponse1)
    
        const posterResponse2 = await fetchPoster(card2);
        setcard2(posterResponse2)
    
        const posterResponse3 = await fetchPoster(card3);
        setcard3(posterResponse3)
      }




      useEffect(() => {
          movieName()})
    return (    
        <div>
            {/* onChange={(event) => {setSearch(event.target.value)}} */} 
           <AutoComplete style={{width: '100%'}} id="search-box" placeholder="Enter a movie title here!" data={titleList} value={search} onChange={handleChange}/>
            <button type="submit" id="submit1" onClick={() => {buildRecommendationsbySearch(search)
            handleSettingCard()

                
                /*getAutocompleteList()*/}}>Search</button>
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
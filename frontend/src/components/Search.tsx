import { getAllMovies, getMovieTitleList, searchTitle } from "../controller/Search"
import { useEffect, useState } from "react";
import { AutoComplete } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import { getMovieTitlesFromMap } from "../controller/Search";
import { fetchPoster } from "../controller/Media";
import Movie from "./Movie";
import { validateLocaleAndSetLanguage } from "typescript";
import TrashIcon from "./TrashIcon";


//https://rsuitejs.com/components/auto-complete/
//https://blog.devgenius.io/getting-started-with-react-development-with-the-react-suite-library-autocomplete-and-toggle-169701dbb8c7

const options = ['Monday', 'Tuesday']
let count = 0;


//to have a shared state variable between search and form we need to make a useState in the class that contains both the search and 

interface Movie {
    movieName: string
}
//pass in movie list as prop

export default function Search(props: any) {
    const [movieList, setMList] = useState<Movie[]>([]);

    const [titleList, setTitleList] = useState(['']);
    const [search, setSearch] = useState('');

    const movieName = async () => {
        const response = await getMovieTitleList();
        setTitleList(response)
    }

    // const handleChange = (val : any) => {
    //     setSearch(val)
    // };

    const [card1, setcard1] = useState('');
    const [card2, setcard2] = useState('');
    const [card3, setcard3] = useState('');


    const handleSettingCard = async () => {
        const posterResponse1 = await fetchPoster(search);
        // setcard1(posterResponse1)

        // const posterResponse2 = await fetchPoster(search);
        // setcard2(posterResponse2)

        // const posterResponse3 = await fetchPoster(search);
        // setcard3(posterResponse3)
    }
    const handleChange = (val: any) => {
        setSearch(val)
    };


    useEffect(() => {
        movieName()
    })
    return (
        <div>
            <AutoComplete style={{ width: '100%' }} id="search-box" placeholder="Enter a movie title here!" data={titleList} value={search} onChange={handleChange} />
            <button type="submit" id="submit1" onClick={async () => {
                await buildRecommendationsbySearch(search);
                // await handleSettingCard()
                // props.setCount()
                /*getAutocompleteList()*/
                count++;
                let result = search
                let newMovie = { movieName: result }
                let newList: Movie[] = movieList
                newList.push(newMovie)
                setMList(newList)
                console.log(movieList)
                setSearch("")
            }}>Search</button>
            <div className="movieCards">
                {movieList.map(movie => <Movie /*card="card1"*/ movieName={movie.movieName} />)}
            </div>
        </div>
    )
}
export let recMovlist: any[] = []

export function handleTrashClick(){
    
}

/**
 * 
 * @param search 
 */
async function buildRecommendationsbySearch(search: string) {

    // console.log(search)
    //build the movie ID lists recommended from the 3 searched titles
    //it'll be used when clicking the recommendation button
    const reclist = await searchTitle(search)

    if (reclist !== null) {
        for (let i = 0; i < reclist.data.length; i++) {
            recMovlist[i] = reclist.data[i]
        }
    }
}
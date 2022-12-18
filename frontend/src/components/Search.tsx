import { getMovieTitleList, getRecommendation, updateExamples} from "../controller/Search"
import { useEffect, useState } from "react";
import { AutoComplete } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import { fetchPoster } from "../controller/Media";

//https://rsuitejs.com/components/auto-complete/
//https://blog.devgenius.io/getting-started-with-react-development-with-the-react-suite-library-autocomplete-and-toggle-169701dbb8c7

let count = 0;
export let recMovlist: any[] = []

//To have a shared state variable between search and form, we need to make a useState in the class that contains both the search and 
interface SearchProps {
    setMovie1: (name: string, posterPath : string) => void
    setMovie2: (name: string, posterPath : string) => void
    setMovie3: (name: string, posterPath : string) => void
}

interface MovieInterface {
    movieName : string
}

export default function Search({setMovie1, setMovie2, setMovie3}: SearchProps) {
    const [movieList, setMList] = useState<MovieInterface[]>([]);
    const [titleList, setTitleList] = useState(['']);
    const [input, setInput] = useState('');

    const finalName = async () => {
        const response = await getMovieTitleList();
        setTitleList(response)
    }

    const handleInputChange = (val: any) => {
        setInput(val)
    };

    useEffect(() => {
        finalName()
    })

    return (
        <div>
            <AutoComplete style={{ width: '100%' }} id="search-box" placeholder="Enter a movie title here!" data={titleList} value={input} onChange={handleInputChange} />
            <button type="submit" id="submit1" onClick={async () => {
                await buildRecommendationsbySearch(input);
                const posterPath = await fetchPoster(input, count);
                if(count == 0){
                    setMovie1(input, posterPath);
                    count++
                    console.log('INPUT', input)
                    console.log("DEBUG 1")
                    console.log("POSTER 1",  posterPath)
                } else if (count == 1){
                    setMovie2(input, posterPath);
                    count++
                    console.log('INPUT2', input)
                    console.log('DEBUG 2')
                    console.log("POSTER 2",  posterPath)
                } else if (count == 2) {
                    setMovie3(input, posterPath);
                    count = 0
                }
                setInput("")
            }}>Search</button>
         </div> 
    )
}

//Builds the movie ID lists recommended from the 3 searched titles. Used when clicking the recommendation button
async function buildRecommendationsbySearch(search: string) {
    const reclist = await getRecommendation(search)

    if (reclist !== null) {
        for (let i = 0; i < reclist.data.length; i++) {
            recMovlist[i] = reclist.data[i]
        }
    }
}


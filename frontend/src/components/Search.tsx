import { getMovieTitleList, getRecommendation, updateExamples} from "../controller/Search"
import { useEffect, useState } from "react";
import { AutoComplete } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import { fetchPoster } from "../controller/Media";
export const TEXT_autocomplete = "search bar to type in movie title"
export const TEXT_submitButton = "submit button to search for a movie"
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
/**
 * 
 * @param param0 3 moive component props which take in the image path of the user's 3 inputted movies
 * @returns 3 movie components which display the user's inputted movie's poster paths when the user clicks search button
 */
export default function Search({setMovie1, setMovie2, setMovie3}: SearchProps) {
  
    //use state that is used to update the autocomplete options for the movies in our searchbar as the user types
    const [titleList, setTitleList] = useState(['']);
    // useState that updates the user's moive inputs on button click
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
    }, [])

    // the autcomplete component is updated through the titleList useState as the user types
    // once the user hits "search" after selecting a movie, the user's inputted movies are displayed on the screen and the movies id's are 
    //added to a list which will be used to build a recommendation for them 
    return (
        <div> 
            <AutoComplete style={{ width: '100%' }} id="search-box" placeholder="Enter a movie title here!" data={titleList} aria-label = {TEXT_autocomplete} value={input} onChange={handleInputChange} />
            <button type="submit" id="submit1" aria-label = {TEXT_submitButton} onClick={async () => {
                await buildRecommendationsbySearch(input);
                const posterPath = await fetchPoster(input, count);
                if(count == 0){
                    setMovie1(input, posterPath);
                    count++
                } else if (count == 1){
                    setMovie2(input, posterPath);
                    count++
                } else if (count == 2) {
                    setMovie3(input, posterPath);
                    count++;
                }
                setInput("")
            }}>Search</button>
         </div> 
    )
}

//This is the buildRecommendationsbySearch() function that takes in variable search of type string. 
//It is responsible for building the movie ID lists recommended from the 3 searched titles and used 
//when clicking the recommendation button.
async function buildRecommendationsbySearch(search: string) {
    const reclist = await getRecommendation(search)

    if (reclist !== null) {
        for (let i = 0; i < reclist.data.length; i++) {
            recMovlist[i] = reclist.data[i]
        }
    }
}


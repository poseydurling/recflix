import '../styles/main.css'
// import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import TryAgainButton from '../components/TryAgainButton'
import NewRequestButton from '../components/NewRequestButton'
// import NewRequestButton from '../components/newRequestButton'
import Movie, { MovieMetaData } from "../components/Movie";
import { useState } from 'react';
import { recMovlist } from "../components/Search";
import { useEffect } from 'react';
import { getMovieDetails } from '../components/RecommendButton';

function Recommendation() {

    let newRecId : number = 0;

    const [recommendation, setRecommendation] = useState<MovieMetaData>({name: '', posterPath: ''});

    // function handleChange1(name: string, posterPath : string) {
    //     const newRecommendation : MovieMetaData = {name : name, posterPath : posterPath}
    //     setRecommendation(newRecommendation);
    //   }

      const[displayData, setDisplayData] = useState<MovieMetaData>({name: ' ', posterPath:' '});

    
      async function getMovieInformation(recId : number[]){
        console.log('LOOK IN HERE FOR GETMOVIEREC LOG')
        if(recId.length < 3)
        {
            alert("please search at least 3 movies first!")
    
        } else {
            //display the first recommended movie
            const recommendation = await getMovieDetails(recId[0])
            const recPosterPath=  "https://image.tmdb.org/t/p/original/" + recommendation.poster_path
            const recTitle = recommendation.original_title
            // console.log(recTitle)
            // console.log(recPosterPath)
            setDisplayData({name: recTitle, posterPath: recPosterPath})
 
        }
    }
 
    useEffect(() => {
        // console.log("Check that rec button use effect is called")
        const getRecommendationInfo = async() => 
        {
            await getMovieInformation(recMovlist)
            console.log(recMovlist)
        
        }
        getRecommendationInfo()
    }, [])

//         async function getNewMovieInformation(recId : number[]){
//         console.log('GETTING U A NEW RECOMMENDATION')
//         newRecId++
   
//     if(newRecId > recId.length-1)
//     {
//         //end of recommended list -> print error!
//         alert("No more recommendations available!")
//     }else{
//         const newRecommendation = await getMovieDetails(recId[newRecId])
//         const newRecPosterPath = "https://image.tmdb.org/t/p/original/" + newRecommendation.poster_path
//         const newRecTtitle = newRecommendation.original_title
//         setDisplayData({name: newRecTtitle, posterPath: newRecPosterPath})

//     }
// }

// useEffect(() => {
//     console.log("Check that rec button use effect is called")
//     const getRecommendationInfo = async() => 
//     {
//         await getNewMovieInformation(recMovlist)
//     }
//     getRecommendationInfo()
// }, [])



        
    return (

        <div>
            <NavBar></NavBar>
            <div>We recommend...</div>
            <Movie movieMetaData={displayData} ></Movie>
            <TryAgainButton    ></TryAgainButton>
            <NewRequestButton></NewRequestButton>


        </div>
    )
}

export default Recommendation;
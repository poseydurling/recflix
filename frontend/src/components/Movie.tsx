/**
 * This class creates the movie card component which the movies' poster paths fill into
 */


export type MovieMetaData = { 
    name: string
    posterPath: string
}

interface MovieProps {
    movieMetaData: MovieMetaData
    id: string
}

/**
 * 
 * @param movieMetaData interface which sets a name and poster path for a given movie
 * @returns a Moive component which displays the poster path for a given movie
 */
export default function Movie({ movieMetaData, id } : MovieProps) {

    return (

        <div style={{color: 'white'}} className="movieCard"id={id} aria-label = "movie poster and title information">
            <img src={movieMetaData.posterPath}/>
            {movieMetaData.name}
        </div>
    )
}
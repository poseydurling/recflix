export type MovieMetaData = { 
    name: string
    posterPath: string
}

interface MovieProps {
    movieMetaData: MovieMetaData
}
/**
 * 
 * @param param0 movieMetaData
 * @returns a Movie component which sets the image for the next recommednde movie
 */

export default function Movie({ movieMetaData } : MovieProps) {

    return (
        <div style={{color: 'white'}} id="nextMovieCard" aria-label = "recommendation movie poster and title information">
            <img src={movieMetaData.posterPath}/>
            <center>{movieMetaData.name}</center>
        </div>
    )
}
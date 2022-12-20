export type MovieMetaData = { 
    name: string
    posterPath: string
}

interface MovieProps {
    movieMetaData: MovieMetaData
}

/**
 * 
 * @param param0 movieMetaData which sets a movie's name and poster path
 * @returns movie component with the poster path of the recommended movie 
 */
export default function Movie({ movieMetaData } : MovieProps) {

    return (
        <div style={{color: 'white'}} id="recMovieCard" aria-label = "recommendation movie poster and title information">
            <img src={movieMetaData.posterPath}/>
            <center>{movieMetaData.name}</center>
        </div>
    )
}
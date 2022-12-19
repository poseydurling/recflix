export type MovieMetaData = { 
    name: string
    posterPath: string
}

interface MovieProps {
    movieMetaData: MovieMetaData
}

export default function Movie({ movieMetaData } : MovieProps) {

    return (
        <div id="nextMovieCard" aria-label = "recommendation movie poster and title information">
            <img src={movieMetaData.posterPath}/>
            <center>{movieMetaData.name}</center>
        </div>
    )
}
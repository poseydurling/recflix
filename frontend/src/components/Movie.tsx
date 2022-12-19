export type MovieMetaData = { 
    name: string
    posterPath: string
}

interface MovieProps {
    movieMetaData: MovieMetaData
}

export default function Movie({ movieMetaData } : MovieProps) {

    return (
        <div id="movieCard" aria-label = "movie poster and title information">
            <img src={movieMetaData.posterPath}/>
            {movieMetaData.name}
        </div>
    )
}
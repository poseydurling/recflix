export type MovieMetaData = { 
    name: string
    posterPath: string
}

interface MovieProps {
    movieMetaData: MovieMetaData
}

export default function Movie({ movieMetaData } : MovieProps) {

    return (
        <div id="movieCard">
            <img src={movieMetaData.posterPath}/>
            {movieMetaData.name}
        </div>
    )
}
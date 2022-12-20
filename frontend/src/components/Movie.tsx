export type MovieMetaData = { 
    name: string
    posterPath: string
}

interface MovieProps {
    movieMetaData: MovieMetaData
    id: string
}


export default function Movie({ movieMetaData, id } : MovieProps) {

    return (

        <div style={{color: 'white'}} className="movieCard"id={id} aria-label = "movie poster and title information">
            <img src={movieMetaData.posterPath}/>
            {movieMetaData.name}
        </div>
    )
}
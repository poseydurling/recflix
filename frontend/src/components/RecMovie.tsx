export type MovieMetaData = { 
    name: string
    posterPath: string
}

interface MovieProps {
    movieMetaData: MovieMetaData
}

export default function Movie({ movieMetaData } : MovieProps) {

    return (
        <div style={{color: 'white'}} id="recMovieCard" aria-label = "recommendation movie poster and title information">
            <img src={movieMetaData.posterPath}/>
            <center>{movieMetaData.name}</center>
        </div>
    )
}
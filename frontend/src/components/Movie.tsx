import { useEffect, useState } from "react"
import { fetchPoster } from "../controller/Media"
import React from "react";
import TrashIcon from "./TrashIcon";

interface MovieProps {
    movieName: string
}


//delete on, use state gets set to true then remove from list 

export default function Movie({ movieName }: MovieProps) {
    const [deletePoster, setDeletePoster] = useState(false);

   return (
            <div className="movieCard" >
                <Poster name={movieName} deletePoster={deletePoster}/>
                <TrashIcon onClick={setDeletePoster(true)}></TrashIcon>
            </div>
        )
}

interface PosterProps {
    name: string
    delete: boolean
}

//export function Poster({ name, deletePoster}: PosterProps) {

export function Poster(props: any) {

    const [path, setPath] = useState<string | null>(null)

    useEffect(() => {
         fetchPoster(props.name).then(p => setPath(p));
    }, [])

    return (
            <div>
                {path && !props.deletePoster ? (<img src={path} style={{height: "350px", width: "250px"}} />) : (<img src={'https://www.iconsdb.com/icons/preview/light-gray/square-xxl.png'} style={{height: "350px", width: "250px"}} />)}
            </div>
        )
}
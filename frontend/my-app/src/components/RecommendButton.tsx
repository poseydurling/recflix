import { useState } from "react";

export default function RecommendButton(){
    const [search, setSearch] = useState('');
    return (
        <div>
            <button type="submit" id="recommendButton" /*onClick={() => {getMovieAutocomplete(search)}}*/>Recommend-A-Movie</button>
        </div>
    )
}
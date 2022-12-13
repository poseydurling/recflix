import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewRequestButton() {
    const navigateToRecPage = useNavigate();

    const [search, setSearch] = useState('');
    return (
        <div>
            <button type="submit" id="newRequestButton"
                onClick={() => navigateToRecPage('/')}
            /*onClick={() => {getMovieAutocomplete(search)}}*/>Go Back to Home</button>

        </div>
    )
}
import { useNavigate } from "react-router-dom";
import setCount from "./TryAgainButton"

export default function NewRequestButton() {
    const navigateToRecPage = useNavigate();
    return (
        <div>
            <button type="submit" id="newRequestButton"
                onClick={() => { navigateToRecPage('/')
                setCount()
                }
            }>Go Back to Home</button>

        </div>
    )
}
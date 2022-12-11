import {handleTrashClick} from "../controller/Recommendation"

export default function NavBar(){
    return (
        <button id="trashIcon"><img src={"https://cdn-icons-png.flaticon.com/512/860/860829.png"} width="25" height="25" onClick={() => {handleTrashClick()}}></img></button>
    )
}
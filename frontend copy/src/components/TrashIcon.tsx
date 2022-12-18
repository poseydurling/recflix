import {handleTrashClick} from "./Search"

export default function TrashIcon(props : any){
    return (
        <button id="trashIcon"><img src={"https://cdn-icons-png.flaticon.com/512/860/860829.png"} width="25" height="25" onClick={props.onClick}></img></button>
    )
}
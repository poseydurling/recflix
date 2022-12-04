import { posterPath } from './Media'

var submitCount = 0;

function loadMovieImage(movieName : String){
    var movieNumber = 'movie-1'
    if(submitCount = 1){
        var movieNumber = 'movie-1'
    } else if (submitCount = 2) {
        var movieNumber = 'movie-2'
    } else if (submitCount = 3){
        var movieNumber = 'movie-3'
    } else {
        console.log("movie number cannot be found based on submit clicks")
    }
    const newClass = document.getElementsByClassName(movieNumber)
    const input1 = document.createElement('img')
    //get the image of the movie using the string passed in
    input1.src = "https://image.tmdb.org/t/p/original/" + posterPath(movieName);
    input1.style.backgroundImage = "https://cdn-icons-png.flaticon.com/512/860/860829.png";
    if(movieNumber == 'movie-1'){
        input1.style.width = "20%";
        input1.style.height = "400px";
        input1.style.marginLeft = "8%";
        input1.style.marginTop = "10px";
        newClass[0].appendChild(input1)
        console.log("loaded movie image");
    } else if(movieNumber == 'movie-2'){
        input1.style.width = "20%";
        input1.style.height = "400px";
        input1.style.marginLeft = "40%";
        input1.style.marginTop = "-400px";
        newClass[0].appendChild(input1)
        console.log("loaded movie image");
    } else if (movieNumber == 'movie-3'){
        input1.style.width = "20%";
        input1.style.height = "400px";
        input1.style.marginLeft = "72%";
        input1.style.marginTop = "-400px";
        newClass[0].appendChild(input1)
        console.log("loaded movie image");
    } else {
        console.log("movie image could not be loaded into correct recommendation box");
    }
}

function handleTrashClick() {
    const maybeTrash1: HTMLCollectionOf<Element> = document.getElementsByClassName('trash1')
    const trash1: Element | null = maybeTrash1.item(0)
    const maybeMovie1: HTMLCollectionOf<Element> = document.getElementsByClassName('trash1')
    const movie1: Element | null = maybeMovie1.item(0)
    if(trash1 === null) {
        console.log("Couldn't find input element")
    } else if(!(trash1 instanceof HTMLInputElement)) {
        console.log(`Found element ${trash1}, but it wasn't an input`)
    } else {
            if(movie1 === null) {
                console.log("Couldn't find input element")
            } else if(!(movie1 instanceof HTMLInputElement)) {
                console.log(`Found element ${movie1}, but it wasn't an input`)
            } else {
                submitCount = submitCount - 1;
                //movie1.removeChild(/*image here*/)
                return console.log("movie-1 recommendation cleared")
            }
    }
}

export {handleTrashClick, loadMovieImage};
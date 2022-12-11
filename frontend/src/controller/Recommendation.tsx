
var submitCount = 0;

export function loadMovie1() {
    const maybeMovie1 = document.getElementsByClassName('movieCard1')
    const movie1: Element | null = maybeMovie1.item(0)
    if(movie1 === null) {
        console.log("Couldn't find input element")
    } else if(!(movie1 instanceof HTMLInputElement)) {
        console.log(`Found element ${movie1}, but it wasn't an input`)
    } else {
        movie1.style.backgroundImage="https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg";
    }
}

export default function loadMovieImage(movieName : String){
    const maybeMovie1 = document.getElementsByClassName('movieCard1')
    const movie1: Element | null = maybeMovie1.item(0)
    if(movie1 === null) {
        console.log("Couldn't find input element")
    } else if(!(movie1 instanceof HTMLInputElement)) {
        console.log(`Found element ${movie1}, but it wasn't an input`)
    } else {
        movie1.style.backgroundImage="https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg";
    }
    // let movieNumber = '1'
    // if(submitCount = 1){
    //     movieNumber = '1'
    // } else if (submitCount = 2) {
    //     movieNumber = '2'
    // } else if (submitCount = 3){
    //     movieNumber = '3'
    // } else {
    //     console.log("Movie number cannot be found based on submit clicks")
    // }

    // const newClass = document.getElementsByClassName(movieNumber)
    // const input1 = document.createElement('img')
    
    // //get the image of the movie using the string passed in
    // // input1.src = "https://image.tmdb.org/t/p/original/"; //+poster path
    
    // // input1.style.backgroundImage = "https://cdn-icons-png.flaticon.com/512/860/860829.png";
    // if(movieNumber == '1'){
    //     input1.style.width = "20%";
    //     input1.style.height = "400px";
    //     input1.style.marginLeft = "8%";
    //     input1.style.marginTop = "10px";
    //     newClass[0].appendChild(input1)
    //     console.log("Loaded movie image");
    // } else if(movieNumber == '2'){
    //     input1.style.width = "20%";
    //     input1.style.height = "400px";
    //     input1.style.marginLeft = "40%";
    //     input1.style.marginTop = "-400px";
    //     newClass[0].appendChild(input1)
    //     console.log("Loaded movie image");
    // } else if (movieNumber == '3'){
    //     input1.style.width = "20%";
    //     input1.style.height = "400px";
    //     input1.style.marginLeft = "72%";
    //     input1.style.marginTop = "-400px";
    //     newClass[0].appendChild(input1)
    //     console.log("Loaded movie image");
    // } else {
    //     console.log("Movie image could not be loaded into correct recommendation box");
    // }
    // submitCount++;
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
    submitCount--;
}

export {handleTrashClick, loadMovieImage};
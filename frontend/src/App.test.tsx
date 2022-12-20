import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Recommendation from './views/Recommendation';
import { myKey } from './private/key';
import { getAllMovies, getRecommendation } from './controller/Search';
import { ResultType } from '@remix-run/router/dist/utils';
import { isElement, isElementOfType } from 'react-dom/test-utils';
const expectedOutput = [175574, 13673, 18147, 8871, 51052, 9279, 9969, 1268, 9043, 771]
import {TEXT_submitButton, TEXT_autocomplete} from "./components/Search"
import { access } from 'fs';
import userEvent from '@testing-library/user-event';
import { execPath } from 'process';
import exp from 'constants';



beforeEach(() => {
  render(<App />);
});

beforeEach(() => {
  render(<Recommendation />);
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('testing fetch for getAllMovies and getMovieTitleList', async () => {
//   const url = 'http://127.0.0.1:5000/titles_to_ids/'
//   const result = await fetch(url)
//     .then(response => response.json())
//     .then(data => data)

//   expect(result['status']).toBe('success')
//   expect(result['data']).toBeValid
// })

// test('testing fetch for sendPost', async () => {
//   const result = await fetch('http://127.0.0.1:5000/recommendations/', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "example1": 13187, "example2" : 17979, "example3": 850})
// })
//   const response = await result.json()
//   expect(result['status']).toBe(200)
//   expect(response.data).toStrictEqual([175574, 13673, 18147, 8871, 51052, 9279, 9969, 1268, 9043, 771])
// })

// test('testing fetch for getMovieDetails, getMovieInformation, and fetchPoster', async () => {
//   const url = 'https://api.themoviedb.org/3/movie/175574?api_key='+myKey+'&language=en-US'
//   const result = await fetch(url)
//     .then(response => response.json())
//     .then(data => data)

//   expect(result['adult']).toBe(false)
//   expect(result['original_title']).toBe("Free Birds")
//   expect(result['poster_path']).toBe("/gnSU2wUBq2gTkBEkxY8C1d1fXAQ.jpg")
// })

// test('search controller getRecommendation function', async () =>{
//   await getRecommendation("A Christmas Carol"); 
//   await getRecommendation("A Christmas Story");
//   const result = await getRecommendation("A Charlie Brown Christmas")

//   const response = await result

//   expect(response).toStrictEqual({"data": [175574, 13673, 18147, 8871, 51052, 9279, 9969, 1268, 9043, 771], "status": "success"})
// })


test('checking components from the Form page', () => {

 const submitButton = document.getElementById("submit1")
 expect(submitButton).toBeInTheDocument();

 const searchBar = document.getElementById("search-box")
 expect(searchBar).toBeInTheDocument();

 const movieCard1 = document.getElementById("movieCard1")
 expect(movieCard1).toBeInTheDocument();

 const movieCard2 = document.getElementById("movieCard1")
 expect(movieCard2).toBeInTheDocument();

 const movieCard3 = document.getElementById("movieCard1")
 expect(movieCard3).toBeInTheDocument();

 const weRecommend = document.getElementById("weRecommend")
 expect(weRecommend).toBeInTheDocument();

})

test('checking components in the recommednation page', () =>{
  const recMovieCard = document.getElementById("recMovieCard")
  expect(recMovieCard).toBeInTheDocument();

  const nextButton = document.getElementById('nextButton')
  expect(nextButton).toBeInTheDocument();
})

test('check that autoComplete searchBar works', async () => {
  const inputBox = screen.getByRole('textbox', {name: TEXT_autocomplete})
  const submitButton = screen.getByRole('button', {name: TEXT_submitButton})
  userEvent.type(inputBox, "10 Things I Hate About You ")
  userEvent.click(submitButton)
  const output = await screen.findByText(new RegExp("10 Things I Hate About You"))
  expect(output).toBeInTheDocument()


  const inputBox2 = screen.getByRole('textbox', {name: TEXT_autocomplete})
  userEvent.type(inputBox2, "Harry Potter")
  const output2 = await screen.findByText(new RegExp("Harry Potter and the Goblet of Fire"))
  expect(output2).toBeInTheDocument()
})







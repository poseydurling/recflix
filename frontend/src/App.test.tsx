import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { myKey } from './private/key';
import { getAllMovies, getRecommendation } from './controller/Search';
import { ResultType } from '@remix-run/router/dist/utils';

const expectedOutput = [175574, 13673, 18147, 8871, 51052, 9279, 9969, 1268, 9043, 771]

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('testing fetch for getAllMovies and getMovieTitleList', async () => {
  const url = 'http://127.0.0.1:5000/titles_to_ids/'
  const result = await fetch(url)
    .then(response => response.json())
    .then(data => data)

  expect(result['status']).toBe('success')
  expect(result['data']).toBeValid
})

test('testing fetch for sendPost', async () => {
  const result = await fetch('http://127.0.0.1:5000/recommendations/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "example1": 13187, "example2" : 17979, "example3": 850})
})
  const response = await result.json()
  expect(result['status']).toBe(200)
  expect(response.data).toStrictEqual([175574, 13673, 18147, 8871, 51052, 9279, 9969, 1268, 9043, 771])
})

test('testing fetch for getMovieDetails, getMovieInformation, and fetchPoster', async () => {
  const url = 'https://api.themoviedb.org/3/movie/175574?api_key='+myKey+'&language=en-US'
  const result = await fetch(url)
    .then(response => response.json())
    .then(data => data)

  expect(result['adult']).toBe(false)
  expect(result['original_title']).toBe("Free Birds")
  expect(result['poster_path']).toBe("/gnSU2wUBq2gTkBEkxY8C1d1fXAQ.jpg")
})

test('search controller getRecommendation function', async () =>{
  await getRecommendation("A Christmas Carol"); 
  await getRecommendation("A Christmas Story");
  const result = await getRecommendation("A Charlie Brown Christmas")

  const response = await result

  expect(response).toStrictEqual({"data": [175574, 13673, 18147, 8871, 51052, 9279, 9969, 1268, 9043, 771], "status": "success"})
})
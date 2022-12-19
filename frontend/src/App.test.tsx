import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { myKey } from './private/key';
import { getRecommendation } from './controller/Search';

const expectedOutput = [175574, 13673, 18147, 8871, 51052, 9279, 9969, 1268, 9043, 771]

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches to backend for master movie list', async () => {
  const url = 'http://127.0.0.1:5000/titles_to_ids/'
  const result = await fetch(url)
    .then(response => response.json())
    .then(data => data)

  expect(result['status']).toBe('success')
  expect(result['data']).toBeValid
})

test('fetches to backend for recommended movies', async () => {
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

test('fetches to api for recommended movie information', async () => {
  const url = 'https://api.themoviedb.org/3/movie/175574?api_key='+myKey+'&language=en-US'
  const result = await fetch(url)
    .then(response => response.json())
    .then(data => data)

  expect(result['adult']).toBe(false)
  expect(result['original_title']).toBe("Free Birds")
  expect(result['poster_path']).toBe("/gnSU2wUBq2gTkBEkxY8C1d1fXAQ.jpg")
})

test('search controller getRecommendation function', async () =>{
  getRecommendation("A Christmas Carol")
  getRecommendation("A Christmas Story")
  //getRecommendation("A Charlie Brown Christmas")

  //expect(getRecommendation("A Charlie Brown Christmas")).toReturn(Array)
})
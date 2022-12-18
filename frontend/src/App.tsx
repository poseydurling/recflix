import { useState } from 'react';
import { BrowserRouter, Route, Routes, Router, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Form from './views/Form';

import Recommendation from './views/Recommendation';
import { fetchPoster } from './controller/Media';
import {movieID} from './controller/Search';
// import NewRecommendation from './views/NewRecommendation'




function App () {
  const [search, setSearch] = useState('');
  const handleChange = (val: any) => {
    setSearch(search);
  }

  const [card1, setcard1] = useState('');
  const [card2, setcard2] = useState('');
  const [card3, setcard3] = useState('');

  const handleSettingCard = async()=>{
    const posterResponse1 = await fetchPoster(search);
    // setcard1(posterResponse1)

    const posterResponse2 = await fetchPoster(search);
    // setcard2(posterResponse2)

    const posterResponse3 = await fetchPoster(search);
    // setcard3(posterResponse3)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Form card1={card1} card2={card2} card3={card3} onClick={handleSettingCard} search={search} setSearch={setSearch}/>} />
        <Route path="/recommendationPage" element={<Recommendation/>} />
        {/* <Route path="/newRecommendationPage" element={<NewRecommendation/>} /> */}
      </Routes>
    </BrowserRouter>
    
  )
}
export default App;
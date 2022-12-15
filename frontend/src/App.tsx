import { useState } from 'react';
import { BrowserRouter, Route, Routes, Router, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Form from './views/Form';
import NewRecommendation from './views/NewRecommendation';
import Recommendation from './views/Recommendation';
import { fetchPoster } from './controller/Media';





function App () {
  // const [card1, setcard1] = useState('');
  // const [card2, setcard2] = useState('');
  // const [card3, setcard3] = useState('');

  // const handleSettingCard = async()=>{
  //   const posterResponse1 = await fetchPoster(card1);
  //   setcard1(posterResponse1)

  //   const posterResponse2 = await fetchPoster(card2);
  //   setcard2(posterResponse2)

  //   const posterResponse3 = await fetchPoster(card3);
  //   setcard3(posterResponse3)
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Form/>} />
        <Route path="/recommendationPage" element={<Recommendation/>} />
        <Route path="/newRecommendationPage" element={<NewRecommendation/>} />
      </Routes>
    </BrowserRouter>
    
  )
}
export default App;
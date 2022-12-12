import { BrowserRouter, Route, Routes, Router, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Form from './views/Form';
// import Layout from './views/Layout';
// import Recommendation from './views/Recommendation';
import NewRecommendation from './views/NewRecommendation';
import Recommendation from './views/Recommendation';


// const router = createBrowserRouter([
//   {
//     path: "/", element: <Form/>
//   }, 
//   {
//     path: "/recommendationPage", element: <Recommendation/>
//   },
//   {
//     path: "/newRecommendationPage", element: <NewRecommendation/>
//   }

// ]);

// export default function App(){
//   return (
//     <div className="App">
//       <RouterProvider 
//       router={router}
//       />
//     </div>

//   );

// }




// function App() {
//   console.log("Check if App is being rendered");
//   return (
//     <BrowserRouter> 
//      <Route>
//         <Route path='/' element={<Form/>}/>
//         <Route path='/recommendationPage' element={<Recommendation/>} />
//         <Route path='/newRecommendationPage' element={<NewRecommendation/>} />
//       </switch>
//     </BrowserRouter>
  
//   );
// }



function App () {
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
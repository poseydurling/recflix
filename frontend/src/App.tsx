import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Form from './views/Form';
import Recommendation from './views/Recommendation';
/**
 * 
 * @returns components that connect the layout of our website. When our app is first rendered, you are taken to the Form page where
 * the user can search and input up to 3 movies they'd like a recommendation for. We give a path name for the recommendation page which
 * we call on Button click in the recommend button. When the reocmmend button is clicked, we direct the user to the recommednation page
 * which displays our recommended movie along with the option for the user to get a new movie recommendation 
 */
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Form/>} />
        <Route path="/recommendation" element={<Recommendation/>} />
      </Routes>
    </BrowserRouter>
    
  )
}
export default App;
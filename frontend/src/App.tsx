import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Form from './views/Form';
import Recommendation from './views/Recommendation';

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
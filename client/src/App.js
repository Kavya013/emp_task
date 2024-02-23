import './App.css';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homenew from './Homenew';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Homenew' element={<Homenew />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

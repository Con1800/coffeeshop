import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavLayout from './components/Navbar/NavLayout';
import CoffeeLists from './pages/CoffeeLists';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<NavLayout />} >
           <Route path='/' element={<Home />} />
           <Route path='coffee' element={<CoffeeLists />} />
           <Route path='about' element={<About />}/>
           <Route path='contact' element={<Contacts />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
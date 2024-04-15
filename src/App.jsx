
import './App.css';
import Contact from './pages/Contact/Contact';
import About  from './pages/About/About';
import Home  from './pages/Home/Home';
import Nav  from './components/Nav/Nav';

import {Route, Routes} from 'react-router-dom';


function App() {

  return (
    <div className='APP'>
      <Nav/>
      <Routes>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App;

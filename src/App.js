import { Routes, Route, useParams, BrowserRouter as Router, Link, } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Sache from './Sache';
import User from './User';



function App() {
  return (


      <div>

        <h1>Welcome to React Router!</h1>
        <Router>
        <Link to='/'> search</Link>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path='/search' element={<Sache/>}/>
       
        

      </Routes>
        </Router>
      
      </div>
      
    
    
    
  );
}

export default App;

import { Routes, Route, useParams, BrowserRouter as Router, Link, } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Users from './Users';
import User from './User';



function App() {
  return (


      <div>

        <h1>Welcome to React Router!</h1>
        <Router>
      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path='/users' element={<Users/>}/>
        <Route path='/user/:id' element={<User/>}/>
        

      </Routes>
        </Router>
      
      </div>
      
    
    
    
  );
}

export default App;

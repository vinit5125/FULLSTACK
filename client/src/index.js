import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router ,Routes, Link} from 'react-router-dom';
import App from './App';
import App1 from './home/hom1';
import Sp1 from './data';
import About from './About/About';
import Services from './Form/Form';
import Review from './Review/Review';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
    
          
      
            
        

    
      <Routes>
        <Route exact path='/' element={<App1/>} />
        <Route  path="/Sp1" element={<Sp1/>} />
        
        <Route path="/About" element={<About/>} /> 
        <Route path='Review' element={<Review/>}/>          
        <Route path='/Services' element={<Services/>}/>
      </Routes>
    </div>
  </Router>
);
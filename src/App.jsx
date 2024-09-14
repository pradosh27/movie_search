import React from 'react'
import Home from "./Home";
import Singlemovie from "./Singlemovie";
import Error from "./Error";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/movie/:id' element={<Singlemovie />}/>
        <Route path='*' element = {<Error />}/>
      </Routes>
    </Router>
  )
}

export default App
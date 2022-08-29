import React from'react';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
// import Navigation from './components/Navigation'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import Questions from './components/Questions';
import './App.css'

const App = () => {
    return(    
        <Router>
         <div className="App">    
            <Routes>
                <Route path='/' element ={<Home />}> </Route>
                <Route path='/login' element ={<Login />}> </Route>
                <Route path='' element ={<Login />}> </Route>
                <Route path='/signup' element ={<Signup />}></Route>
                <Route path='/dashboard' element ={<Dashboard />}></Route>
                <Route path='/questions' element ={<Questions />}></Route>
            </Routes>
        </div>
        </Router>
    );
};

export default App;
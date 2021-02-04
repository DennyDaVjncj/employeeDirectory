// import logo from './logo.svg';
import './App.css';
import React from 'react';
import{BrowserRouter as Router,Rout}from'react-router-dom';
import homePage from './src/pages/homePage';
import Navbar from './src/'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Wrapper>
          <Route exact path='/' component={homePage}/>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

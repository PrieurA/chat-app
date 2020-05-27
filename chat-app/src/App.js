import React from 'react';
import logo from './logo.svg';
import Contact from './components/Contact'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Contact} />
      </div>
    </Router>
  );
}

export default App;

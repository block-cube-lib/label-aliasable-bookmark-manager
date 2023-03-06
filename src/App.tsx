import { useState } from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TOS from './components/tos';
import PrivacyPolicy from './components/privacy-policy';
import SignIn from './components/signin';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tos" element={<TOS />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

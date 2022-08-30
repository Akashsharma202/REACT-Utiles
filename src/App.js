
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { 
  BrowserRouter as Router, Route, Link, Switch} 
        from "react-router-dom";

import React, { useState } from 'react'
import { Routes } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f2d53";
      showAlert("You Have Enabled Dark mode", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("You Have Enabled light mode", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar utils="Utilities" about="about us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} toggleMode={toggleMode} />
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
            </Route>
          <Route exact path="/">
          <TextForm heading="Enter your text here to analyze" mode={mode} showAlert={showAlert} />   
          </Route>
          </Switch>
        </div>
        </Router>
      

    </>
  );
}

export default App;
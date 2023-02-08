import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App =() =>{
  const [mode, setMode] = useState('light');
  
  const [title, setTitle] = useState('Enable Dark Mode');

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
        setAlert(null);
    },1500);
  }
  
  const toggleMode = () =>{
    if(mode === 'light')
    {
    setMode('dark');
    setTitle('Enable Light Mode');
    document.body.style.backgroundColor = '#495057';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    setTitle('Enable Dark Mode');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
  }
  }
  return (
    <>
    <Navbar AboutText='About' mode={mode} toggleMode={toggleMode} title={title}/>
    <Alert alert={alert}/>
   
    <Router>
      <Routes>
        <Route exact path='/' element={<TextForm showAlert={showAlert} mode={mode}/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
  </Router>
    
    </>
  );
}

export default App;

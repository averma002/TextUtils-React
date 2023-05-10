import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Texture from './components/Texture';
import { useState } from 'react';
//import About from './components/About';
import Alert from './components/Alert';
//import React from "react";

{/*import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";*/}

function App() {
  const [mode,setMode]=useState('light'); // Whether dark mode is enabled or not
  //const[alert,setAlert]=useState(null);

 {/* const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      Type:type
    })
    setTimeout(() => {
      setAlert=(null);
    }, 1500);
  }*/}
  
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      //showAlert("Dark mode has been enabled","success");
      document.title="Textutils - Dark Mode";
     {/* setInterval(()=>{
        document.title="Textutils is Amazing Mode";
      },1500);
      setInterval(()=>{
        document.title="Install Textutils Now";
      },2000);*/}
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      //showAlert("Light mode has been enabled","success");
      document.title = "Textutils - Light Mode";
    }
  }
  return(
   <> 
     {/*<Navbar  title="AV" AboutText="About AV"/>*/}
     {/*<Navbar />*/}
     {/*<Router>*/}
     <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
     {/*<Alert alert={alert}/>*/}
     <Texture heading="Enter the text to analyze below"mode={mode}/>
     <div className="container my-3">
     {/*<Routes>
          <Route exact path="/about"
           element={ <About />}>
          </Route>
          <Route exact path="/"
          element={}>
          </Route>
  </Routes>*/}
    </div>
    {/*</Router>*/}

   </>
  );
}

export default App;

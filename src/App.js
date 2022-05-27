import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './App.css';

function App() {

  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(30)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const changeTheme = () => {
    if(theme === "light") {
      setTheme("dark");
      showAlert("Dark Mode has been enabled!", "primary");
      // linear-gradient(45deg, rgb(11, 11, 26) 0%, rgb(33 33 34) 70%, rgb(0 4 42) 100%)
      // linear-gradient(45deg, rgb(11 11 26) 0%, rgb(0 0 38) 70%, rgb(3 10 84) 100%)
      document.body.style.background = "linear-gradient(45deg, rgb(11, 11, 26) 0%, rgb(33 33 34) 70%, rgb(0 4 42) 100%)";
    } else {
      setTheme("light");
      showAlert("Light Mode has been enabled!", "primary");
      document.body.style.background = "rgb(235,233,233)";
    }  
  }

  return (
    <Router>
      <LoadingBar color='#f11946' height={3} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Navbar theme={theme} changeTheme={changeTheme} />
      <div className="alert-container" style={{height: "60px", width: "100%"}}>
        <Alert data={alert} />
      </div>
      <Routes>
        <Route exact path='/' element={<TextForm theme={theme} showAlert={showAlert} setProgress={setProgress} />} />
        <Route exact path='/about' element={<About theme={theme} setProgress={setProgress} />} />
      </Routes>
    </Router>
  );
}

export default App;

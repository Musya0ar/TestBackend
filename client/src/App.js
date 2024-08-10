import React, {useEffect, useState} from 'react';
import NavigationBar  from './components/NavigationBar';
import "./style/landingPage.css";
import "./App.css";
import Intro from './components/Intro';
import Showcase from './components/Showcase';

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    ) 
  }, [])


  return (
    <div>

      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar/>
        <Intro />
      </div>
      {/* End Intro section */}
      
      {/* Showcase Section */}
      <div className="showcase">
        <Showcase/>
        <Showcase/>
        <Showcase/>
        <Showcase/>
      </div>
      {/* End Showcase Section */}
    </div>
    
  )}

export default App


{/* {typeof backendData.result === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        backendData.result.map((result, i) => (
          <p key={i}>{result}</p>
        ))
      )} */}
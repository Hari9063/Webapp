import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[story,setStory]=useState();
  const[city,setCity]=useState();
  const apiurl="https://weatherappbackend4.onrender.com";

  async function FetchStory(){
    try{
    const response=await fetch(`${apiurl}/api/weather/${city}`);
    if(!response.ok){
      return new Error("Not found")
    }
    const data =await response.text();
    setStory(data);
  }
  catch(e){
    setStory("Error :"+e.message())
  }


  

  }

  return (
     <div className="app">
      <div className="weather-container">
        <h1 className="title">🌦️ Weather Story App</h1>

        <div className="input-box">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city..."
          />
          <button onClick={FetchStory}>Get Story</button>
        </div>

        {story && (
          <div className="story-card">
            <h2>Today's Weather Story</h2>
            <p>{story}</p>
          </div>
        )}
      </div>
    </div>
          
  );

}

export default App;

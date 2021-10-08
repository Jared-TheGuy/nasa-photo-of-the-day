import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Card from "./Components/Card";

const arr = [
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-14",
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-15",
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-16", 
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-17", 
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-18",
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-19",
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-23",
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-21",
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-22"];


function App(props) {

return (
  <div className="App" >
    {
      arr.map(it => {
        return <Card url ={it}/>
      })
    }
  </div>
);
}

export default App;

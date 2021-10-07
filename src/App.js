import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Card from "./Components/Card";

const arr = ["https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-14",
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-15",
"https://api.nasa.gov/planetary/apod?api_key=HR3I7qQr9KWx338NaHZ7YQ0fCLzBHRFNg4KghvKY&date=2012-03-16"];

const page = arr.map(el => {
  return App(el);
})

function App(props) {
  const [nasa, setNasa] = useState({data:{url: "", }});

  useEffect(() => {
    axios.get(props).then(resp => {
      setNasa(resp);
    }).catch(err => (console.log(err)));
  }, [])



return (
  <div className="App" >
    <Card {...nasa} />
  </div>
);
}

export default App;

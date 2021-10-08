import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Img from './Img';
import Title from './Title';
import Description from './Description';

export default function Card(props) {
    console.log(props);
    const [nasa, setNasa] = useState({data:{url: "", }});

  useEffect(() => {
    axios.get(props.url).then(resp => {
      setNasa(resp);
    }).catch(err => (console.log(err)));
  }, [])
    
    return (
        <div className="card">
            <Title {...nasa}/>
            <Img {...nasa}/>
            <Description {...nasa}/>
        </div>
    )
}
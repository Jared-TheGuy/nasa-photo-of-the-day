import React from 'react';
import Img from './Img';
import Title from './Title';
import Description from './Description';

export default function Card(props) {
    console.log(props);
    
    return (
        <div className="card">
            <Title {...props}/>
            <Img {...props}/>
            <Description {...props}/>
        </div>
    )
}
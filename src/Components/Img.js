import React from 'react';

export default function Img (props) {
    return (
        <img src={props.data.url} alt="test" className="photo"></img>
    )
}
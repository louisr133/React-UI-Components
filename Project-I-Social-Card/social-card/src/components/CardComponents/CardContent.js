import React from 'react';
import './Card.css';


const CardContent = () => {
    return (
        <div className = "cdContentContainer">
            <h2>Get started with React</h2>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p classname = 'reactLink'>reactjs.org</p>
        </div>
    )
}

export default CardContent;
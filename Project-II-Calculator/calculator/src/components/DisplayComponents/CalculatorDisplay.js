import React from 'react';
import './Display.css';

function Displays(prop){
    return(
        <div class="calc-display">
           <h2 class="hh">{prop.current}</h2>
        </div>
    );
}

export default Displays;
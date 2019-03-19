import React from 'react';
import './Button.css';

let actions = [{sign:'÷'}, {sign:'X'}, {sign:'-'}, {sign:'+'},{sign:'+'}]

function Action(props) {
    return(
        <div class="actions">
        {actions.map(i => (
            <button class ="Abuttons">{i.sign}</button>
       ))}
   </div>
        
    );
}


export default Action;
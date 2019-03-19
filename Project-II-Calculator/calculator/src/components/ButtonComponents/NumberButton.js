import React from 'react';
import './Button.css';


let tens = [
    {"number":7},{"number":8},{"number":9},
    {"number":4},{"number":5},{"number":6},
    {"number":1},{"number":2},{"number":3},
    {"number":0}]

// function giveNum() {
//    listOfNums.push(this.number);
// }

let currentNum = [0];


function NumberButton() {
    console.log(currentNum);
    return (
        <div class="number">
             {tens.map(i => (
                 i.number === 0 ? <button class="buttons zero" onClick={function s(){currentNum.push(i)}}>{i.number}</button> : <button class ="buttons" onClick={function s(){currentNum.push(i);}}>{i.number}</button>
            ))}
        </div>

    );
}


export default NumberButton;

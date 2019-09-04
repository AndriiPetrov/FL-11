import React from 'react';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
import './Element.css';

export function Element(props) {
    console.log(props);
    console.log(props.arr)
    console.log(props.arr.emoji)
    console.log(props.arr.emoji[0].stars)
    let stars = function Stars() {
        let stars;
        for (let i = 0; i < props.arr.emoji[0].stars; i++) {
            stars += <StarRateSharpIcon className="Element-star" fontSize="small"/>
        }
        return stars
    } 
    return (
        <div className="Element-body">
            <h1>{props.arr.emoji[0].title}</h1>
            <div>{stars}</div>
            <button className="Element-button">get ({props.arr.emoji[0].price}$)</button>
            
        </div>
    )
}
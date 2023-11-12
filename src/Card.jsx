import React from "react";

export default function Card(props){
    let labelTxt;
    if(props.item.openSpots===0){
        labelTxt="SOLD OUT";
    }else if(props.item.location=="Online"){
        labelTxt="ONLINE"
    }
    return(
        <div className="card">
            {labelTxt && <h3 className="label">{labelTxt}</h3>}
            <img src={`./${props.item.coverImg}`} alt="" className="card-image" />
            <div className="ratings">
                <img src="./Star.png" alt="" className="star" />
                <p className="card-ratings">&nbsp;{props.item.stats.rating}</p>
                <p className="votes">&nbsp;({props.item.stats.reviewCount})</p>
                <p className="location">&nbsp;• {props.item.location}</p>
            </div>
            <p className="description">{props.item.title}</p>
            <p className="costing"><b>From ${props.item.price}</b>/person</p>
        </div>
    )
}
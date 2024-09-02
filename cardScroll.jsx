import React from "react";
import image from './public/images/developer.jpg'

import './style.css'


export default function Product(props){
    return (
    

    <div className="card">
        <div className="card-image">
            <img src={image} />
        </div>
        <div className="card-content">
            <h3>{props.name}</h3>
        </div>
        <div className="footer">
            <div className="button">
                <a href={props.link} className="button">click</a>
                
            </div>
            <div className="card-date">
                <p>
                    {props.date}
                </p>
            </div>
        </div>
    </div>
    );
}



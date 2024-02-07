// import React from 'react';
import './Card.css'

const Card = ({foodName, favouriteFood}) => {

    
    return (
        <div className="card">
            <h1 className="card-title">{foodName}</h1>
            <hr className="card-title-bottom" />
            <p className="card-description">{favouriteFood}</p>
            <p className="card-description">Thanks a lot for making these kinds of videos in your valuable time. Always stay connected with your latest update. Thanks again...</p>
           <button className="btn-primary">Read More</button>
        </div>

    );
};

export default Card;
import React from "react";
const AnimalPage = (props) => {
return (
    <div>
        <h1>Marco Polo </h1>
        <div className="container className-centered">
            <div className="row">
                <div className="col">
                    <img src="https://asianmountainoutfitters.com/wp-content/uploads/2018/01/marco-polo.jpg"/> 
                </div>
                <div className="col">
                    <h2>Marco Polo Overview</h2>
                    <p>lorem Ipsum</p>
                    <h2>Marco Polo Hunting Kyrgyzstan</h2>
                        <h3>Season</h3>
                        <h3>Hunt Area</h3>
                        <h3>Hunt Condition</h3>
                        <h3>Trophy Quality</h3> 
                        <h3>The Hunt</h3>
                    <h2>Sample Itinerary</h2>
                    <h2>Price</h2>
                </div>
            </div> 
        </div> 
    </div>
  );
}

export default AnimalPage;
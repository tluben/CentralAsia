import React from "react";

const IndividualHunt = (props) => {
    return(
    <div>
    <h2>{props.Hunts.animalName} Hunt in {props.Hunts.location}</h2>
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* <h2>{props.Hunts.animalName}</h2>
                    <h3>Hunting Season</h3>
                    <ul>
                    GREG TODO HERE - I cant get this data from state, I think there is an issue with how I structured the object
                        <li>{props.Hunts.huntingSeasons[0]}</li>
                        <li>{props.Hunts.huntingSeasons[1]}</li>
                    End Greg to do
                    </ul>
                    <h3>Duration</h3>
                    <p>{props.Hunts.duration}</p>
                    <h3>Hunt Includes</h3>
                    <ul>
                        <li>{props.Hunts.included[0]}</li>
                        <li>{props.Hunts.included[1]}</li>
                    </ul>
                </div>
                <div className="col">
                    <img src={props.Hunts.gallery[0]} alt="ibex"></img>
                    <img src={props.Hunts.gallery[1]} alt="ibex"></img>
                    <img src={props.Hunts.gallery[2]} alt="ibex"></img> */}
                <h3>{props.Hunts.description}</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default IndividualHunt;
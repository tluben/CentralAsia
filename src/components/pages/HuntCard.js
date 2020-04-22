import React from "react";

//GregTODO - How do I make placeholder values so that I can pass in animal info when I render the card on the hunt types page? I think im confused by where to pass the value from state.
const HuntCard = (props) => {
    return(
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h2>{props.Hunts.animalName}</h2>
                    <p>{props.Hunts.description}</p>
                    <img src={props.Hunts.img} alt="ibex"></img>
                </div>
            </div>

        </div>
    )
}

// const HuntCard = (props) => {
//     return(
//         <div>
//             <div className="card">
//                 <div>{props.hunts}</div>
//                 fasdf
//             </div>
//             <div className="card">
//                 <div>{props.animals}</div>
//                 asdfasdf
//             </div>
//         </div>
//     )
//   };
 export default HuntCard;


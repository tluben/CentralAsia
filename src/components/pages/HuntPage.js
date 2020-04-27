import React from "react";
// import "HuntCard"import { render } from "@testing-library/react";
import HuntCard from "./HuntCard";

 const HuntPage = (props) => {
    return(
        <div className="container">
            <HuntCard Hunts={props.Hunts[0]}/>
            <HuntCard Hunts={props.Hunts[1]}/>
            <HuntCard Hunts={props.Hunts[2]}/>
           
        </div>
    )
}

export default HuntPage;

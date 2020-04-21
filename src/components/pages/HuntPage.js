import React from "react";
// import "HuntCard"import { render } from "@testing-library/react";
import HuntCard from "./HuntCard";

 const HuntPage = (props) => {
    return(
        <div className="container">
            <HuntCard Hunts={props.Hunts.argali[0]}/>
            <HuntCard Hunts={props.Hunts.argali[1]}/>
            <HuntCard Hunts={props.Hunts.redStag[0]}/>
            <HuntCard Hunts={props.Hunts.redStag[1]}/>
            <HuntCard Hunts={props.Hunts.ibex[0]}/>
            <HuntCard Hunts={props.Hunts.ibex[1]}/>
        </div>
    )
}

export default HuntPage;

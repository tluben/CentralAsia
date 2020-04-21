import React from "react";
// import "HuntCard"import { render } from "@testing-library/react";
import HuntCard from "./HuntCard";

 const HuntPage = (props) => {
    return(
        <div className="container">
            <HuntCard Hunts={props.animals}/>
            <HuntCard Hunts={props.Hunts}/>        
        </div>
    )
}
export default HuntPage;

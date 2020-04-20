import React from "react";
// import "HuntCard"import { render } from "@testing-library/react";
import HuntCard from "./HuntCard";

 const HuntPage = (props) => {
    return(
        <div className="container">
            <HuntCard />
            <HuntCard />        
        </div>
    )
}
export default HuntPage;

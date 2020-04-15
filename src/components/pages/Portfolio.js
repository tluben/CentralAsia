import React from "react";
import Card from "../Card";

const Portfolio = (props) => {
//TEDDY TODO review the props change
// function Portfolio({ , projects}) {
  return (
    <div className="container className-centered">
      <h1 className="text-center">Teddy's Portfolio</h1>
      <div className ="row">
        {/* TEDDY TODO review the props change to all lines below */}
        {props.isListView(true)}
        The value is {props.TeddyToDo1Value}
        {props.projects.map(project =>(
          <Card project={project}/>
        ))}
        <button onClick={() => props.firstStateUpdateForTeddy()}>Teddy TODO click me to change state!!!</button>

      </div>
    </div>
  );
}

export default Portfolio;

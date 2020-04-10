import React from "react";
import Card from "../Card";

function Portfolio({projects}) {
  return (
    <div className="container className-centered">
      <h1 className="text-center">Teddy's Portfolio</h1>
      <div className ="row">
        {projects.map(project =>(
          <Card project={project}/>
        ))}

      </div>
    </div>
  );
}

export default Portfolio;

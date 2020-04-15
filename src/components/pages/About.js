import React from "react";  

const About = (props) => {
  return (
    <div className="container">
      <h1>About</h1>
      <p>
        The best developer in the world
      </p>
      <a href ="https://github.com/tluben/">github</a> 
      <br></br>
      <a href ="https://github.com/tluben/">linkedin</a>
      <p> hello {props.TeddyToDo2Value}</p>

    </div>
  );
}

export default About;

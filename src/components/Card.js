import React from "react"

function Card({project}) {
    return (
        <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top" src={project.img} alt="hi" />
            <div className="card-body">
    <h5 className="card-title">{project.title}</h5>
                <p className="card-text">Description Goes Here</p>
                <a href={project.deployed} className="btn btn-primary">Deployed</a>
                <a href={project.github} className="btn btn-primary">Github</a>
            </div>
        </div>
    )
}

export default Card;
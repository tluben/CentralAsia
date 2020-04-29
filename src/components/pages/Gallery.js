import React from "react";

const Gallery = (props) => {
    return(
            <div className="container">
            {/* GREG TODO - idk why I can't get state to pass into this component*/}
                <h2>{props.gallery[0].name}</h2>
                <h1>{props.Hunts[0].trophyQuality.Argali}</h1>
            {/* Greg todo - end */}
            </div>
    )
}

export default Gallery;
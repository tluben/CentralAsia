import React from "react";
import Img from "./Img";


const Gallery = (props) => {
    return(
            <div className="container">
                <h2>{props.gallery[0].name}</h2>
                <h1>{props.Hunts[0].trophyQuality.Argali}</h1>
                {props.gallery.map(gallery =>(
                    <Img gallery={gallery}/>
                ))}
            </div>
    )
}

export default Gallery;
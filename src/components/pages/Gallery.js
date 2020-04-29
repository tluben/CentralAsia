import React from "react";
import Img from "./Img";


const Gallery = (props) => {
    return(
            <div className="container">
                <h2>{props.gallery[0].name}</h2>
                <h1>{props.Hunts[0].trophyQuality.Argali}</h1>
                {/* {props.gallery.map(gallery =>(
                    <Img gallery={gallery}/>
                ))} */}
                {props.gallery.map(gallery => {
                    return gallery.img.map(img => (
                    <img src={img} alt=""/>
                ))})}
                {/* {props.gallery.map(gallery => {
                    console.log(gallery)
                })} */}
            </div>
    )
}

export default Gallery;
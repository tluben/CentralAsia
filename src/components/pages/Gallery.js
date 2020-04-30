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
                    return gallery.tripName.map(tripName => (
                    <p>{tripName}</p>
                ))})}
                
                {props.gallery.map(gallery => {
                    return gallery.img.map(img => (
                    <img src={img} alt=""/>
                ))})}
                {/* {props.gallery.map(gallery => {
                    console.log(gallery)
                })} */}
                {/* GREG TODO -  im working on only taking in only one of the objects in gallery then mapping through that object’s array of images.*/}
                {props.gallery.img.map(img => {
                    return <img src={img} alt=""/>
                })}
                {/* END GREG TODO */}
            </div>
    )
}

export default Gallery; 
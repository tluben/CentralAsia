import React from "react";
import Img from "./Img";


const Gallery = (props) => {
    return(
            <div className="container">
                <h2>{props.gallery[0].tripName[0]}</h2>
                {/* <h1>{props.Hunts.trophyQuality.Argali}</h1> */}
                {/* {props.gallery.map(gallery =>(
                    <Img gallery={gallery}/>
                ))} */}
                {/* {props.gallery.map(gallery => {
                    return gallery.tripName.map(tripName => (
                    <p>{tripName}</p>
                ))})} */}
                {/* {props.gallery.map(gallery => {
                    return gallery.img.map(img => (
                    <img src={img} alt=""/>
                ))})} */}
                {/* {props.gallery.img.map(img => {
                    return (console.log(img))
                })} */}



                {props.gallery.map(gallery => {
                    console.log(gallery[0])
                })}

                {/* GREG TODO - I'm still not sure how im supposed to get to the second an array within an array */}
                {props.hunts2.map(hunts2 => {
                    return hunts2.animals.map(animals =>(
                        console.log(animals)
                    ))
                })}
                {/*END Greg TODO  */}


            </div>
    )
}

export default Gallery; 

// {outerArray.map(outerElement => {
//     return outerElement.innerArray.map(innerElement => (
//       <li>{innerElement} - {outerElement.id}</li>
//     ))
//   })}
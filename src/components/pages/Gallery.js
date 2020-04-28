import React from "react";

const Gallery = (props) => {
    return(
            <div className="container">
            {/* GREG TODO - idk why I can't get state to pass into this component*/}
                <h2>{props.gallery.name}</h2>
            {/* Greg todo - end */}
            </div>
    )
}

export default Gallery;
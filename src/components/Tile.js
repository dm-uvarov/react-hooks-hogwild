import React from "react";

function Tile({name, image}){
    // console.log({name, image})
    return (
        <div className='ui eight wide column'>
            <h5 key={name}> {name} </h5> 
            <img key={image} src={image} alt='Hog'/> 
        </div> 
    )
}

export default Tile
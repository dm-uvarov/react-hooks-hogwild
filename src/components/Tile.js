import React, {useState} from "react";


function Tile({name, image, id}){
    // console.log({name, image})

    const [hogData,setHogData] = useState([]);

    const handleOnClick = () => {
        
    }




    return (
        <div key = {id+name+"container"} className='ui eight wide column'>
            {/* <img key={image} src={image} alt='Hog'/> 
            <p key={name}> {name} </p>  */}
            <div key = {id+image}  className="image">
                <img onClick={()=>handleOnClick} key={image} src={image} alt='Hog'/>
            </div>
            <div key = {id+name} className="content">
                {/* <a className="header">{name}</a> */}
                <p className="header" key={name}> {name} </p>  
            </div>
        </div> 
    )
}

export default Tile
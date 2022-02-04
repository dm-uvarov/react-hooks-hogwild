import Tile from './Tile'

function RenderTiles({hogs}){
    // console.log(hogs)
    return (
        <div className = "ui grid container">
        {hogs.map(hog => {
            return (
                
                <Tile 
                    key={hog.id} 
                    name={hog.name} 
                    image={hog.image}
                />
            )
        })}
         </div> 
    )
}

export default RenderTiles
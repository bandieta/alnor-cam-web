import ShapeList from "./ShapeList";
import React, { useEffect, useState } from 'react';
import ShapesDimensionsEditor from "./ShapesDimensionsEditor";
import "./MainPanel.css"

export default function MainPanel(){

    const [selectedShape, setSelectedShape] = useState(true);

    useEffect(() => {
        // Use the data imported from the JSON file
        setSelectedShape("QDa")
      }, []);

    function handleShapeChange(e){
        setSelectedShape(e)
    }

    return <div>
        <h1>Alnor Cam</h1>
        <div class="container">
            <div class="left-menu"> 
                <ShapeList selectedShape={selectedShape} setSelectedShape={handleShapeChange}/>  
            </div>
            <div class="content"></div>
                <ShapesDimensionsEditor selectedShape={selectedShape}/>
            </div>
        </div>

}




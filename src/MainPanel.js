import ShapeList from "./ShapeList";
import React, { useEffect, useState } from 'react';

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

        <ShapeList selectedShape={selectedShape} setSelectedShape={handleShapeChange}/>  
        
    </div>
}




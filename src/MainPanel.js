import ShapeList from "./ShapeList";
import React, { useEffect, useState } from 'react';
import ShapesDimensionsEditor from "./ShapesDimensionsEditor";
import "./MainPanel.css"
import QDaTechnicalDrawing from "./QDaTechnicalDrawing";
import QDa3DDrawing from "./QDa3DDrawing";
import { slide as Menu } from 'react-burger-menu';

export default function MainPanel(){

    const [selectedShape, setSelectedShape] = useState("QDa");
    const [dimensions, setDimensions] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [rerenderKey, setRerenderKey] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const forceRerender = () => setRerenderKey(rerenderKey + 1);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
      };

    useEffect(() => {
        // Use the data imported from the JSON file
        setSelectedShape("QDa")
      }, []);

    function handleShapeChange(e){
        setSelectedShape(e)
    }

    function handleAddToBucket(e){
        setOrderList([...orderList, { shape: selectedShape, dimensions: dimensions }]);
        clearDimensions();
    }

    function clearDimensions() {
        forceRerender();
        setDimensions([]);
    }

    function handleDeleteFromBucket(index) {
        const updatedOrderList = orderList.filter((_, i) => i !== index);
        setOrderList(updatedOrderList);
      }


    return <div>
                <h1>Alnor Cam</h1>

                <div className="burger-icon" onClick={handleMenuClick}>
                </div>

                <Menu 
                    isOpen={menuOpen} 
                    onStateChange={(state) => setMenuOpen(state.isOpen)}
                >
                    <ShapeList selectedShape={selectedShape} setSelectedShape={handleShapeChange}/>
                </Menu>

                <div>

                        <QDa3DDrawing a={100} b={60} L={40} />   
                        <QDaTechnicalDrawing a={100} b={60} L={40} />

                        <ShapesDimensionsEditor selectedShape={selectedShape} dimensions={dimensions} setDimensions={setDimensions} rerenderKey={rerenderKey}/>
                        <button onClick={handleAddToBucket}> add </button>            
    


                        <p>Order List</p>
                        <ul>
                            {orderList.map((item, index) => ( 
                    
                            <li key={index} className="order-list-item">
                                Shape: {item.shape}
                        
                                    {Object.keys(item.dimensions).map((key) => (<label> {key}: {item.dimensions[key]} </label> ))}
                            
                                    <button onClick={() => handleDeleteFromBucket(index)}>x</button>
                            </li>
                            ))}
                        </ul>
             
                </div>

                                
        </div>

}




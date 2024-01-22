import ShapeList from "./ShapeList";
import React, { useEffect, useState } from 'react';
import ShapesDimensionsEditor from "./ShapesDimensionsEditor";
import "./MainPanel.css"
import QDaTechnicalDrawing from "./QDaTechnicalDrawing";
import QDa3DDrawing from "./QDa3DDrawing";
import { slide as Menu } from 'react-burger-menu';
import ShapePropsComponent from "./ShapePropsComponent";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainPanel(){

    const [selectedShape, setSelectedShape] = useState("QDa");
    const [isChemo, setIsChemo] = useState(false);
    const [systemKsztaltek, setSystemKsztaltek] = useState("Prostokatne");

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

            <Container>
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

                    <Row>
                        <Col>
                            <Row>
                            <Col>
                            <ShapesDimensionsEditor selectedShape={selectedShape} dimensions={dimensions} setDimensions={setDimensions} rerenderKey={rerenderKey}/>
                            </Col>
                            <Col>
                            <ShapePropsComponent 
                                    selectedShape={selectedShape} 
                                    isChemo={isChemo} 
                                    setIsChemo={setIsChemo}
                                    systemKsztaltek={systemKsztaltek}
                                    setSystemKsztaltek={setSystemKsztaltek}
                            >   
                            </ShapePropsComponent>
                            </Col>
                            </Row>
                            <button onClick={handleAddToBucket}> add </button>    
                        </Col>     
                        <Col>
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
                        </Col>   
                    </Row>

                    <Row>
                        <QDa3DDrawing a={100} b={60} L={40} />   
                    </Row>
                    <Row>
                        <QDaTechnicalDrawing a={100} b={60} L={40} />
                    </Row>



                </div>

            </Container>                 
            </div>

}




import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function Lights() {
    const [isOn, setIsOn] = useState(false);

    const handleButtonClick = (event) => {
    setIsOn(event.target.value === 'on');
    };

    if (isOn) {
        return (
            <div className='flower'>
                <img src="https://cdn-icons-png.flaticon.com/512/809/809015.png" alt="colorful" />     
                <div>              
                    <Button variant="outline-dark" onClick={handleButtonClick} type="submit" value="off">OFF</Button>    
                </div>                 
            </div>
        );
    } else {
        return (
            <div className='flower'>
                <img src="https://cdn-icons-png.flaticon.com/512/809/809066.png" alt="colorless" />
                <div>  
                    <Button variant="outline-primary" onClick= {handleButtonClick} type="submit" value="on">ON</Button>  
                </div>                                      
            </div>
        );
    }
}

export default Lights;

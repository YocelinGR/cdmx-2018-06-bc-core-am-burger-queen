import React from 'react';
import { Link} from 'react-router-dom';
import './FoodBar.css';


const FoodBar = () => {
    return (
    <div>
        <a className="waves-effect waves-light btn">Desayuno</a>
        <a className="waves-effect waves-light btn">Comida</a>
    </div>
    );
}

export default FoodBar;
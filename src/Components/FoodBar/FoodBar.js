import React from 'react';
import { Link} from 'react-router-dom';
import './FoodBar.css';


const FoodBar = () => {
    return (
    <div>
        <a class="waves-effect waves-light btn">Desayuno</a>
        <a class="waves-effect waves-light btn">Comida</a>
    </div>
    );
}

export default FoodBar;
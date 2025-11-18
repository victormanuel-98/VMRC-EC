// src/components/Navigation/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to="/">Chat</Link></li>
                <li><Link to="/conversaciones">Conversaciones</Link></li>
                <li><Link to="/conversacion/1">Conversación</Link></li>
                <li><Link to="/pokedex">Pokédex</Link></li>
                <li><Link to="/ajustes">Ajustes</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;

import React from "react";
import './NavBar.css';
import CartWidget from "../CartWindget/CartWidget";

const NavBar = () => {
    return(
        <header>
            <h1>Club Cannabico Capadocia</h1>
            <nav>
                <ul>
                    <li>Nosotros</li>
                    <li>Variedades</li>
                    <li>Comprar</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar
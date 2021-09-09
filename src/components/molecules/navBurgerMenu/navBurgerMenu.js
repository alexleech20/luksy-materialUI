import React from "react";
import { slide as Menu } from 'react-burger-menu';

import './burgerMenu.css';

class BurgerMenu extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Menu right width={ '100%' } disableAutoFocus >
                <a className="menu-item" href="/">Home</a>
                <a className="menu-item" href="/about">About</a>
                <a className="menu-item" href="/nike">Nike</a>
                <a className="menu-item" href="/vans">Vans</a>
                <a className="menu-item" href="/kids-shoes">Kids Shoes</a>
                <a className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
}
export default BurgerMenu;
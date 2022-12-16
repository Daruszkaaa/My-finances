import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import {useNavigate} from "react-router-dom";
import LogOut from "./LogOut.jsx";

export default function NavBar(){
    const menu = useRef(null);
    const navigate = useNavigate();

    let items = [
        {label: 'Finanse', icon: ' pi pi-credit-card'},
        {label: 'Notatki', icon: ' pi pi-list'},
        {label: 'Wyloguj', icon: ' pi pi-power-off',command: () => {navigate ("/signin")}},
    ];

    return(
        <div className="navbar-container">
            <div className="navbar-menu ">
            <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />
            <Button label="Menu" icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-haspopup aria-controls="overlay_tmenu"/>
            </div>
            </div>
);
}

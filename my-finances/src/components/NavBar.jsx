import React from "react";
import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';

export default function NavBar(){

    const navigate = useNavigate();

    let items = [
        {label: 'finance', icon: 'pi-credit-card'},
        {label: 'calendar', icon: 'pi-calendar-minus'},
        {label: 'Quit', icon: 'pi-power-off'},
    ];

    return(
        <div className="navbar-container">
            <div className="navbar-menu">
                <Menu model={items} popup ref={menu} />
                <Button label="Show" icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)}/>
            </div>
        </div>
    )
}
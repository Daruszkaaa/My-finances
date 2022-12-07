import React from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import illustraction from "../assets/free-flat-business-vector-01o9r.webp"
import NavBar from "../components/NavBar.jsx";

export default function Signin() {
    const navigate = useNavigate();

    const singinUser = async (e) => {
        e.preventDefault();

        const [email, password] = e.target.elements;
    }

        return (
            <div className="signin-container">
                <div className='signin-menu'>
                    <h1 className= "logo"><span>My</span>Finances</h1>
                </div>
                <div className="signin-form-container">
                    <h1>LOGOWANIE</h1>
                    <br/>
                    <form onSubmit={(e) => singinUser(e)} className='signin-form'>
                <span className="p-input-icon-left">
                    <i className="pi pi-envelope"/>
                    <InputText placeholder="Email"/>
                </span>
                        <br/>
                        <span className="p-input-icon-left">
            <i className="pi pi-lock"/>
                    <InputText placeholder="Hasło"/>
                    </span>
                        <br/>
                        <br />
                        <Button onClick={() => navigate('/finance')} label="Zaloguj" />
                        <br />
                        <p>Nie masz jeszcze konta?</p>
                        <Button onClick={() => navigate('/signup')} label="Załóż konto" className="p-button-link" />
                    </form>
                </div>
            </div>
        )
    }
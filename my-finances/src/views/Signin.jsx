import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Password } from 'primereact/password';
import supabase from '../services/supabase.js';
import {useRef} from "react";
import photo from '../assets/AdobeStock_509395296.jpeg'
import { Toast } from 'primereact/toast';


export default function Signin() {
    const navigate = useNavigate();

    const errorToast = useRef(null);


    const signinUser = async (e) => {
        e.preventDefault();

        const [email, password] = e.target.elements;

        let
            {data: {user, error}} = await supabase.auth.signInWithPassword({
                email: email.value,
                password: password.value,
            });

        if (error) {
            toast.current.show({severity:'error', summary: 'Error Message', detail:'Message Content'});

        }
        if (user) {
            navigate("/finance");
        }
    };


        return (
            <div className="signin">
                <div className='signin-menu'>
                    <h1 className= "logo"><span>My</span>Finances</h1>
                </div>
                <div className="signin-container">
                    <img src={photo}/>

                    <div className="signin-form-container">
                        <Toast ref={errorToast} />
                        <h2>LOGOWANIE</h2>
                    <br/>
                    <form onSubmit={(e) => signinUser(e)} className='signin-form'>
                <span className="p-input-icon-right">
                    <i className="pi pi-envelope"/>
                    <InputText placeholder="Email"/>
                </span>
                        <br/>
                        <span className="p-input-icon-left">
            <i className="pi pi-lock"/>
                  <Password placeholder="Password" toggleMask feedback={false}/>
                    </span>
                        <br/>
                        <br />
                        <Button type={"submit"}  label="Zaloguj" />
                        <br />
                        <p>Nie masz jeszcze konta?</p>
                        <Button onClick={() => navigate('/signup')} label="Załóż konto" className="p-button-link" />
                    </form>
                </div>
            </div>
            </div>
        )
    }

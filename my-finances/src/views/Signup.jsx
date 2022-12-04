import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import illustraction from "../assets/free-flat-business-vector-01o9r.webp"

    export default function Signup() {
        const navigate = useNavigate();
        const errorToast = useRef(null);

        navigate ('/');


        return(
     <div className="signup-container">
         <h2><span className="signup-logo">My</span>finances</h2>
         <img src={illustraction}/>
         <div className="signup-form-container">
             <h1>REJESTRACJA</h1>
             <br />
             <form onSubmit={(e) => signupUser(e)} className='signup-form'>
                <span className="p-input-icon-left">
                    <i className="pi pi-user" />
                    <InputText placeholder="Imię" />
                </span>
                 <span className="p-input-icon-left">
                    <i className="pi pi-envelope" />
                    <InputText placeholder="E-mail" />
                 </span>
                 <br />
                 <span className="p-input-icon-left">
                    <i className="pi pi-lock" />
                    <InputText placeholder="Hasło"/>
                 </span>
                 <span className="p-input-icon-left">
                    <i className="pi pi-lock" />
                    <InputText placeholder="Powtórz hasło"/>
                 </span>
                 <Button label="Załóż konto" />
                 <br />
                 <Button onClick={() => navigate('/signin')} label="Masz już konto?" className="p-button-link" />
             </form>
         </div>
     </div>
    )
}
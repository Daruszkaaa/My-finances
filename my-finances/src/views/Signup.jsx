import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {Password} from "primereact/password";
import { Toast } from 'primereact/toast';
import supabase from "../services/supabase.js";
import photo from '../assets/AdobeStock_509395296.jpeg'

export default function Signup() {

    const navigate = useNavigate();
    const errorToast = useRef(null);

    const signupUser = async (e) => {
        e.preventDefault();

const [ ,email, password, repassword ] = e.target.elements;
console.log(password.value, repassword.value)

if (password.value !== repassword.value) {
    errorToast.current.show({severity: 'error', summary: 'Error', detail: 'Hasła muszą być takie same'});
    return;
}

let { data: { user, error }} = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
});


if (error) {
    errorToast.current.show({severity: 'error', summary: 'Error', detail: 'An error occured. Please try again later.'});
    return;
}

navigate('/finance');

}


        return(

     <div className="signup">
         <div className='signup-menu'>
         <h1 className= "logo"><span>My</span>Finances</h1>
     </div>
         <div className="signup-container">
<img src={photo}/>

         <div className="signup-form-container">
             <Toast ref={errorToast} />
             <h2>REJESTRACJA</h2>
             <br />
             <form onSubmit={(e) => signupUser(e)} className='signup-form'>
                 {/*IMIĘ*/}
                 <span className="p-input-icon-right">
                    <i className="pi pi-user" />
                    <InputText placeholder="Imię" />
                </span>
                 {/*EMAIL*/}
                 <span className="p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText placeholder="E-mail" required/>

                 </span>
                 <br />
                 {/*HASŁO*/}
                 <span className="p-input-icon-left">
                    <i className="pi pi-lock" />
                  <Password placeholder="Hasło" toggleMask feedback={false} required/>
                 </span>
                 {/*POWTÓRZ HASŁO */}
                 <span className="p-input-icon-left">
                    <i className="pi pi-lock" />
                     <Password placeholder="Powtórz hasło" toggleMask feedback={false} required/>
                 </span>
                 <br/>
                 <Button type={"submit"} label="Załóż konto" />
                 <br />
                 <Button onClick={() => navigate('/signin')} label="Masz już konto?" className="p-button-link" />
             </form>
         </div>
         </div>
     </div>
    )
}
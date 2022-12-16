import NavBar from "../components/NavBar.jsx";
import ProfitAndExpenses from "../components/ProfitAndExpenses.jsx";
import Diagram from "../components/Chart.jsx"
import {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import supabase from "../services/supabase.js";


    export default function Finance(){

        const navigate = useNavigate();
        const [isLogged, setIsLogged] = useState(false);


        useEffect(() => {

            const isUserLogged = async() => {
                const { data: { user } } = await supabase.auth.getUser();

                if (!user) {
                    navigate('/signin');
                    return;
                }
                setIsLogged(true);
            }

            isUserLogged();

        }, []);


        return(
            <>
                {
                    isLogged &&(
        <div className= 'finance'>
        <div className='finance-menu'>
         <NavBar />
            <h1 className= "logo"><span>My</span>Finances</h1>
            </div>
            <div className='finance-container'>
                <div className="finance-chart">
                 <Diagram/>
            </div>
                <div className="finance-calculations">
                     <ProfitAndExpenses/>
                 </div>
                 </div>
            </div>
                )
                }
            </>
        );
}

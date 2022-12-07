import React from "react";
import NavBar from "../components/NavBar.jsx";
import DoughnutChart from "../components/DoughnutChart.jsx";
import Profit from "../components/Profit.jsx";
import Expense from "../components/Expense.jsx";
import Balance from "../components/Balance";

export default function Finance(){
    return(
        <div className="finance-container">
         <div className='finance-menu'>
         <NavBar />
            <h1 className= "logo"><span>My</span>Finances</h1>
         </div>
             <div className="finance-box">
                 <DoughnutChart/>
             </div>
                 <div className="finance-calculations">
                 <Profit />
                 <Balance />
                 <Expense />
                     </div>

        </div>
    )
}

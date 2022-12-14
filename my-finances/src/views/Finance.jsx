import NavBar from "../components/NavBar.jsx";
import ProfitAndExpenses from "../components/ProfitAndExpenses.jsx";
import Diagram from "../components/Chart.jsx"

    export default function Finance(){

    return(
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

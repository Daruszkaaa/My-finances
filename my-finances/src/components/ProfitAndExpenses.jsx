import {useState} from "react";
import {Button} from "primereact/button";
import {InputNumber} from "primereact/inputnumber";

export default function ProfitAndExpenses() {

const [inputValue, setInputValue] = useState(0);

const [profit, setProfit] = useState(0);
const addProfit =()=>{
    setProfit((prev) => prev + inputValue);
}

const [expenses, setExpenses] = useState(0);
const addExpenses = () => {
    setExpenses((prev) => prev - inputValue);
}
    const balance = (profit + expenses);

    return(
        <div>

            <div className="balance">
            <h2> BILANS: {balance} zł </h2>
            </div>
            <div className="profit-box">
             <h3>Przychody: {profit} zł </h3>
            </div>
            <div className="expenses-box">
                <h3>Wydatki: {expenses} zł </h3>
            </div>
            <div className="col-12 md:col-4 profitexpenses-box">
                <div className="p-inputgroup">
                    <Button onClick={addProfit} icon="pi pi-plus" className="p-button-success"/>
                    <InputNumber inputId="inputnumber"   value={inputValue} onChange={(e) => setInputValue(e.value)} mode="decimal" minFractionDigits={1} maxFractionDigits={9} />
                    <Button onClick={addExpenses} icon="pi pi-minus" className="p-button-danger"/>
                </div>
            </div>
        </div>
    )
}



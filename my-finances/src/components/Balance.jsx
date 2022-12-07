import Expense from "./Expense.jsx";
import Profit from "./Profit.jsx";
import { InputText } from 'primereact/inputtext';

export default function Balance(){

return(
    <div>
        <span className="p-input-icon-left">
                    <i className="pi pi-money-bill" />
                    <InputText  />
                </span>
    </div>
)
}
import React, { useRef } from 'react';
import {useNavigate} from "react-router-dom";
import { Chart } from 'primereact/chart';
import { useState} from "react";
import 'primeicons/primeicons.css';


export default function DoughnutChart(){
    const navigate = useNavigate();

    const [options] = useState({
        labels: ['Jedzenie', 'Opłaty', 'Transport', 'Zdrowie','Zabawa','Jedzenie poza domem','Przybory toaletowe','Inne'],
        datasets: [
            {
                data: [300, 50, 100, 70, 60, 90, 60, 80],
                backgroundColor: [
                    '#e75e36',
                    "#e38a21",
                    "#eac54e",
                    "#f2e989",
                    "#f8efb8",
                    "#411311",
                    "#6a2f23",
                    "#9c5937",
                    "#d48f4c",
                ],
                hoverBackgroundColor: [
                    '#e75e36',
                    "#e38a21",
                    "#eac54e",
                    "#f2e989",
                    "#f8efb8",
                    "#411311",
                    "#6a2f23",
                    "#9c5937",
                    "#d48f4c",
                ]
            }]
    });

    return (
        <div className="doughnut">
            <Chart type="doughnut" data={options}   />
        </div>
    )
}
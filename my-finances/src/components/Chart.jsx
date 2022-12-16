import React, { useEffect, useRef, useState } from "react";
import { Chart } from "primereact/chart";
import {InputNumber} from "primereact/inputnumber";
import supabase from "../services/supabase.js";

export default function Diagram () {

    const userFinance = async () => {
        let {data: user_id,} = await supabase
            .from('user_id')
            .select("*")
            .eq('id', user_id);
    }


        const [inputExpensesValue, setInputExpensesValue] = useState('')
        const [activeLabel, setActiveLabel] = useState(null);
        const [chartData, setChartData] = useState({
            labels: [
                "Zakupy spożywcze",
                "Opłaty",
                "Transport",
                "Zdrowie",
                "Zabawa",
                "Jedzenie poza domem",
                "Przybory toaletowe",
                "Inne",
            ],
            datasets: [
                {
                    data: [1, 0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: ['#e75e36',
                        "#e38a21",
                        "#eac54e",
                        "#f2e989",
                        "#f8efb8",
                        "#411311",
                        "#6a2f23",
                        "#9c5937",
                        "#d48f4c",],
                    hoverBackgroundColor: ['#e75e36',
                        "#e38a21",
                        "#eac54e",
                        "#f2e989",
                        "#f8efb8",
                        "#411311",
                        "#6a2f23",
                        "#9c5937",
                        "#d48f4c",],
                },
            ],
        });

        const addValue = () => {
            setChartData({
                ...chartData,
                datasets: [
                    {
                        ...chartData.datasets[0],
                        data: chartData.datasets[0].data.map((el, id) => {
                            if (id === activeLabel) return el + inputExpensesValue;
                            else return el;
                        }),
                    },
                ],
            });
        };

    useEffect(() => {
        console.log(chartData);
    }, [chartData]);
    return (
        <div className="card">
            <Chart
                type="doughnut"
                data={chartData}
                style={{ position: "relative", width: "40%" }}
            />
            <div>
                <div className="expenses-box">
                <ul>
                    {chartData.labels.map((el, i) => {
                        return (
                            <li key={el}>
                                <label htmlFor={el}>{el}</label>
                                <input
                                    type="radio"
                                    id={el}
                                    name="donut"
                                    value={i}
                                    onChange={() => setActiveLabel(i)}
                                />
                            </li>
                        );
                    })}
                </ul>
            <div className="col-12 md:col-4 calculation-box">
                <div className="p-inputgroup">
                        <span className="p-float-label">
                            <InputNumber inputId="inputnumber" value={inputExpensesValue} onChange={(e) => setInputExpensesValue(e.value)}minFractionDigits={1} maxFractionDigits={9} />
                            <label htmlFor="inputnumber">Koszt wydatku:</label>
                        </span>
                    <span className="p-inputgroup-addon">zł</span>
                </div>
                </div>
            <br/>
                <div style={{ display: "flex", gap: "20px" }}>
                    <button onClick={addValue}>Dodaj</button>
                </div>
                </div>
            </div>
        </div>
    );
}
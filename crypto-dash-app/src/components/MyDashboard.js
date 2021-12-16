//citation: https://github.com/Sanjeev-Thiyagarajan/cryptocurrency-tracker/blob/master/
import React, { createContext, useState, useEffect } from "react";

export const MyDashboardContext = createContext();

export const MyDashboardContextProvider = (props) => {

    const [dashboard, setDashboard] = useState(
        localStorage.getItem("dashboard")?.split(",") || [
            "bitcoin",
            "ethereum",
            "ripple",
            "litecoin",
        ]
    );

    useEffect(() => {
        localStorage.setItem("dashboard", dashboard);
    }, [dashboard]);

    const deleteCoin = (coin) => {
        setDashboard(
            dashboard.filter((el) => {
                return el !== coin;
            })
        );
    };

    const addCoin = (coin) => {
        if (dashboard.indexOf(coin) === -1) {
            setDashboard([...dashboard, coin]);
        }
    };

    return (
        <MyDashboardContext.Provider value={{ dashboard, deleteCoin, addCoin }}>
        {props.children}
        </MyDashboardContext.Provider>
    );
};
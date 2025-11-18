// src/components/Layout/AppLayout.jsx
import React from "react";
import NavBar from "../Navigation/NavBar";

const AppLayout = ({ children }) => {
    return (
        <div className="app-layout">
            <header className="app-header">
                <h1>Mi Aplicación</h1>
                <NavBar />
            </header>
            <main className="app-content">{children}</main>
        </div>
    );
};

export default AppLayout;

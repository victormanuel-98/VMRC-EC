// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import NavBar from "./components/Navigation/NavBar";
import SessionIndicator from "./components/Auth/SessionIndicator";

import ChatView from "./components/Views/ChatView";
import ConversationsView from "./components/Views/ConversationsView";
import ConversationView from "./components/Views/ConversationView";
import PokedexView from "./components/Views/PokedexView";
import SettingsView from "./components/Views/SettingsView";
import LoginView from "./components/Auth/LoginView";

import { getSession } from "./services/storage";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Al cargar la app, resetear sesión
    useEffect(() => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("sessionTime");
        setIsLoggedIn(false);
    }, []);

    // Mantener sincronizado el estado con localStorage
    useEffect(() => {
        const interval = setInterval(() => {
            const current = getSession();
            if (current !== isLoggedIn) setIsLoggedIn(current);
        }, 500);
        return () => clearInterval(interval);
    }, [isLoggedIn]);

    return (
        <Router>
            <AppLayout>
                {/* Indicador de sesión y botón logout */}
                <SessionIndicator onLogout={() => setIsLoggedIn(false)} />

                {/* Navbar solo visible si hay sesión */}
                {isLoggedIn && <NavBar />}

                <Routes>
                    {/* Vista pública */}
                    <Route
                        path="/login"
                        element={<LoginView onLogin={() => setIsLoggedIn(true)} />}
                    />

                    {/* Rutas protegidas */}
                    <Route
                        path="/"
                        element={isLoggedIn ? <ChatView /> : <Navigate to="/login" replace />}
                    />
                    <Route
                        path="/conversaciones"
                        element={isLoggedIn ? <ConversationsView /> : <Navigate to="/login" replace />}
                    />
                    <Route
                        path="/conversacion/:id"
                        element={isLoggedIn ? <ConversationView /> : <Navigate to="/login" replace />}
                    />
                    <Route
                        path="/pokedex"
                        element={isLoggedIn ? <PokedexView /> : <Navigate to="/login" replace />}
                    />
                    <Route
                        path="/ajustes"
                        element={isLoggedIn ? <SettingsView /> : <Navigate to="/login" replace />}
                    />
                </Routes>
            </AppLayout>
        </Router>
    );
};

export default App;

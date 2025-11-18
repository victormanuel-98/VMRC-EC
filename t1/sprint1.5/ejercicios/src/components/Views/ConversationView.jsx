// src/components/Views/ConversationView.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ConversationView = () => {
    const { id } = useParams(); // lee el parámetro de ruta
    return (
        <div>
            <h1>Conversación {id}</h1>
            <p>Detalle de la conversación con historial de mensajes.</p>
        </div>
    );
};

export default ConversationView;

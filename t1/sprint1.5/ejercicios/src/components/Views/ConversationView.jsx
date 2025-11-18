// src/components/Views/ConversationView.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ConversationView = () => {
    const { id } = useParams(); // para mostrar el id de la conversación
    return (
        <div>
            <h1>Conversación {id}</h1>
            <p>Detalle de la conversación con historial de mensajes.</p>
        </div>
    );
};

export default ConversationView;

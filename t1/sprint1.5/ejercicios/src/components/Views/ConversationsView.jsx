import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ConversationsView = () => {
    const scrollRef = useRef(null);
    const [conversations, setConversations] = useState([]);
    const navigate = useNavigate();

    // Cargar conversaciones guardadas
    useEffect(() => {
        const all = JSON.parse(localStorage.getItem("all_conversations") || "[]");
        setConversations(all);
    }, []);

    // Restaurar scroll
    useEffect(() => {
        const savedScroll = sessionStorage.getItem("conversationsScroll");
        if (savedScroll && scrollRef.current) {
            scrollRef.current.scrollTop = Number(savedScroll);
        }
    }, []);

    const handleScroll = () => {
        if (scrollRef.current) {
            sessionStorage.setItem("conversationsScroll", scrollRef.current.scrollTop);
        }
    };

    const showConversation = (conv) => {
        // Guardar la conversación seleccionada
        localStorage.setItem("chat_messages", JSON.stringify(conv));
        // Navegar a ChatView
        navigate("/"); // ChatView está en "/"
    };

    const deleteConversation = (index) => {
        const newConvs = conversations.filter((_, i) => i !== index);
        setConversations(newConvs);
        localStorage.setItem("all_conversations", JSON.stringify(newConvs));
    };

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Conversaciones</h1>
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                style={{
                    height: "400px",
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    padding: "0.5rem",
                    backgroundColor: "#f9f9f9"
                }}
            >
                {conversations.length === 0 && (
                    <p style={{ color: "#666" }}>No hay conversaciones guardadas.</p>
                )}

                {conversations.map((conv, idx) => (
                    <div
                        key={idx}
                        style={{
                            padding: "0.5rem",
                            marginBottom: "0.5rem",
                            borderRadius: "5px",
                            backgroundColor: "#2da1b0ff",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <span><strong>Conversación {idx + 1}</strong></span>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <button
                                onClick={() => showConversation(conv)}
                                style={{ padding: "0.3rem 0.5rem" }}
                            >
                                Mostrar
                            </button>
                            <button
                                onClick={() => deleteConversation(idx)}
                                style={{ padding: "0.3rem 0.5rem" }}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConversationsView;

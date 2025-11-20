// src/components/Views/ConversationView.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ConversationView = () => {
    const { id } = useParams(); // lee el parámetro de ruta
    const scrollRef = useRef(null);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    const [conversation, setConversation] = useState(null);

    useEffect(() => {
        const all = JSON.parse(localStorage.getItem("all_conversations") || "[]");
        const conv = all.find(c => c.id === Number(id) || c.id === id);
        if (conv) {
            setConversation(conv);
        } else {
            // Si no se encuentra, volver a la lista de conversaciones
            navigate("/conversaciones");
        }
    }, [id, navigate]);

    // Restaurar scroll
    useEffect(() => {
        if (scrollRef.current) {
            const savedScroll = sessionStorage.getItem(`conversation_scroll_${id}`);
            if (savedScroll) scrollRef.current.scrollTop = Number(savedScroll);
            else messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [conversation, id]);

    const handleScroll = () => {
        if (scrollRef.current) {
            sessionStorage.setItem(`conversation_scroll_${id}`, scrollRef.current.scrollTop);
        }
    };

    if (!conversation) return null;

    return (
        <div style={{ padding: "1rem" }}>
            <h1>{conversation.name || `Conversación ${id}`}</h1>
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                style={{
                    border: "1px solid #aaa",
                    padding: "1rem",
                    borderRadius: "5px",
                    height: "300px",
                    overflowY: "auto",
                    backgroundColor: "#f0f0f0",
                }}
            >
                {conversation.messages.length === 0 && (
                    <p style={{ opacity: 0.6 }}>Sin mensajes en esta conversación.</p>
                )}

                {conversation.messages.map((msg, i) => (
                    <p key={i}>
                        <strong>{msg.role === "user" ? "Tú:" : "Qwen3:"}</strong> {msg.content}
                    </p>
                ))}

                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default ConversationView;

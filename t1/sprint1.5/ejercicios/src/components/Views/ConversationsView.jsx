import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ConversationsView = ({ setConversationId }) => {
    const scrollRef = useRef(null);
    const [conversations, setConversations] = useState([]);
    const navigate = useNavigate();

    const fetchConversations = async () => {
        try {
            const res = await axios.get("http://localhost:3001/conversations");
            setConversations(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchConversations();
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

    const showConversation = (id) => {
        setConversationId(id);
        navigate("/"); // volver al chat
    };

    const deleteConversation = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/conversations/${id}`);
            fetchConversations();
        } catch (err) {
            console.error(err);
        }
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
                {conversations.length === 0 && <p>No hay conversaciones guardadas.</p>}

                {conversations.map((conv) => (
                    <div
                        key={conv.id}
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
                        <span><strong>{conv.name}</strong></span>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <button onClick={() => showConversation(conv.id)}>Mostrar</button>
                            <button onClick={() => deleteConversation(conv.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConversationsView;

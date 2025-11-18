import React, { useEffect, useRef } from "react";

const ChatView = () => {
    const inputRef = useRef(null);

    // Al entrar en Chat, el foco va al input
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Chat</h1>
            <input
                ref={inputRef}
                type="text"
                placeholder="Escribe un mensaje..."
                style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
            />
            <div style={{ marginTop: "1rem" }}>
                {/* Aquí irían los mensajes */}
                <p>Simulación de mensajes...</p>
            </div>
        </div>
    );
};

export default ChatView;

import React, { useEffect, useRef, useState } from "react";
import { askAI } from "../../services/aiService";

const ChatView = () => {
    const inputRef = useRef(null);
    const messagesEndRef = useRef(null);

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");

    // Cargar mensajes guardados al montar
    useEffect(() => {
        const saved = localStorage.getItem("chat_messages");
        if (saved) setMessages(JSON.parse(saved));
        inputRef.current?.focus();

        // Escuchar cambios de localStorage de otras pestañas
        const handleStorage = (event) => {
            if (event.key === "chat_messages" && event.newValue) {
                const updated = JSON.parse(event.newValue);
                setMessages(updated);
            }
        };
        window.addEventListener("storage", handleStorage);

        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    // Guardar mensajes solo cuando hay cambios reales
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem("chat_messages", JSON.stringify(messages));
        }
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const sendMessage = async () => {
        const text = input.trim();
        if (!text) return;

        const newUserMessage = { role: "user", content: text };
        setMessages(prev => [...prev, newUserMessage]);
        setInput("");
        setLoading(true);

        try {
            const aiResponse = await askAI(text);
            setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
        } catch (err) {
            setMessages(prev => [...prev, { role: "assistant", content: "❌ Error: no se pudo conectar con la IA" }]);
        } finally {
            setLoading(false);
        }
    };

    const startNewConversation = () => {
        if (messages.length > 0) {
            const all = JSON.parse(localStorage.getItem("all_conversations") || "[]");
            all.push(messages);
            localStorage.setItem("all_conversations", JSON.stringify(all));
        }
        setMessages([]);          // limpiar solo el estado actual
        setInput("");
        inputRef.current?.focus();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") sendMessage();
    };

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Chat</h1>

            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{ flex: 1, padding: "0.5rem", fontSize: "1rem" }}
                />
                <button onClick={sendMessage} style={{ padding: "0.5rem 1rem" }}>Enviar</button>
                <button onClick={startNewConversation} style={{ padding: "0.5rem 1rem" }}>Nueva conversación</button>
            </div>

            <div
                style={{
                    border: "1px solid #aaa",
                    padding: "1rem",
                    borderRadius: "5px",
                    height: "300px",
                    overflowY: "auto",
                }}
            >
                {messages.length === 0 && (
                    <p style={{ opacity: 0.6 }}>Sin mensajes aún...</p>
                )}

                {messages.map((msg, i) => (
                    <p key={i}>
                        <strong>{msg.role === "user" ? "Tú:" : "Qwen3:"}</strong> {msg.content}
                    </p>
                ))}

                {loading && <p><em>Qwen3 está escribiendo...</em></p>}

                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default ChatView;

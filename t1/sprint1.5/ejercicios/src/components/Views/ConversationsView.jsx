import React, { useEffect, useRef } from "react";

const ConversationsView = () => {
    const scrollRef = useRef(null);

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

    // Simulación de lista larga
    const conversations = Array.from({ length: 50 }, (_, i) => `Conversación ${i + 1}`);

    return (
        <div>
            <h1>Conversaciones</h1>
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                style={{ height: "400px", overflowY: "auto", border: "1px solid #ccc", padding: "0.5rem" }}
            >
                {conversations.map((conv, idx) => (
                    <div key={idx} style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
                        {conv}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConversationsView;

import React, { useState } from 'react'

function MessageInput() {
    const [message, setMessage] = useState('')

    const handleSend = () => {
        if (message.trim()) {
            alert(`Mensaje enviado: ${message}`)
            setMessage('')
        }
    }

    return (
        <div className="message-input">
            <input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
    )
}

export default MessageInput

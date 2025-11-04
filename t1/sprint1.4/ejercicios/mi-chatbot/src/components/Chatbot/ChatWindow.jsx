import React, { useState, useRef, useEffect } from 'react'
import MessageList from './MessageList.jsx'
import MessageInput from './MessageInput.jsx'
import '../../styles/chatbot.css'

function ChatWindow() {
const [messages, setMessages] = useState([
{ sender: 'bot', text: 'Bienvenido, ¿en qué puedo ayudarte?' }
])
const messageListRef = useRef(null)

const scrollToBottom = () => {  
    if (messageListRef.current) {  
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight  
    }  
}  

useEffect(() => {  
    scrollToBottom()  
}, [messages])  

const handleSendMessage = (text) => {  
    if (!text.trim()) return  

    setMessages((prev) => [  
        ...prev,  
        { sender: 'user', text },  
        { sender: 'bot', text: 'Pensando...' }  
    ])  

    setTimeout(() => {  
        setMessages((prev) => {  
            const updated = [...prev]  
            updated.pop() // eliminar "Pensando..."  
            updated.push({ sender: 'bot', text: generarRespuestaSimulada(text) })  
            return updated  
        })  
    }, 1500)  
}  

const generarRespuestaSimulada = (userMessage) => {  
    const respuestas = [  
        'Interesante, cuéntame más.',  
        'Puedo ayudarte con eso.',  
        'Déjame pensar... vale, creo que puedo responderte.',  
        'Buena pregunta, veamos...',  
        'No estoy seguro, pero suena intrigante.'  
    ]  
    return respuestas[Math.floor(Math.random() * respuestas.length)]  
}  

return (  
    <div className="chat-window">  
        <MessageList messages={messages} ref={messageListRef} />  
        <MessageInput onSendMessage={handleSendMessage} />  
    </div>  
)  

}

export default ChatWindow

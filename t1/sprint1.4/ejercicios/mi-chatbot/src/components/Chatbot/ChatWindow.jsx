import React, { useState, useRef, useEffect } from 'react'
import MessageList from './MessageList.jsx'
import MessageInput from './MessageInput.jsx'
import { getPokemonData } from '../../services/pokeapi.js'
import '../../styles/chatbot.css'

function ChatWindow() {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Bienvenido, ¿en qué puedo ayudarte?' }
    ])
    const [isThinking, setIsThinking] = useState(false)
    const messageListRef = useRef(null)

    // Función para autoscroll
    const scrollToBottom = () => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSendMessage = async (text) => {
        if (!text.trim()) return

        // Añadir mensaje del usuario y el indicador de “pensando…”
        setMessages((prev) => [...prev, { sender: 'user', text }, { sender: 'bot', text: 'Pensando...' }])
        setIsThinking(true)

        try {
            // Intentar obtener datos de Pokémon
            const pokemon = await getPokemonData(text.toLowerCase())

            setMessages((prev) => {
                const updated = [...prev]
                // Eliminar "Pensando..."
                updated.pop()
                if (pokemon) {
                    updated.push({
                        sender: 'bot',
                        text: `Nombre: ${pokemon.name}\nNúmero: ${pokemon.id}\nTipo: ${pokemon.type}`,
                        image: pokemon.sprite
                    })
                } else {
                    updated.push({
                        sender: 'bot',
                        text: 'No encuentro ese Pokémon.'
                    })
                }
                return updated
            })
        } catch (error) {
            setMessages((prev) => {
                const updated = [...prev]
                updated.pop()
                updated.push({
                    sender: 'bot',
                    text: '¿Seguro que eso es un Pokémon?.'
                })
                return updated
            })
        } finally {
            setIsThinking(false)
        }
    }

    return (
        <div className="chat-window">
            <MessageList messages={messages} ref={messageListRef} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    )
}

export default ChatWindow

import './App.css'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="app">
      <h1>🤖 Bienvenido a Mi Chatbot</h1>
      <p>Tu asistente inteligente empieza aquí 🚀</p>

      {/* Zona del chatbot */}
      <Chatbot />
    </div>
  )
}

export default App

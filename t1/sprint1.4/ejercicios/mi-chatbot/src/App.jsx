import './App.css'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="app">
      {/* Presentación del chatbot */}
      <div className="chatbot-header">
        <img
          src="/assets/shodan/shodan.gif"
          alt="SHODAN"
          className="chatbot-avatar"
        />
        <h1>S.H.O.D.A.N.</h1>
        <p className="slogan">Tu confiable asistente personal para ayudarte en todo lo que necesites</p>
      </div>

      {/* Zona del chatbot */}
      <Chatbot />
    </div>
  )
}

export default App

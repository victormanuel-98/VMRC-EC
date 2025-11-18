// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import ChatView from "./components/Views/ChatView";
import ConversationsView from "./components/Views/ConversationsView";
import ConversationView from "./components/Views/ConversationView";
import PokedexView from "./components/Views/PokedexView";
import SettingsView from "./components/Views/SettingsView";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<ChatView />} />
          <Route path="/conversaciones" element={<ConversationsView />} />
          <Route path="/conversacion/:id" element={<ConversationView />} />
          <Route path="/pokedex" element={<PokedexView />} />
          <Route path="/ajustes" element={<SettingsView />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;

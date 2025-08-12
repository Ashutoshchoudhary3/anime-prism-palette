import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- Add this import
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  // Wrap your App component like this
  <BrowserRouter basename="/anime-prism-palette/">
    <App />
  </BrowserRouter>
);
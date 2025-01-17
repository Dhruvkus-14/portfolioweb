import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';


const link = document.createElement("link");
link.rel = "icon";
link.href = "/assets/favicon.png"; // Absolute path
document.head.appendChild(link);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

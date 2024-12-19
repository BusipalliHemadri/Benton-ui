
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Toaster } from './components/ui/toaster';
import { FrappeProvider } from 'frappe-react-sdk';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FrappeProvider url="https://erp-dev.leremitt.com/">
      <App />
      <Toaster />
    </FrappeProvider>
  </StrictMode>
);

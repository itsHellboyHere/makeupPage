import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppProvider } from './DarkModeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
 <AppProvider>
 <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <App />
      </AppProvider>
   
  </React.StrictMode>,
)

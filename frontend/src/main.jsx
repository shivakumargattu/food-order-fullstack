
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './components/context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
   
      <BrowserRouter>
      <StoreContextProvider>
      <App />
      </StoreContextProvider>
      
  
      </BrowserRouter>
 
)

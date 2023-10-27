import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css"

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>
  
)

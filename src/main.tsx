import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 套件引用
import 'bootstrap/dist/css/bootstrap.css'

// scss
import './styles/main.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

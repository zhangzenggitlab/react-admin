import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'
console.log(11)
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

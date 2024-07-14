import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import ReactDOM from 'react-dom'
import AppRouter from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

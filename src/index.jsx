// import React from 'react'
// import ReactDOM from 'react-dom' //permite que funcione realmente en el navegador
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(<App/>)
// ReactDOM.render(<App/>,document.getElementById('root'))


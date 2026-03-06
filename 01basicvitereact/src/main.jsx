
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

let username = 'prem';

const element = React.createElement(
  'a',
  { href: 'http://google.com', style: { color: "#1a1a1a" } },
  'element made by me',

)

createRoot(document.getElementById('root')).render(

  element

)

import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

function App() {
  

  return (
    <div style={{background: "hsl(var(--background))", color: "hsl(var(--foreground))", minHeight: "100vh"}}>
    
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

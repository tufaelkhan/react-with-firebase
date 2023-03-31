import { useState } from 'react'
import './App.css'
import Blog from './component/Blog/Blog'
import Header from './component/Header/Header'


function App() {

  return (
    <div className="App">
    <Header></Header>
    <Blog></Blog>
    </div>
  )
}

export default App

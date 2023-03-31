import { useState } from 'react'
import './App.css'
import Blog from './component/Blog/Blog'
import Header from './component/Header/Header'
import Question from './component/question/Question'


function App() {

  return (
    <div className="App">
    <Header></Header>
    <Blog></Blog>
    <Question></Question>
    </div>
  )
}

export default App

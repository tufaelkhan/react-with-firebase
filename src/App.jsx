import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Blog from './component/Blog/Blog'
import Header from './component/Header/Header'
import Question from './component/question/Question'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <div className="App">
    <Header></Header>
    <Blog></Blog>
    <Question></Question>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App

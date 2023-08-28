import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Book from './components/Book.jsx'
import Books from './components/Books.jsx'
import BookDetials from './components/BookDetials.jsx'
import LoadingSpinner from './components/LoadingSpinner.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:id',
        element: <BookDetials></BookDetials>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'loader',
        element: <LoadingSpinner></LoadingSpinner>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}></RouterProvider>

)

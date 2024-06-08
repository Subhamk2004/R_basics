import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
// this root element is present in index.html file
// creating a virtual DOM
// jsx is just like js, it's your choice how you write jsx or js .


//but as we are currently creating webpages in vite we have to use only jsx,
// for html with js, and normal js file for pure js;

// this comment is for testing

// if we have created the same react app by using creat-react-app, this would have
// created no effect or errors

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

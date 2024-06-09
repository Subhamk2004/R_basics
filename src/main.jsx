import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
// this root element is present in index.html file
// creating a virtual DOM

// reconcilitiation is an algorithm which differs two trees to look for changes and then
// make changes which have changes and not the whole dom, this is what we call
// virtual dom

// we should use keys while iterating through lists or arrays, for fast, stable,
// predictable, unique operations


//createRoot create a dom like structure, compares the dom we created and just makes
// important changes only and not the whole dom
// and this is virtual dom

// jsx is just like js, it's your choice how you write jsx or js .


//but as we are currently creating webpages in vite we have to use only jsx,
// for html with js, and normal js file for pure js;

// this comment is for testing

// if we have created the same react app by using creat-react-app, this would have
// created no effect or errors

function Custom_fun(){
    return(
        <div>
            <h1>This is a function which is inside the main.jsx file</h1>
            <h2>It is rendered along with the imported App function,after it</h2>
        </div>
    )
}


root.render(
    Custom_fun()
)


root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)


// as React is just (js), so it can also render the function with the normal syntax,
// but only the last root.render will work as it overwrites the first ones ,
// so we will not see the output of the Custom_fun() function

// but don't render functions as normal js functions, render them as html elements

// here the App is imported from App.jsx but we can define functions here also
// and then render that function by out root.render,
// I have already done this check above


// react doesn't understand our html inside js syntax, so what we return in the functions
// is converted into the syntax as we made for elements in custom_react, so react converts

// the returned values from function in tree like structure and then render it to display
// on webpage, just as we did in custom_react


// it is not necessary to write the functions to be rendered as in html elements like
// <App/>
// we can also render functions as
// custom_fun(), see above ;

// as at the end of the day, the function passed to render method of React will convert it
// to an object like structure to understand and render it,
// so let's pass an literal object to it,

const React_element = {
    type:'a',
    props:{
        href:'https://subhamk2004.github.io/Subham_Portfolio/',
        target:'_blank'
    },
    children:`Click me to visit Subham Kumar's portfolio`
}

// root.render(
//     React_element
// )

// tha above will for sure create a problem as react might understand different types of
// object and their different definitions, or it might create different syntax or
// structure for the objects it render

// when I created a custom render function I myself was expecting something inn the input
// and my function has a different approach to render, so just like that the
// react's default render function might also have different approach

// if we made our custom object's syntax just as what react expects, and then I pass
// that custom object to the render function then it will surely render that element


// but what if we just pass a literal element, let's see

let Custom_element = (
    <a href='https://subhamk2004.github.io/Subham_Portfolio/'
     target="_blank">Visit SKR's portfolio</a>
)

root.render(
    Custom_element
)
// now the above will work perfectly

// now let's again call our <App/> function to run that only

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
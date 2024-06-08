function Log_name() {
    return(
        <h1>Hello, Subham Kumar</h1>
    )
}

export default Log_name;

// now we have to render it, and it can be done either by sending it to the app.jsx,
// then that app.jsx will export it to the main.jsx where main.jsx will render both the
// app.jsx and new.js in our webpage


// to send it to app.jsx first we have to import the new.js, and then return that
// as an html element in the return of app.jsx;

// remember this new.jsx is a component, so congrats I created a component in react

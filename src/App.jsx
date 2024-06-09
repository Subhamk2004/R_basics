import Log_name from './new.jsx';
import TailwindProps from "./tailwind&PropsLearn.jsx";

function App() {

  return (
      <>
          <Log_name/>
          <TailwindProps/>
          <h1>React with vite</h1>
      </>
  )
}

export default App
// here we are creating a function which is returning an html element,
// this function is exported and get's imported by main.jsx, which then renders
// the function to the html element present in index.html.

//           naming convention

// always start the name of your function with an upperCase letter,as
// we have named the Log_name with (L) being uppercase, nd also make it the uppercase
// where that function is defined

// see it is not necessary to name the files with capital name but, from now try to
// name the file's first letter also as upperCase


// file's name can be anything but the function's name should begin with the
// uppercase letter

/////        IMPORTANT                  /////////

/* in the functions we can only return one element,
// so if we try to return more than one html element in the function, we will get an error'
 but to resolve this we can create an empty html tag which is
 <>

 </>

 in the above tags we can return as many html elements as we want

 in react we only have one webpage, which is index.html, and everything is just
 rendered in that one html file

 */

// we use reactDom for webpages and react native for mobile applications

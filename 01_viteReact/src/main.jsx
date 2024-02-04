import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// rendering MyApp created directly on this page
function MyApp() {
  return (
    <>
      <p>This is my custom app!!</p>
      <a href='https://google.com'>Google link</a>
    </>
  )
}

const reactElement = (
  <a href="https://amazon.com" target='_blank'>This is amazon link</a>
)


/* React.createElement creates element in the following format
    element type ,
    attributes in the key value pair inside { }, 
    children
*/
const anotherElement = React.createElement(
  'a',
  {href: 'https://netflix.com', target: '_blank'},
  'click here to visit netflix'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // MyApp()
    // reactElement
    anotherElement
  
)

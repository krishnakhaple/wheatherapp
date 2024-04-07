
import React from 'react'
//used to work with the jsx elements (js extension) within the render method so that babel 
//can call createElement() using React

import ReactDOM from 'react-dom'
import App from './App';
//reactDOM is used to work or to use render method
// ReactDOM.render(<h3>hello kk </h3>,
//  document.getElementById("root") ); 



// ReactDOM.render( React.createElement("h1",null,"krishna khaple"),
// document.getElementById('root'));




// var h1=document.createElement('h1')
// h1.innerHTML="ram khaple"
// document.getElementById('root').appendChild(h1);

//this is pure js used to create h1 element 
//and add that element into root element 


/*
ReactDOM.render
(
    <div>
    <h3>hello eveybody</h3>
    <p>i will be working there definetly</p>
    <i>i am kk</i>
    </div>,
    document.getElementById('root')
)
*/

// u can use multiple jsx within the div tag because 
// react render method can understand only single element 
// and so that we  can put into div


/*
ReactDOM.render
(
[
<h3>hello kk</h3>,
<p>are u doing your study properly</p>,
<p>ur answer should be yes</p>
],
document.getElementById('root')
)
*/
//if ur react version is above 16 then u can directly put all the 
//jsx element within the array 


/*
ReactDOM.render
(
<React.Fragment>
<h3>hello krishna</h3>
<p>r u doing ur work properly??</p>
<p>just say yes or no</p>
</React.Fragment>,
document.getElementById('root')
)
*/

//instead of writing div tag using React.Fragment is beneficial
//because it create one div element less 
//but
//if we r using div element it is creating one 
//div element more



ReactDOM.render
(
    <> 
  <App/>
    </>,
    document.getElementById('root')
);


//but in react for react.Fragment there is syntactic suger form 
//available using direclty <>    </> without wriing React.Fragment
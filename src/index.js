import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StudentDetails from './classComp';
// import FuncComp from './funcComp';
import reportWebVitals from './reportWebVitals';
// import ChildDetails from './ChildFunc';



const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App name="Dinesh" />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <App show={true} />
  </React.StrictMode>
)

// root.render (
//   <>
//     {/* <StudentDetails name="Tony" subject="NodeJs" />
//     <FuncComp subject="ReactJs" age="20" /> */}
//     <ChildDetails />
//   </>
// )

// FuncComp({Subject: "ReactJs"});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ClassComponent, { ClassComponent2 } from './classComponent';
// import FunctionComponent, { FunctionComponent2 } from './funcComponent';

// import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import LayoutPage from "./pages/LayoutPage";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

import React, { useState, useEffect, useContext, createContext, useRef } from 'react';
import { useOutlet } from 'react-router-dom';
import studentData from './student.json';

// function App() {

//   const details = {
//     "dob": "01/01/1900",
//     "city": "Chennai",
//     "state": "TN",
//     "country": "India"
//   };

//   return (
//     <>
//       <ClassComponent age="20" dateJoined="01/01/2022" />
//       <ClassComponent2 det={details} />
//       <hr />
//       <FunctionComponent name="Dinesh" subject="ReactJs" />
//       <FunctionComponent2 det={details} />
//     </>
    
//   );
// }

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LayoutPage />}>
//             <Route index element={<HomePage />}></Route>
//             <Route exact path="/about" element={<AboutPage />}></Route>
//             <Route exact path="/contact" element={<ContactPage />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>

//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<LayoutPage />}>
//             <Route index element={<HomePage />}></Route>
//             <Route exact path="/about" element={<AboutPage />}></Route>
//             <Route exact path="/contact" element={<ContactPage />}></Route>
//           </Route>
//         </Routes>
//       </HashRouter>
//     </>
//   )
// }

// function App() {
//   // const [det, setDet] = useState({
//   //   name: "Dinesh",
//   //   subject: "ReactJS",
//   //   dateJoined: "01/01/2022"
//   // });
//   // const setDetails = () => {
//   //     setDet(previousState => {
//   //         return {...previousState, subject: "NodeJs"};
//   //     });
//   // }
//   const [det, setDet] = useState({
//     name: "Dinesh"
//   });
//   const setDetails = () => {
//     setDet((previousState)=> {
//       return {...previousState, subject: "ReactJs"};
//     })
//   }
//   return (
//       <div>
//           <h2>I am {det.name}!</h2>
//           <p>Subject: {det.subject}</p>
//           {/* <p>Date Joined: {det.dateJoined}</p> */}
//           <button type="button" onClick={setDetails}>Change Subject</button>
//       </div>
//   );
// }

// function App() {
//   const [det, setDet] = useState({
//     name: "Tony",
//     subject: "ReactJs"
//   });
//   const [login, setLogin] = useState(true);

//   const changeName = () => {
//     setDet((previousState) => {
//       return {...previousState, name: "Priya", subject: "NodeJs", joined: "01/01/2022"};
//     });
//   }

//   const changeLogin = () => {
//     setLogin(false);
//   }
//   const changeLogout = () => {
//     setLogin(true);
//   }
//   return (
//     <>
//       <h1>I'm {det.name}</h1>
//       <h3>Subject: {det.subject}</h3>
//       <h3>Joined: {det.joined}</h3>
//       <button onClick={changeName}>Get Updated Name</button><br />
//       {login.toString()}<br />
//       {login ? <button onClick={changeLogin}>Login</button> : <button onClick={changeLogout}>Logout</button>}
      
//     </>
//   )
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {name: "Tony"};
//   }
//   changeName = () => {
//     this.setState({name: "Dinesh"});
//   }
//   render() {
//     return (
//       <>
//         <p>I'm {this.state.name}</p>
//         <button onClick={this.changeName}>Get Updated Name</button>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//       </>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {subject: "ReactJs"};
//   }

//   // static getDerivedStateFromProps(props, state) {
//   //   return { subject: props.subject}
//   // }

//   componentDidMount() {
//       setTimeout(() => {
//           this.setState({subject: "MongoDB"})
//       }, 4000)
//   }

//   render() {
//     return (
//       <>
//         <p>Subject: {this.state.subject}</p>
//       </>
//     )
//   }
// }

// class App extends React.Component {
//   constructor() {
//       super();
//       this.state = {
//           name: "Dinesh",
//           subject: "ReactJS",
//           dateJoined: "01/01/2022"
//       };
//   }
//   // static getDerivedStateFromProps(props, state) {
//   //     return {subject: props.subject };
//   // }
//   shouldComponentUpdate(previousState) {
//     console.log(previousState.subject);
//     console.log(this.state.subject);
//     if(previousState.subject === this.state.subject) {
//       return false;
//     } else 
//       return true;
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML = "Before update: " + prevState.subject;
//   }
//   componentDidUpdate() {
//       document.getElementById("div2").innerHTML = "After update: " + this.state.subject;
//   }
//   changeSubject = () => {
//       this.setState({subject: "ReactJS"});
//   }
//   render() {
//       return (
//           <div>
//               <h2>I am {this.state.name}!</h2>
//               <p>Subject: {this.state.subject}</p>
//               <p>Date Joined: {this.state.dateJoined}</p>
//               <button type="button" onClick={this.changeSubject}>Change Subject</button>
//               <div id="div1"></div>
//               <div id="div2"></div>
//           </div>
//       );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {show: true};
//   }
//   delComp = () => {
//       this.setState({show: false});
//   }
//   render() {
//       let res;
//       if (this.state.show) {
//           res = <StudentDetails />;
//       };
//       return (
//           <div>
//               {res}
//               <button type="button" onClick={this.delComp}>Delete Component</button>
//           </div>
//       );
//   }
// }
// class StudentDetails extends React.Component {
//   componentWillUnmount() {
//       alert("The component named StudentDetails is about to be unmounted.");
//   }
//   render() {
//       return (
//           <h1>Hello World!</h1>
//       );
//   }
// }

// function App() {
//     const [count, setCount] = useState(0);
//     const [calc, setCalc] = useState(1);

//     // useEffect(() => {
//     //     console.log("function called");
//     //     setTimeout(() => {
//     //         setCount((count) => count + 1);
//     //         // setCount(1);
//     //     }, 1000);
//     // }, [count]);

//     useEffect(() => {
//         console.log("set calc");
//         setTimeout(() => {
//             // setCalc((calc) => calc * 2);
//             setCalc(2);
//         }, 1000);
//     },[calc]);

//     return (
//         <>
//             <h1>Count: {count}!</h1>
//             <p><button onClick={() => setCount((v)=> v+1)}>Click</button></p>
//             <h3>Calc: {calc}</h3>
//         </>
//     );
// }

// const NameContext = createContext();
// function App() {
//   const [det, setDet] = useState({
//     name: "Rithu",
//     subject: "ReactJs"
//   });

//   return (
//     <>
//         <NameContext.Provider value={det}>
//             <h1>{`I'm ${det.name}, ${det.subject}!`}</h1>
//             <FourthComp />
//         </NameContext.Provider>
//     </>
//   );
// }
// function SecondComp() {
//   return (
//     <>
//       <h1>2nd Component</h1>
//       <ThirdComp />
//     </>
//   );
// }
// function ThirdComp() {
//   return (
//     <>
//       <h1>3rd component</h1>
//       <FourthComp />
//     </>
//   );
// }
// function FourthComp() {
//     const det1 = useContext(NameContext);
//   return (
//     <>
//       <h1>Last Component</h1>
//       <h2>{`Hello ${det1.name}, ${det1.subject} again!`}</h2>
//     </>
//   );
// }


// function App() {
//   const [txtName, settxtName] = useState("");
//   const prevtxtName = useRef("");
//   const [myName, setMyName] = useState("Dinesh");
//   const prevName = useRef("");

//   useEffect(() => {
//     prevtxtName.current = txtName;
//     prevName.current = myName;
//   }, [txtName, myName]); // 

//   const txtInput = useRef(null);
//   const handleClick = () => {
//     txtInput.current.focus();
//   };

//   const handleChange = (e) => {
//     setMyName(e.target.name);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={txtName}
//         onChange={(e) => settxtName(e.target.value)}
//       />
//       <h2>Current Value: {txtName}</h2>
//       <h2>Previous Value: {prevtxtName.current}</h2>

//         <div>
//             <input type="text" />
//             <input type="text" />
//             <input ref={txtInput}  type="text" />
//             <button onClick={handleClick}>Focus the input</button>
//         </div>
      
//         <div>
//             <p>I'm {myName}</p>
//             <p>My Old Name: {prevName.current}</p>
//             <button name="New Name" onClick={handleChange}>Change the State</button>
//         </div>
//     </>
//   );
// }

// function App() {
//     let result = [];
//     const [students, fetchStudents] = useState([]);
//     const [apiData, fetchapiData] = useState([]);

//     const showDetails = () => {
//     console.log(studentData.students);
//     for(let temp in studentData.students) {
//       result.push(<div key={temp}>
//         Id : {studentData.students[temp].id}<br />
//         Name: {studentData.students[temp].name}<br />
//         Subject: {studentData.students[temp].subject}
//         </div>)
//     //   result.push(studentData.students[temp].id + " = " + studentData.students[temp].name + " = " + studentData.students[temp].subject);

//     //   console.log(studentData.students[temp].id + " = " + studentData.students[temp].name + " = " + studentData.students[temp].subject);
//     }
//     // console.log(result);
//     fetchStudents(result);
//     // console.log(studentData);
//     // tempFunc(JSON.stringify(studentData));
//     // console.log(Object.keys(temp));
//   }

//   const showFromAPI = () => {
//     fetch('https://api.quotable.io/random')
//         .then((data) => data.json())
//         .then((data) => {
//             console.log(data);
//             fetchapiData([data]);
//         })
//   }

//     return (
//         <>
//             <h3>Student Names List:</h3>
//             <p><button type='button' onClick={showDetails}>Show Details</button></p>

//             <p><button type='button' onClick={showFromAPI}>Show From API</button></p>

//             <div>{students}</div>

//             <div>{apiData.map((v, i) => <p key={i}>ID: {v._id}<br/>CONTENT: {v.content}<br />AUTHOR: {v.author}</p>)}</div>
//         </>
//     )
// }


function App() {
    const [student, setStudent] = useState();

    let output = [];

    const showStudentDetails = () => {
        console.log(studentData.students);
        for(let temp in studentData.students) {
            // console.log(studentData.students[temp]);
            for(let temp1 in studentData.students[temp]) {
                // console.log(temp1 + " : " +studentData.students[temp][temp1]);
                output.push(
                    <div key={temp+temp1}>{temp1}: {studentData.students[temp][temp1]}</div>
                )
            }
        }
        console.log(output);
        setStudent(output);
    }

    const [quote, setQuote] = useState([]);

    const showQuotesFromAPI = () => {
        fetch('https://api.quotable.io/random')
            .then((data) => data.json())
            .then((data) => {
                console.log(data);
                setQuote([data]);
            })
    }

    // useEffect(()=>{
    //     // setInterval(showQuotesFromAPI, 5000);
    //     showQuotesFromAPI();
    // },[quote]);

    return (
        <>
            <button onClick={showStudentDetails}>Show Student Details from JSON</button>

            <div>
                {student}
            </div>

            <button onClick={showQuotesFromAPI}>Show Quotes from API</button>

            <div>
                {
                quote.map((v, i) => <div key={i}>
                    <p>ID: {v._id}</p>
                    <p>QUOTE: {v.content}</p>
                    <p>AUTHOR: {v.author}</p>
                </div>)
                }
            </div>
        </>
    )
}

export default App;

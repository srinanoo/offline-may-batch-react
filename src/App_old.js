// import logo from './logo.svg';
// import './App.css';

// import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

// import Template from "./pages/Template";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import FuncComp from "./funcComp";

// import TestFunc from './function1';
// import TestClass from './class1';

import ShowStudentName, { ShowStudentSubject, ShowStudentDetails } from "./multifunction";

function App1(props) {
  const students = [
    {
      id: 1,
      name: "Dinesh",
      subject: "Reactjs"
    },
    {
      id: 2,
      name: "Jag",
      subject: "Nodejs"
    },
    {
      id: 3,
      name: "Aru",
      subject: "MongoDB"
    }
  ];

  let wrapper = [];

  let out = "";
  const showDetails = () => {

    for(let temp in students) {
        let output = [];
        out += "<div class='card'>";
        for(let temp1 in students[temp]) {
            output.push(
                <div name={temp+temp1} key={temp+temp1}>{temp1} : {students[temp][temp1]}</div>
            );

            out += "<div>"+temp1 +":" +students[temp][temp1]+"</div>";
        }
        out += "</div>";
        wrapper.push(<div className='card'>{output}</div>);
        // console.log(props.StuDet[temp].name);
    }

    console.log(wrapper);

    document.querySelector("#div1").innerHTML = out;
  }

  return (
    <div>
      {/* <Template />
      <Home />
      <About />
      <Contact />
      <Portfolio /> */}

      {/* <button onClick={showDetails}>Show the Details!</button>
      <div id="div1"></div> */}

      {/* <HashRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/portfolio" element={<Portfolio />}></Route>
          </Route>
        </Routes>
      </HashRouter> */}
    </div>
  );
}

function App(props) {

  const students = [
    {
      id: 1,
      name: "Dinesh",
      subject: "Reactjs"
    },
    {
      id: 2,
      name: "Jag",
      subject: "Nodejs"
    },
    {
      id: 3,
      name: "Aru",
      subject: "MongoDB"
    }
  ];

  const studentName = ["Dinesh", "Jag", "Aru"];
  const studentSubject = ["ReactJs", "NodeJs", "MongoDB"];
  return(
    <>
      {/* {
      (props.show) ? <TestFunc /> : <TestClass />
      } */}

      {/* {props.show && <TestFunc />} */}

      {/* {studentName.map(names => <div>{names}</div>)} */}

      {/* {studentName.map(names => <ShowStudentName name={names} />)} */}
      
      {/* {studentSubject.map(subjects => <div>{subjects}</div>)} */}

      {/* {studentSubject.map(subjects => <ShowStudentSubject subject={subjects} />)} */}

      {students.map(values => <ShowStudentDetails details={values} />)}
    
    </>
  )
}

export default App;

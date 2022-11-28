import React from 'react';
import Temp from './funcComp.module.css';
import './styles.css';

function FuncComp(props) {
    let wrapper = [];
    for(let temp in props.StuDet) {
        let output = [];
        for(let temp1 in props.StuDet[temp]) {
            output.push(
                <div name={temp+temp1} key={temp+temp1}>{temp1} : {props.StuDet[temp][temp1]}</div>
            );
            console.log(props.StuDet[temp][temp1]);
        }
        wrapper.push(<div className='card'>{output}</div>);
        // console.log(props.StuDet[temp].name);
    }
    
    return (
        <>
            {/* <p>
                {JSON.stringify(props.StuDet[0])}
            </p>
            <p>
                {JSON.stringify(props.StuDet[1])}
            </p>
            <p>
                {JSON.stringify(props.StuDet[2])}
            </p> */}

            <div className='grid'>
            {wrapper}
            </div>
        </>
        
    )
}

export default FuncComp;
import './styles.css';

function Child(props) {
    let output = [];
    // output.push(`<div className='red'>`);
    for(let temp in props.childDet){
        output.push(<div key={temp}>{temp} : {props.childDet[temp]}</div>)
    }
    // output.push(`</div>`);

    return (
        <>
            {output}
        </>
    );
}

function ChildDetails() {
    const details = [
        {name: "fnName 1", subject: "JS", id: 100},
        {name: "fnName 2", subject: "React", id: 200},
        {name: "fnName 3", subject: "Node", id: 300}
    ];

    // let results = [];
    // details.forEach((v, i) => {
    //     results.push(<div key={i}>Id: {v.id}<br />Name: {v.name}<br />Subject: {v.subject}</div>);
    // })

    return (
        <>
            {JSON.stringify(details)}

            {/* {results} */}

            <div style={{display: "flex"}}>
            {
                // details.forEach((v) => {
                //     {"Id: " + v.id + ", Name: " + v.name + ", Subject: " + v.subject}</div>
                // })

                details.map((v, i) => <div className='red'><Child key={i} childDet={v} /></div>)
            }
            </div>
        </>
    );
}

export default ChildDetails;
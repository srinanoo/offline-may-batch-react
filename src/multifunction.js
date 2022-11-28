function ShowStudentName(props) {
    return(
        <>
            <p>{props.name}</p>
        </>
    )
}

function ShowStudentSubject(props) {
    return(
        <>
            <p>{props.subject}</p>
        </>
    )
}

function ShowStudentDetails(props) {
    let output = [];
    for(let temp in props.details) {
        output.push(<div key={temp}>{temp} : {props.details[temp]}</div>)
    }

    return(
        <>
            <div className="grid">
                <div>{output}</div>
            </div>
        </>
    )
}

export default ShowStudentName;
export { ShowStudentSubject, ShowStudentDetails };
import React from 'react';

class StudentDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <h1>Welcome to my Class Component!</h1>
                <div>
                    Name: {this.props.det.name}<br />
                    DOB: {this.props.det.dob}
                </div>
            </>
            
        )
    }
}

export default StudentDetails;
import React, {Component} from 'react';
// import Modal from 'react-modal';



 class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let self = this;
        fetch('/users/users', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({users: data});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }

    render() {
        return (
        <div className="container"> 
            <div className="panel panel-default p50 uth-panel">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>USERNAME</th>
                            <th>CITY</th>
                            <th>STATE</th>
                            <th>CODE</th>
                            {/* <th colSpan={2}></th> */}
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((member, key) => 
                        <tr key={key}>
                        <td>{member.firstname} </td>
                        <td>{member.username}</td>
                        <td>{member.city}</td>
                        <td>{member.state}</td>
                        <td>{member.zip}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default Details;
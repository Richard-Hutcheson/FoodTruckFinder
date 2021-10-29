import React, { Component } from 'react';

class UserDashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            item1: '',
            item2: ''
        }
    }
    
    render(){
        return (
            <div>
                <h1>DASHBOARD</h1>
                <p>Data = {}</p>
            </div>
        );
    }
}
export default UserDashboard;
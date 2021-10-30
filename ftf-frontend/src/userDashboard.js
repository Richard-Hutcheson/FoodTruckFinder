import React, { Component } from 'react';
import { getUserID } from './API/apiCalls';

class UserDashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '',
            userID: 'fetching...'
        }
        if (this.props.location.state != ''){
            this.state.user = this.props.location.state.user;
        }
    }

    async componentDidMount(){
        const requestOptions = {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        };
        const response = await fetch(`http://localhost:8080/findUser/${this.state.user}`, requestOptions).catch(error =>{
            window.confirm("Problem encountered with fetch operation: " + error.message);
        });
        const data = await response.json();
        if (data != null){
            this.setState({userID: data.id})
        }else{
            this.setState({userID: "could not be found"})    
        }


    }
    render(){
        return (
            <div>
                <h1>DASHBOARD</h1>
                <h2>Welcome, {this.state.user}!</h2>
                <p>your user id = {this.state.userID}</p>
            </div>
        );
    }
}
export default UserDashboard;
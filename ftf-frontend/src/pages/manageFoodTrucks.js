import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styles from '../css/userDashboard.module.css';

class ManageFoodTrucks extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '<unknown>',
            userID: 'fetching...',
            searchQuery: '',
            name: '<unknown>',
            guest: 'true',
            showMap: 'false'
        }
        if (this.props.location.state != null){
            this.state.user = this.props.location.state.user;
            this.state.guest = this.props.location.state.guest;
            this.state.name = this.props.location.state.name;
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log("value = " + value);
    }
    handleSubmit(event){
        event.preventDefault();
    }
   
    render(){ 
        return (
            <div>
                <p>hello</p>

            </div>
        ); 
    }
}
export default ManageFoodTrucks;

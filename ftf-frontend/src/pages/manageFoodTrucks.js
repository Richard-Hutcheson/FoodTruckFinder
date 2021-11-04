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
                <div className = {styles.navbar}>
                    <div className={styles.dropdownDiv}>
                        <button className={styles.dropbtn}>{this.state.user}</button>
                        <div className={styles.dropdownContent}>
                            <Link to= {{ pathname: "/ManageAccount", state: {username: this.state.user}}}>Manage Account</Link>
                            <Link to= {{ pathname: "/ManageFoodTrucks", state: {username: this.state.user}}}>Manage Food Trucks</Link>
                        </div>
                    </div>
                    <a href="/" className = {styles.logout}>logout</a>
                </div>
                <p>your user id = {this.state.userID}</p>


            </div>
        ); 
    }
}
export default ManageFoodTrucks;

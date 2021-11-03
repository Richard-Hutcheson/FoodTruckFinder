import React, { Component } from 'react';
import {getUser} from '../API/apiCalls';
import {Link} from "react-router-dom";
import styles from '../css/truckOwnerDashboard.module.css';

class TruckOwnerDashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '<unknown>',
            userID: 'fetching...',
            searchQuery: '',
            name: '<unknown>',
            guest: 'true'
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
        let response = await getUser(this.state.user);
        if (response == null){
            response = "unable to retrieve";
        }
        this.setState({userID: response.id});
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log("value = " + value);
        this.setState({
            searchQuery: value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        if (this.state.searchQuery != ""){
            console.log("search query = " + this.state.searchQuery);
        }else{
            alert("search field is empty");
        }
    }

    render(){ 
        return (
            <div>

    

                <div className = {styles.navbar}>
                    <div className={styles.dropdownDiv}>
                        <button className={styles.dropbtn}>{this.state.user}</button>
                        <div className={styles.dropdownContent}>
                            <a href=""><Link to= {{ pathname: "/ManageAccount", state: {username: this.state.user}}}>Manage Account</Link></a>
                            <a href=""><Link to= {{ pathname: "#", state: {username: this.state.user}}}>Manage Food Trucks</Link></a>
                        </div>
                    </div>
                    <a href="/" className = {styles.logout}>logout</a>
                </div>
                <p>your user id = {this.state.userID}</p>
                <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                    <input className={styles.searchField} type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
                    <button  className={styles.searchBtn} type="submit">Submit</button>
                </form>
                <div className = {styles.mapWrapper}>
                    <p>~map goes here~</p>
                </div>





            </div>
    
        );
    }
}
export default TruckOwnerDashboard;

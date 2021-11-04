import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styles from '../css/manageFoodTrucks.module.css';


class ManageFoodTrucks extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '<unknown>',
            userID: 'fetching...',
            searchQuery: '',
            name: '<unknown>',
            guest: 'true',
            showMap: 'false',
            role: '',
        }
        if (this.props.location.state != null){
            this.state.user = this.props.location.state.user;
            this.state.guest = this.props.location.state.guest;
            this.state.name = this.props.location.state.name;
            this.state.userID = this.props.location.state.userID;
            this.state.role = this.props.location.state.role;
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
                            <Link to= {{ pathname: "/TruckOwnerDashboard", state: {user: this.state.user, userID: this.state.userID}}}>Dashboard</Link>
                            <Link to= {{ pathname: "/ManageAccount", state: {username: this.state.user}}}>Manage Account</Link>
                            <Link to= {{ pathname: "/ManageFoodTrucks", state: {username: this.state.user}}}>Manage Food Trucks</Link>
                        </div>
                    </div>
                    <a href="/" className = {styles.logout}>logout</a>
                </div>
                <p>your user id = {this.state.userID}</p>

                <div className={styles.truckRecsContainer} id = "recTrucksID">
                    <div className={styles.truckRecTitle}>
                        <p>Your Food Trucks</p>
                    </div>
                    <div className={styles.textBar}>
                        <div className={styles.textBarText}>TRUCK NAME</div>
                        <div className={styles.textBarText}>PRICE</div>
                        <div className={styles.textBarText}>FOOD TYPE</div>
                        <div className={styles.textBarText}></div>
                    </div>
                    <div className={styles.recItem}>
                        <div className={styles.truckName}>truck0</div>
                        <div className={styles.truckPrice}>$x.xx</div>
                        <div className={styles.truckFoodType}>food_type</div>
                        <button className={styles.truckBtn} type="submit" onClick={()=>{
                            <Link to= {{ pathname: "/EditFoodTruck", state: {user: this.state.username, userID: this.state.userID}}}></Link>
                        }}>EDIT</button>
                    </div>
                </div>
                <div className = {styles.backBtn}>
                        {this.state.role === 'o' && <Link to= {{ pathname: "/TruckOwnerDashboard", state: {user: this.state.user, userID: this.state.userID}}}>BACK</Link>}
                        {this.state.role !== 'o' && <Link to= {{ pathname: "/UserDashboard", state: {user: this.state.user, userID: this.state.userID}}}>BACK</Link>}
                </div>
            </div>
        ); 
    }
}
export default ManageFoodTrucks;

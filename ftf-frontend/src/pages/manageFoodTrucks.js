import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styles from '../css/userDashboard.module.css';
import {getAllTrucks} from '../API/apiCalls';


class ManageFoodTrucks extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '<unknown>',
            userID: 'fetching...',
            searchQuery: '',
            role: '',
        }
        if (this.props.location.state != null){
            this.state.username = this.props.location.state.username;
            this.state.userID = this.props.location.state.userID;
            this.state.role = this.props.location.state.role;
            console.log(this.state);
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        //GET ALL FOOD TRUCKS FOR FOOD TRUCK RECOMMENDATIONS
        let response = await getAllTrucks().catch(error=>{
            console.log(error.message);
        })
        if (response == null){
            response = "unable to retrieve";
        }
        //response should be an array
        for (let i = 0; i < response.length;++i){
            if (response[i].owner.id === this.state.userID){
                let container = document.getElementById('recTrucksID');
                let truck = document.createElement('div');
                let recItem = document.createElement('div');
                recItem.setAttribute("class", styles.recItem);
                let btn = document.createElement('button');
                btn.setAttribute('type', 'submit');
                btn.setAttribute('class', styles.truckBtn);
                btn.setAttribute('id', response[i].truckName);
                btn.innerText = "VIEW and EDIT";
                recItem.innerHTML = `
                    <div class=${styles.truckName}>${response[i].truckName}</div>
                    <div class=${styles.truckPrice}>$${response[i].minRange}-$${response[i].maxRange}</div>
                    <div class=${styles.truckFoodType}>${response[i].foodType}</div>
                `
                btn.onclick = function() {
                    document.location.href = `http://localhost:3000/EditTruck?truck=${response[i].truckName}`;
                }
    
                recItem.appendChild(btn);
                truck.appendChild(recItem);
                container.appendChild(truck);
            }
        }
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
            <div className={styles.manageContainer}>
                <div className = {styles.navbar}>
                    <div className={styles.dropdownDiv}>
                        <button className={styles.dropbtn}>{this.state.username}</button>
                        <div className={styles.dropdownContent}>
                            <Link to= {{ pathname: "/ManageAccount", state: {username: this.state.username}}}>Manage Account</Link>
                            <Link to= {{ pathname: "/ManageFoodTrucks", state: {username: this.state.username}}}>Manage Food Trucks</Link>
                        </div>
                    </div>
                    <a href="/" className = {styles.logout}>logout</a>
                </div>
                
                <div className={styles.truckManageContainer} id = "recTrucksID">
                    <div className={styles.truckRecTitle}>
                        <p><b>YOUR FOOD TRUCKS</b></p>
                    </div>
                    <div className={styles.textBar}>
                        <div className={styles.textBarText}>TRUCK NAME</div>
                        <div className={styles.textBarText}>PRICE</div>
                        <div className={styles.textBarText}>FOOD TYPE</div>
                        <div className={styles.textBarText}></div>

                    </div>
                </div>
                <div className = {styles.addTruckBtn}>
                        <Link to= {{ pathname: "/AddTruck", state: {username: this.state.username, userID: this.state.userID}}}>ADD TRUCK</Link>
                        {/* {this.state.role === 'o' && <Link to= {{ pathname: "/AddTruck", state: {username: this.state.username, userID: this.state.userID}}}>ADD TRUCK</Link>} */}

                </div>
                <div className = {styles.backBtn}>
                    <Link to= {{ pathname: "/UserDashboard", state: {username: this.state.username, userID: this.state.userID}}}>BACK</Link>                
                </div>
            </div>
        ); 
    }
}
export default ManageFoodTrucks;

import React, { Component } from 'react';
import {getUser} from '../API/apiCalls';
import {Link} from "react-router-dom";
import styles from '../css/userDashboard.module.css';
import {callMaps} from "../API/googleMaps.js"
let map;

class TruckOwnerDashboard extends Component{

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
        this.special = this.special.bind(this);


    }

    async componentDidMount(){
        let response = await getUser(this.state.user);
        if (response == null){
            response = "unable to retrieve";
        }
        this.setState({userID: response.id});

        if (this.state.showMap == 'true'){
            try{
                callMaps(map);
            }catch(error){
                console.log("error in calling gMaps = ", error);
            }
        }

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
    special(event){
        let val = event.target.innerHTML;
        if (val == 'ADD TRUCKS'){
            for (let i = 4; i < 10; ++i){
                let container = document.getElementById('recTrucksID');
                let truck = document.createElement('div');
                let recItem = document.createElement('div');
                recItem.setAttribute("class", styles.recItem);
                let btn = document.createElement('button');
                btn.setAttribute('type', 'submit');
                btn.setAttribute('class', styles.truckBtn);
                btn.innerText = "VIEW";
                recItem.innerHTML = `
                    <div class=${styles.truckName}>truck${Math.floor(Math.random() * 100 + 1)}</div>
                    <div class=${styles.truckPrice}>$x.xx</div>
                    <div class=${styles.truckFoodType}>food_type</div>
                `
                btn.addEventListener("click", function(){
                    console.log("bink");
                });

                recItem.appendChild(btn);
                truck.appendChild(recItem);
                container.appendChild(truck);
            }
        }else{
                callMaps(map);
                this.setState({showMap: 'true'});
        }


        
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
                <form className={styles.searchForm} onSubmit={this.handleSubmit}>

                    <div className={styles.searchSubDiv}>

                        <input className={styles.searchField} type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
                        <button  className={styles.searchBtn} type="submit">Submit</button>                            
                    </div>

                    <select name="searchOptions" className={styles.searchOptions}>
                        <option value="name">Food Truck By Name</option>
                        <option value="price">Food Truck By Price</option>
                        <option value="location">Food Truck By Location</option>
                        <option value="type">Food Truck By Food Type</option>
                        <option value="user">User</option>
                    </select>
                </form>
                <div className={styles.truckRecsContainer} id = "recTrucksID">
                    <div className={styles.truckRecTitle}>
                        <p>Food Truck Recommendations</p>
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
                        <button className={styles.truckBtn} type="submit" onClick={()=>{console.log("hello");}}>VIEW</button>
                    </div>
                </div>
                <div className = {styles.mapWrapper}>
                    { this.state.showMap == 'true' && <input id="pac-input" className={styles.controls, styles.mapInputBar} type="text" placeholder="Search..."/>}
                    <div className={styles.map} id="map">
                        <p>Map goes here. Status: disabled</p>
                    </div>
                </div>
                <div className={styles.dynamic}>
                    <button className = {styles.s} type="submit" onClick={this.special}>ADD TRUCKS</button>
                    <button className = {styles.s} type="submit" onClick={this.special}>SHOW MAP</button>
                </div>

            </div>
        ); 
    }
}
export default TruckOwnerDashboard;

import React, { Component } from 'react';
import {getAllRoutes, getAllTrucks, getRecommendedTrucks, getSubscriptions, getUser, insertUserFoodRec, updateFoodTypeRec} from '../API/apiCalls';
import {Link} from "react-router-dom";
import styles from '../css/userDashboard.module.css';
import {callMaps} from "../API/googleMaps.js"
import {initMap} from "../API/googleMaps.js"
// let map;

class UserDashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '<unknown>',
            userID: 'fetching...',
            searchQuery: '',
            address: {},
            name: '<unknown>',
            guest: true,
            showMap: 'false',
            role: '',
            queryType: '',
            subscribedTrucksList: [<div key = "-1"></div>]
        }
        if (this.props.location.state != null){
            this.state.username = this.props.location.state.username;
            this.state.guest = this.props.location.state.guest;
            this.state.name = this.props.location.state.name;
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.special = this.special.bind(this);
    }

    async componentDidMount(props){
        //GET username
        let response = await getUser(this.state.username).catch(error=>{
            console.log(error.message);
        });
        if (response == null){
            response = "unable to retrieve";
        }else{
            this.setState({guest: false});
        }
        this.setState({userID: response.id, username: response.username, role: response.role, 
            address: {"street": response.address, "city": response.city, "state": response.state}});
 
        if (this.state.showMap === 'true'){
            try{
                // callMaps(map);
            }catch(error){
                console.log("error in calling gMaps = ", error);
            }
        }
        let listLength = 0;
        //GET ALL FOOD TRUCKS FOR FOOD TRUCK RECOMMENDATIONS
        if (this.state.guest === false){
            //INSERT USER INTO FOOD TRUCK REC TABLE
            response = await insertUserFoodRec(this.state.username).catch(error=>{
                console.log(error.message);
            })
            response = await getRecommendedTrucks(this.state.username).catch(error=>{
                console.log(error.message);
            });
            listLength = response.length;
        }else{
            response = await getAllTrucks().catch(error=>{console.log(error.message);});
            listLength = response.length <= 5 ? response.length : 5;
        }
        //response should be an array
        for (let i =0; i < listLength; ++i){
            let container = document.getElementById('recTrucksID');
            let truck = document.createElement('div');
            let recItem = document.createElement('div');
            recItem.setAttribute("class", styles.recItem);
            let btn = document.createElement('button');
            btn.setAttribute('type', 'submit');
            btn.setAttribute('class', styles.truckBtn);
            btn.setAttribute('id', response[i].truckName);
            btn.innerText = "VIEW";
            recItem.innerHTML = `
                <div class=${styles.truckName}>${response[i].truckName}</div>
                <div class=${styles.truckPrice}>$${response[i].minRange}-$${response[i].maxRange}</div>
                <div class=${styles.truckFoodType}>${response[i].foodType}</div>
            `
            let tempName = this.state.username;
            let truckName = response[i].truckName;
            btn.onclick = function() {
                document.location.href = `http://localhost:3000/SearchResult?query=${truckName}&queryType=truck_name&user=${tempName}`;
            }
            recItem.appendChild(btn);
            truck.appendChild(recItem);
            container.appendChild(truck);
        }

        //GET SUBSCRIBED TRUCKS
        response = await getSubscriptions(this.state.username).catch(error=>{console.log(error.message);})
        if (response!= null){
            let arr = []; 
            for (let i =0; i < response.length; i++){
                let tempName = this.state.username;
                let truckName = response[i].truck.truckName;
                let temp = 
                <div key = {i}>
                    <div className = {styles.recItem}>
                        <div className = {styles.truckName}>{response[i].truck.truckName}</div>
                        <div className ={styles.truckPrice}>${response[i].truck.minRange}-${response[i].truck.maxRange}</div>
                        <div className ={styles.truckFoodType}>{response[i].truck.foodType}</div>
                        <button type = "submit" className = {styles.truckBtn} id = {response[i].truck.truckName} onClick= {()=>{
                            document.location.href = `http://localhost:3000/SearchResult?query=${truckName}&queryType=truck_name&user=${tempName}`;
                        }}>VIEW</button>
                    </div>
                </div>
                arr.push(temp);
            }
            if (arr.length > 0){
                this.setState({subscribedTrucksList: arr});
            }
        }
        //GET ALL ROUTES
        let allRoutes = await getAllRoutes().catch(e=>{console.log(e.message)});
        //GOOGLE MAPS API
        initMap(this.state.address, allRoutes);


    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (event.target.id === 'searchOptionsID'){
            this.setState({queryType: value});
        }else{
            this.setState({
                searchQuery: value
            });
        }
    }
    async handleSubmit(event){
        event.preventDefault();
        if ((this.state.searchQuery !== "" && event.target.id === 'searchFormID') || (this.state.queryType === 'nearby'&& event.target.id === 'searchFormID')){
            // //update user's food type preferences based on search history of food type
            if (this.state.queryType !== "user's username"){
                this.setState({searchQuery: this.state.searchQuery.toUpperCase()})
            }

            if (this.state.queryType === 'food type'){

                let response = await updateFoodTypeRec(this.state.username, this.state.searchQuery).catch(error=>{
                    console.log(error.message);
                })
            }
            this.props.history.push({
                pathname: '/SearchResult',
                state: {searchQuery: this.state.searchQuery, queryType: document.getElementById('searchOptionsID').value, username: this.state.username} // your data array of objects
            })
        }else{
            if (this.state.queryType !== "nearby"){
                alert("search field is empty");
            }
        }
    }
    special(event){
        // callMaps(map);
        this.setState({showMap: 'true'});
    }
    render(){ 
        return (
            <div className={styles.container}>
                <div className = {styles.navbar}>
                    {this.state.guest === false && <div className={styles.dropdownDiv}>
                        <button className={styles.dropbtn}>{this.state.username}</button>
                        <div className={styles.dropdownContent}>
                            {this.state.guest !== true && 
                                <Link to= {{ pathname: "/ManageAccount", state: {username: this.state.username, role: this.state.role}}}>Manage Account</Link>}
                            {this.state.guest !== true && this.state.role === 'o' && 
                                <Link to= {{ pathname: "/ManageFoodTrucks", state: {username: this.state.username, userID: this.state.userID, role: this.state.role}}}>Manage Food Trucks</Link>
                            }
                        </div>
                    </div>}
                    <p className = {styles.siteTitle}>EARN</p>
                    {this.state.guest ===true && <a href="/" className = {styles.logout}>EXIT</a>}
                    {this.state.guest !== true &&<a href="/" className = {styles.logout}>logout</a>}
                </div>
                
                <form className={styles.searchForm} id = "searchFormID" onSubmit={this.handleSubmit}>

                    <div className={styles.searchSubDiv}>

                        <input list = 'foodTypeList' className={styles.searchField} type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
                        <button  className={styles.searchBtn} type="submit">Submit</button>                            
                        {this.state.queryType === 'food type' && 
                            <datalist id="foodTypeList">
                                <option>American</option>
                                <option>Chinese</option>
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Greek</option>
                                <option>Korean</option>
                                <option>Japanese</option>
                                <option>Vietnamese</option>
                                <option>Thai</option>
                                <option>Indian</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Dessert</option>
                                <option>Drink</option>
                            </datalist>
                        }
                    </div>

                    <select name="searchOptions" className={styles.searchOptions} id = 'searchOptionsID' onChange = {this.handleChange}>
                        <option value="enhanced">Food Truck Search Enhanced</option>
                        <option value="truck_name">Food Truck By Name</option>
                        <option value="nearby">Food Trucks Nearby</option>
                        <option value="truck price">Food Truck By Price</option>
                        <option value="food type">Food Truck By Food Type</option>
                        {/* <option value="user's username">User</option> */}
                    </select>
                </form>
                <div className={styles.truckRecsContainer} id = "recTrucksID">
                    <div className={styles.truckRecTitle}>
                        <p><b>Food Truck Recommendations</b></p>
                    </div>
                    <div className={styles.textBar}>
                        <div className={styles.textBarText}>TRUCK NAME</div>
                        <div className={styles.textBarText}>PRICE</div>
                        <div className={styles.textBarText}>FOOD TYPE</div>
                        <div className={styles.textBarText}></div>
                    </div>
                </div>
                
                <div className = {styles.subscribedTrucksDiv}>
                    <div className={styles.truckRecTitle}>
                            <p><b>Food Truck Subscriptions</b></p>
                    </div>                    
                    <div className={styles.textBar}>
                        <div className={styles.textBarText}>TRUCK NAME</div>
                        <div className={styles.textBarText}>PRICE</div>
                        <div className={styles.textBarText}>FOOD TYPE</div>
                        <div className={styles.textBarText}></div>
                    </div>
                    {this.state.subscribedTrucksList}
                </div>

                <div className = {styles.mapWrapper}>
                    {/* { this.state.showMap === 'true' && <input id="pac-input" className={styles.controls, styles.mapInputBar} type="text" placeholder="Search..."/>} */}
                    <div className={styles.map} id="map">
                        <p>Map goes here. Status: disabled</p>
                    </div>
                </div>
                {/* <div className={styles.dynamic}>
                    <button className = {styles.s} type="submit" onClick={this.special}>SHOW MAP</button>
                </div> */}
                {/* .default is required because of a bug in react scripts v4.0 solution found on https://www.youtube.com/watch?v=ay6id01369s */}
                <div className = {styles.footerImageDiv}>
                    <img src={require('../assets/justTruck.png').default} className={styles.truckImg} alt="TRUCK IMAGE"/>
                    {/* <p className = {styles.footerTextHead}>EARN</p> */}
                    {/* <p className = {styles.footerText}>A FOOD TRUCK FINDING APP</p> */}
                    <p className = {styles.footerTextFooter}>Richard Hutcheson, Noah Lambaria, Austin Blanchard, Ethan Robinson</p>
                </div>

            </div>
        );
    }
    
}
export default UserDashboard;
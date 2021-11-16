import React, { Component } from 'react';
<<<<<<< HEAD
import {getAllTrucks, getRecommendedTrucks, getUser, insertUserFoodRec, updateFoodTypeRec} from '../API/apiCalls';
=======
import {getAllTrucks, getUser, insertUserFoodRec} from '../API/apiCalls';
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
import {Link} from "react-router-dom";
import styles from '../css/userDashboard.module.css';
import {callMaps} from "../API/googleMaps.js"
let map;

class UserDashboard extends Component{

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
<<<<<<< HEAD
            queryType: '',
=======
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
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

    async componentDidMount(props){
        //GET USER
        let response = await getUser(this.state.user).catch(error=>{
            console.log(error.message);
        });
        if (response == null){
            response = "unable to retrieve";
        }
        this.setState({userID: response.id});
        this.setState({role: response.role});
<<<<<<< HEAD
=======
        console.log("ROLE = ", this.state.role);
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
        if (this.state.showMap === 'true'){
            try{
                callMaps(map);
            }catch(error){
                console.log("error in calling gMaps = ", error);
            }
        }
        //INSERT USER INTO FOOD TRUCK REC TABLE
        response = await insertUserFoodRec(this.state.user).catch(error=>{
            console.log(error.message);
        })

<<<<<<< HEAD
        //GET ALL FOOD TRUCKS FOR FOOD TRUCK RECOMMENDATIONS
        // response = await getAllTrucks().catch(error=>{
        //     console.log(error.message);
        // })
        response = await getRecommendedTrucks(this.state.user).catch(error=>{
            console.log(error.message);
        })
        console.log("Response = ", response);

=======

        //GET ALL FOOD TRUCKS FOR FOOD TRUCK RECOMMENDATIONS
        response = await getAllTrucks().catch(error=>{
            console.log(error.message);
        })
        if (response == null){
            response = "unable to retrieve";
        }
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
        //response should be an array
        for (let i =0; i < response.length;++i){
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
            btn.onclick = function() {
                document.location.href = `http://localhost:3000/SearchResult?query=${response[i].truckName}&queryType=truck_name`;
            }

            recItem.appendChild(btn);
            truck.appendChild(recItem);
            container.appendChild(truck);
        }
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
<<<<<<< HEAD
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
        if (this.state.searchQuery !== "" && event.target.id === 'searchFormID'){
            // //update user's food type preferences based on search history of food type
            if (this.state.queryType === 'food type'){
                let response = await updateFoodTypeRec(this.state.user, this.state.searchQuery).catch(error=>{
                    console.log(error.message);
                })
            }
=======
        console.log("value = " + value);
        this.setState({
            searchQuery: value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        if (this.state.searchQuery !== ""){
            console.log("search query = " + this.state.searchQuery);
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
            this.props.history.push({
                pathname: '/SearchResult',
                state: {searchQuery: this.state.searchQuery, queryType: document.getElementById('searchOptionsID').value} // your data array of objects
            })
        }else{
            alert("search field is empty");
        }
    }
    special(event){
        let val = event.target.innerHTML;
        if (val === 'ADD TRUCKS'){
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
                    console.log("hey!");
                });
<<<<<<< HEAD
=======

>>>>>>> parent of 18eefb6d... Creating new Frontend folder
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
<<<<<<< HEAD
=======
    
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
        return (
            <div>
                <div className = {styles.navbar}>
                    <div className={styles.dropdownDiv}>
                        <button className={styles.dropbtn}>{this.state.user}</button>
                        <div className={styles.dropdownContent}>
<<<<<<< HEAD
                            {this.state.guest !=='true' && 
                                <Link to= {{ pathname: "/ManageAccount", state: {username: this.state.user, role: this.state.role}}}>Manage Account</Link>}
                            {this.state.guest !== 'true' && this.state.role === 'o' && 
                                <Link to= {{ pathname: "/ManageFoodTrucks", state: {user: this.state.user, userID: this.state.userID, role: this.state.role}}}>Manage Food Trucks</Link>
                            }

=======
                        {this.state.guest !=='true' && 
                            <Link to= {{ pathname: "/ManageAccount", state: {username: this.state.user, role: this.state.role}}}>Manage Account</Link>}
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
                        </div>
                    </div>
                    {this.state.guest ==='true' && <a href="/" className = {styles.logout}>EXIT</a>}
                    {this.state.guest !=='true' &&<a href="/" className = {styles.logout}>logout</a>}
                </div>
                {this.state.guest !== 'true' && <p>your user id = {this.state.userID}</p>}
                {this.state.guest === 'true' && <p>your user id = guest</p>}
                
<<<<<<< HEAD
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
=======
                <form className={styles.searchForm} onSubmit={this.handleSubmit}>

                    <div className={styles.searchSubDiv}>

                        <input className={styles.searchField} type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
                        <button  className={styles.searchBtn} type="submit">Submit</button>                            
                    </div>

                    <select name="searchOptions" className={styles.searchOptions} id = 'searchOptionsID'>
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
                        <option value="truck_name">Food Truck By Name</option>
                        <option value="truck price">Food Truck By Price</option>
                        <option value="food type">Food Truck By Food Type</option>
                        <option value="user's username">User</option>
                    </select>
                </form>
                <div className={styles.truckRecsContainer} id = "recTrucksID">
                    <div className={styles.truckRecTitle}>
<<<<<<< HEAD
                        <p><b>Food Truck Recommendations</b></p>
=======
                        <p>Food Truck Recommendations</p>
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
                    </div>
                    <div className={styles.textBar}>
                        <div className={styles.textBarText}>TRUCK NAME</div>
                        <div className={styles.textBarText}>PRICE</div>
                        <div className={styles.textBarText}>FOOD TYPE</div>
                        <div className={styles.textBarText}></div>
                    </div>
<<<<<<< HEAD
=======

>>>>>>> parent of 18eefb6d... Creating new Frontend folder
                </div>
                <div className = {styles.mapWrapper}>
                    { this.state.showMap === 'true' && <input id="pac-input" className={styles.controls, styles.mapInputBar} type="text" placeholder="Search..."/>}
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
export default UserDashboard;

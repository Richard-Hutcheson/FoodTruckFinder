import React, { Component } from 'react';
<<<<<<< HEAD
import {getUser, getTruckByName, getAllTrucks} from '../API/apiCalls';
=======
import {getUser, getTruckByName} from '../API/apiCalls';
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
import {Link} from "react-router-dom";
import styles from '../css/searchResult.module.css';

class SearchResult extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '',
            userID: '',
            password: '',
            email: '',
            address: '',
            state: '',
            city: '',
            role: '',            
            name: '',
            truckName: '',
            truckDesc: '',
            minPrice: '',
            maxPrice: '',
            foodType: '',
            truckOwner: '',
            queryType: 'invalid',
            searchQuery: '',
            noResults: 'false'
        }
        if (this.props.location.state != null){
            this.state.searchQuery = this.props.location.state.searchQuery;
            this.state.queryType = this.props.location.state.queryType;
            if (this.state.queryType === 'truck_name'){
                this.state.truckName = this.props.location.state.searchQuery;
            }
        }
        
        //PARSE by URL rather than PROPS
        else{
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            
            this.state.truckName = urlParams.get("query")
            this.state.queryType = urlParams.get("queryType");
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        let response = '...unknown...';
        console.log("-< ", this.state.queryType);

        if (this.state.queryType === 'user\'s username'){
            console.log(this.state.searchQuery)
            response = await getUser(this.state.searchQuery).catch(error =>{
                console.log(error.message);
                return;
            });
            if (response === '...unknown...'){
                window.confirm("NO RESULTS FOUND");
            }
            else if(response != null && response !== '...unknown...'){
                this.setState({
                    user: response.username,
                    userID: response.id,
                    password: response.password,
                    email: response.email,
                    address: response.address,
                    state: response.state,
                    city: response.city,
                    role: response.role,            
                    name: response.name,
                })
            }
        }else if ( this.state.queryType === 'truck_name'){
            response = await getTruckByName(this.state.truckName).catch(error =>{
                console.log(error.message);
            })
            if (response.status === 'NOT_FOUND'){
                window.confirm("NO RESULTS FOUND");
            
            }else{
                this.setState({
                    truckName: response.truckName,
                    truckDesc: response.description,
                    maxPrice: response.maxRange,
                    minPrice: response.minRange,
                    foodType: response.foodType,
                    truckOwner: response.owner.username,

                })
            }

<<<<<<< HEAD
        }else if (this.state.queryType === 'food type'){
             //GET ALL FOOD TRUCKS FOR FOOD TRUCK RECOMMENDATIONS
            response = await getAllTrucks().catch(error=>{
                console.log(error.message);
            })

            //response should be an array
            for (let i =0; i < response.length;++i){
                if (response[i].foodType === this.state.searchQuery){
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
=======
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
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
        //USER QUERY
        if (this.state.queryType === 'user\'s username'){
            return (
                <div>
                    <h1 className = {styles.header}>SEARCHING FOR "{this.state.searchQuery}"</h1>
                    <div className = {styles.userInfo}>
                        <div>
                            Name: <span>{this.state.name}</span>
                        </div>
                        <div>
                            Username: <span>{this.state.user}</span>
                        </div>
                        <div>
                            Email: <span>{this.state.email}</span>
                        </div>
                    </div>
                    <div className= {styles.userRevRat}>
                        <p>Reviews and Ratings Here</p>
                    </div>
                    <button className={styles.backBtn} onClick={()=>{this.props.history.goBack();}}>BACK</button>
                </div>
            );
        }
<<<<<<< HEAD

        else if (this.state.queryType === "truck_name"){
            return(
=======
        //FOOD TRUCK RELATED QUERY
        else{
            return (
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
                <div>
                    <h1 className = {styles.header}>SEARCHING FOR "{this.state.searchQuery}"</h1>
                    <div className = {styles.truckInfo}>
                        <div>
                            Food Truck: <span>{this.state.truckName}</span>
                        </div>
                        <div>
                            Food Type: <span>{this.state.foodType}</span>
                        </div>
                        <div>
                            Price Range: <span>${this.state.minPrice}...${this.state.maxPrice}</span>
                        </div>
                    </div>
                    <div className={styles.owner}>
                        <p>Truck Owner Username: {this.state.truckOwner}</p>
                    </div>
                    <div className={styles.truckDesc}>
                        <p>Description: "{this.state.truckDesc}"</p>
                    </div>
                    <div className= {styles.truckSchedule}>
                        <p>Truck Schedule</p>
                    </div>
                    <div className= {styles.truckRoute}>
                        <p>Truck Route</p>
                    </div>
<<<<<<< HEAD
                    <div className= {styles.truckMenu}>
                        <p>Truck Menu</p>
                    </div>
=======
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
                    <div className= {styles.truckRevRat}>
                        <p>Truck Reviews and Ratings Here</p>
                    </div>
                    <button className={styles.backBtn} onClick={()=>{this.props.history.goBack();}}>BACK</button>
                </div>
<<<<<<< HEAD
                
            );
        }


        //FOOD TRUCK RELATED QUERY
        else{
            return (
                <div>
                    <h1 className = {styles.header}>SEARCHING FOR "{this.state.searchQuery}"</h1>
                    <p  className = {styles.listTrucks}>TRUCK RESULTS HERE</p>
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
                    <button className={styles.backBtn} onClick={()=>{this.props.history.goBack();}}>BACK</button>

                </div>
=======
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
            );
        }
    

    }
    
}
export default SearchResult;

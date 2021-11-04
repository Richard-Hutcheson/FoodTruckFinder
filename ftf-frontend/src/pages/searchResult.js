import React, { Component } from 'react';
import {getUser, getTruckByName} from '../API/apiCalls';
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
            if (this.state.queryType === 'truck name'){
                this.state.truckName = this.props.location.state.searchQuery;
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        let response = '...unknown...';
        console.log("-< ", this.state.queryType);

        if (this.state.queryType === 'user\'s username'){
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
        }else if ( this.state.queryType === 'truck name'){
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
        //FOOD TRUCK RELATED QUERY
        else{
            return (
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
                    <div className= {styles.truckRevRat}>
                        <p>Truck Reviews and Ratings Here</p>
                    </div>
                    <button className={styles.backBtn} onClick={()=>{this.props.history.goBack();}}>BACK</button>
                </div>
            );
        }
    

    }
    
}
export default SearchResult;

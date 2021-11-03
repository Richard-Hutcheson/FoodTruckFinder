import React, { Component } from 'react';
import {getUser} from '../API/apiCalls';
import {Link} from "react-router-dom";
import styles from '../css/userDashboard.module.css';
import {callMaps} from "../API/googleMaps.js"

class UserDashboard extends Component{

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

        let map;
        try{
            callMaps(map);
        }catch(error){
            console.log("error in calling gMaps = ", error);
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

    render(){ 
        //GUEST USER
        if (this.state.guest == 'true'){
            return (
                <div>
                    <div className = {styles.navbar}>
                        <div className={styles.dropdownDiv}>
                            <button className={styles.dropbtn}>{this.state.user}</button>
                            <div className={styles.dropdownContent}>
                            </div>
                        </div>
                        <a href="/" className = {styles.logout}>EXIT</a>
                    </div>
                    <p>your user id = guest</p>
                    <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                        <div className={styles.searchFieldDiv}>
                            <input className={styles.searchField} type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
                        </div>
                        <div className={styles.searchBtnDiv}>
                            <button  className={styles.searchBtn} type="submit">Submit</button>
                        </div>
                    </form>
                    
                    <div className = {styles.mapWrapper}>
                        <div className = {styles.map} id = "map"></div>
                    </div>
                </div>
            );
        }else{
            return (
                <div>
                    <div className = {styles.navbar}>
                        <div className={styles.dropdownDiv}>
                            <button className={styles.dropbtn}>{this.state.user}</button>
                            <div className={styles.dropdownContent}>
                                <Link to= {{ pathname: "/ManageAccount", state: {username: this.state.user}}}>Manage Account</Link>
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
                    <div className = {styles.mapWrapper}>
                        <input id="pac-input" className={styles.controls, styles.mapInputBar} type="text" placeholder="Search..."/>
                        <div className={styles.map} id="map"></div>
                    </div>
                </div>
            );
        }
    }
}
export default UserDashboard;

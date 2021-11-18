import React, { Component } from 'react';
import styles from "../css/addFoodTruck.module.css"
import {getTruckByName, editTruck, deleteTruck, addTruck, getUser} from "../API/apiCalls.js"

class AddTruck extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            truckID: '',
            truckName: '',
            truckDesc: '',
            minPrice: '',
            maxPrice: '',
            foodType: '',
            truckOwner: '',
            menuURL: '',
            viewOnly: false,
            submitText: "SAVE",
            truckOwnerDetails: {},
            monday: '',
            sunday: '',
            saturday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            schedules: [<div key="-1"></div>],
            routes: [<div key = "-1"></div>],
        }
        if(this.props.location.state != null) {
            this.state.username = this.props.location.state.username;

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);        
        this.state.truckName = urlParams.get("truck");
    }

    async componentDidMount(){

    }

    async handleSubmit(event){
        event.preventDefault();

        if (event.target.id === "backBtn"){
            this.props.history.goBack();
        }else if (event.target.id === "formID"){
            
            
            this.setState({
                truckName: document.getElementById("truckNameField").value,
                foodType: document.getElementById("foodTypeField").value,
                truckDesc: document.getElementById(styles.descID).value,
                menuURL: document.getElementById("menuField").value,
                monday: document.getElementById("monday").value,
                tuesday: document.getElementById("tuesday").value,
                wednesday: document.getElementById("wednesday").value,
                thursday: document.getElementById("thursday").value,
                friday: document.getElementById("friday").value,
                saturday: document.getElementById("saturday").value,
                sunday: document.getElementById("sunday").value,
            });

            //this.setState({submitText: "SAVE", viewOnly: true});
            // document.querySelectorAll('.field').forEach(x=>{
            //     if (x.value !== ''){
            //         this.setState({[x.name]: x.value}, ()=>{
            //             this.addTruck();
            //         });
            //     }
            // });
        }
    }

    async addTruck(){
        // let user = await getUser(this.state.username);
        // console.log("USER: ", user);
        // console.log("USERNAME: ", this.state.username);
        // let userData = {
        //     truckID: this.state.truckID,
        //     truckName: this.state.truckName,
        //     owner: this.state.truckOwnerDetails,
        //     description: this.state.truckDesc,
        //     foodType: this.state.foodType,
        //     menuURL: this.state.menuURL,
        //     minRange: this.state.minPrice,
        //     maxRange: this.state.maxPrice,
        //     owner: user,
        // }

        // let response = await addTruck(userData).catch(error =>{
        //     console.log(error.message);
        // });
        // if(response != null) {
        //     //alert("Food Truck Created");
        //     this.props.history.goBack();
        //     console.log(response);
        // }
    }
    resetFields(){
        this.setState({submitText: 'EDIT'});
        this.setState({viewOnly: true});
        //clear input fields
        document.querySelectorAll('.field').forEach(function (x){
            x.value = '';
        });
    }
    render(){
        return (
            
        <div className={styles.bodyContainer}>
            <h1>Add Truck</h1>
            <form onSubmit={this.handleSubmit} id = "formID" className = {styles.formClass}>
                
                <label htmlFor="truckNameField">Truck Name:</label><br/>
                <input type="text" id="truckNameField" name = "truckName" placeholder={this.state.truckName} required/><br/>
                <label htmlFor="foodTypeField">Food Type:</label><br/>
                <input type="text" id="foodTypeField" name = "foodType" placeholder={this.state.foodType} required/><br/>
                <label htmlFor="descID">Truck Description:</label><br/>
                <textarea placeholder={this.state.truckDesc} name = "truckDesc"  disabled = {this.state.viewOnly} id = {styles.descID} required></textarea><br/>
                
                <label htmlFor="menuField">MENU</label><br/>
                <input type="text" id="menuField" name = "menuField" placeholder={this.state.menuURL}/><br/>

                <div className={styles.scheduleDiv}>
                    <p className = {styles.scheduleTitle}>Truck Schedule</p>
                    <div className = {styles.customBorder}></div>
                    <div className={styles.weekDiv}>
                        <p>MON</p>
                        <p>TUES</p>
                        <p>WED</p>
                        <p>THURS</p>
                        <p>FRI</p>
                        <p>SAT</p>
                        <p>SUN</p>
                        <input type = "text" placeholder = "xx:xxAM-xx:xxAM" id = "monday" required/>
                        <input type = "text" placeholder = "xx:xxAM-xx:xxAM" id = "tuesday" required/>
                        <input type = "text" placeholder = "xx:xxAM-xx:xxAM" id = "wednesday" required/>
                        <input type = "text" placeholder = "xx:xxAM-xx:xxAM" id = "thursday" required/>
                        <input type = "text" placeholder = "xx:xxAM-xx:xxAM" id = "friday" required/>
                        <input type = "text" placeholder = "xx:xxAM-xx:xxAM" id = "saturday" required/>
                        <input type = "text" placeholder = "xx:xxAM-xx:xxAM" id = "sunday" required/>
                    </div>

                </div>
                <div className = {styles.routeDiv}>
                    <p className = {styles.routeTitle}>Truck Route</p>
                    <div className = {styles.customBorder}></div>
                    <div className={styles.addressDiv}>
                        <p>ADDRESS</p>
                        <p>CITY</p>
                        <p>STATE</p>
                    </div>
                    <div className = {styles.routeContent}>
                        {this.state.routes}
                    </div>
                    <button className = {styles.addRouteBtn}>ADD ROUTE</button>
                </div>
                <button id = "editBtn" className = {styles.editBtn} type="submit" value={this.state.submitText}>{this.state.submitText}</button>
            </form>
                {/*<button id = "delTruck" className = {styles.delTruck} onClick = {this.handleSubmit}>DELETE TRUCK</button>*/}
            <button id = "backBtn"  className = {styles.backBtn} onClick={this.handleSubmit}>BACK</button>

        </div>
        );
    }
}
export default AddTruck;
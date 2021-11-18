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
        }
        if(this.props.location.state != null) {
            this.state.username = this.props.location.state.username;

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createTruck = this.createTruck.bind(this);

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
                submitText: "SAVE",
                viewOnly: true,
            }, ()=>{this.createTruck();});
        }
    }

    async createTruck(){
        let user = await getUser(this.state.username);
        let truckData = {
            truckName: this.state.truckName,
            owner: this.state.truckOwnerDetails,
            description: this.state.truckDesc,
            foodType: this.state.foodType.toUpperCase(),
            menuURL: this.state.menuURL,
            minRange: this.state.minPrice,
            maxRange: this.state.maxPrice,
            owner: user,
        }
        console.log(truckData);
        let response = await addTruck(truckData).catch(error =>{
            console.log(error.message);
        });
        if(response != null) {
            //alert("Food Truck Created");
            this.props.history.goBack();
            console.log(response);
        }
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

                <button id = "editBtn" className = {styles.editBtn} type="submit" value={this.state.submitText}>{this.state.submitText}</button>
            </form>
                {/*<button id = "delTruck" className = {styles.delTruck} onClick = {this.handleSubmit}>DELETE TRUCK</button>*/}
            <button id = "backBtn"  className = {styles.backBtn} onClick={this.handleSubmit}>BACK</button>

        </div>
        );
    }
}
export default AddTruck;
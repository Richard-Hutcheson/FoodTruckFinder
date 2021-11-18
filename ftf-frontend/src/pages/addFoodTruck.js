import React, { Component } from 'react';
import styles from "../css/editFoodTruck.module.css"
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
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);        
        this.state.truckName = urlParams.get("truck");
        console.log(this.state.truckName);
    }

    async componentDidMount(){
        /*
        let response = await getTruckByName(this.state.truckName).catch(error =>{
            console.log(error.message);
        });
        console.log(response);
        /*
        this.setState({truckID: response.truckID, truckDesc: response.description, 
            minPrice: response.minRange, maxPrice: response.maxRange,
            foodType: response.foodType, truckOwner: response.owner.username, truckOwnerDetails: response.owner, menuURL: response.menuURL});
            */
    }

    async handleSubmit(event){
        event.preventDefault();

        if (event.target.id === "backBtn"){
            this.props.history.goBack();
        }else if (event.target.id === "formID"){
            //this.setState({submitText: "SAVE", viewOnly: true});
            document.querySelectorAll('.field').forEach(x=>{
                if (x.value !== ''){
                    this.setState({[x.name]: x.value}, this.callFunction);
                }
            });
        }
        /*
        else if (event.target.id === 'delTruck'){
            if (window.confirm("Are you sure you want to delete this truck?")){
                console.log("del");

                await deleteTruck(this.state.truckName);
                window.confirm("Truck Deleted");
                this.props.history.goBack();
                
            }else{
                console.log('no');
            }

        }
        */
    }
    callFunction = ()=>{
        this.saveTruck();        
    }
    async saveTruck(){
        let user = await getUser(this.state.username);
        console.log("USER: ", user);
        console.log("USERNAME: ", this.state.username);
        let userData = {
            truckID: this.state.truckID,
            truckName: this.state.truckName,
            owner: this.state.truckOwnerDetails,
            description: this.state.truckDesc,
            foodType: this.state.foodType,
            menuURL: this.state.menuURL,
            minRange: this.state.minPrice,
            maxRange: this.state.maxPrice,
            owner: user
        }

        console.log(userData);


        let response = await addTruck(userData).catch(error =>{
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
                <input type="text" id="truckNameField" name = "truckName" className="field" placeholder={this.state.truckName} disabled = {this.state.viewOnly}/><br/>
                <label htmlFor="foodTypeField">Food Type:</label><br/>
                <input type="text" id="foodTypeField" name = "foodType" className="field" placeholder={this.state.foodType} disabled = {this.state.viewOnly}/><br/>
                <label htmlFor="descID">Truck Description:</label><br/>
                <textarea placeholder={this.state.truckDesc} name = "truckDesc" className="field" disabled = {this.state.viewOnly} id = {styles.descID}></textarea><br/>
                
                <label htmlFor="menuField">MENU</label><br/>
                <input type="text" id="menuField" name = "menuField" className="field" placeholder={this.state.menuURL} disabled = {this.state.viewOnly}/><br/>
                <p>SCHEDULE</p>
                <div className={styles.scheduleDiv}></div>
                <p>ROUTE</p>
                <div className={styles.routeDiv}></div>
                <button id = "editBtn" className = {styles.editBtn} type="submit" value={this.state.submitText}>{this.state.submitText}</button>
            </form>
                {/*<button id = "delTruck" className = {styles.delTruck} onClick = {this.handleSubmit}>DELETE TRUCK</button>*/}
            <button id = "backBtn"  className = {styles.backBtn} onClick={this.handleSubmit}>BACK</button>

        </div>
        );
    }
}
export default AddTruck;
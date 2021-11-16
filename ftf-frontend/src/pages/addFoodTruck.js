import React, { Component } from 'react';
import styles from "../css/addFoodTruck.module.css"
import {getTruckByName, editTruck, deleteTruck, addTruck} from "../API/apiCalls.js"

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
            viewOnly: false,
            submitText: "SAVE",
            truckOwnerDetails: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);        
        this.state.truckName = urlParams.get("truck");
        console.log(this.state.truckName);
    }

    async componentDidMount(){
        let response = await getTruckByName(this.state.truckName).catch(error =>{
            console.log(error.message);
        });
    }

    async handleSubmit(event){
        event.preventDefault();

        if (event.target.id === "backBtn"){
            this.props.history.goBack();
        }else if (event.target.id === "formID"){
            //await addTruck(this.state);
/*
            let udm = new Map();

            udm.set('truckName', this.state.truckName);
            udm.set('foodType', this.state.foodType);
            udm.set('description', this.state.truckDesc);
            udm.set('owner', this.state.truckOwnerDetails);
            udm.set('maxRange', this.state.maxPrice);
            udm.set('minRange', this.state.minPrice);
            udm.set('truckID', this.state.truckID);

            await addTruck(udm);

            this.props.history.goBack();
*/
            if (this.state.submitText === "EDIT"){
                this.setState({submitText: "SAVE", viewOnly: false});
                
            }else{
                this.setState({submitText: "EDIT", viewOnly: true});
                document.querySelectorAll('.field').forEach(x=>{
                    if (x.value !== ''){
                        this.setState({[x.name]: x.value}, this.callFunction);
                    }
                });
            }

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
        let udm = new Map();

        console.log('state = ', this.state.foodType);
        udm.set('truckName', this.state.truckName);
        udm.set('foodType', this.state.foodType);
        udm.set('description', this.state.truckDesc);
        udm.set('owner', this.state.truckOwnerDetails);
        udm.set('maxRange', this.state.maxPrice);
        udm.set('minRange', this.state.minPrice);
        udm.set('truckID', this.state.truckID);
        await addTruck(udm);
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
            <form onSubmit={this.handleSubmit} id = "formID">
                
                <label htmlFor="truckNameField">Truck Name:</label><br/>
                <input type="text" id="truckNameField" name = "truckName" className="field" placeholder={this.state.truckName} disabled = {this.state.viewOnly}/><br/>
                <label htmlFor="foodTypeField">Food Type:</label><br/>
                <input type="text" id="foodTypeField" name = "foodType" className="field" placeholder={this.state.foodType} disabled = {this.state.viewOnly}/><br/>
                <label htmlFor="descID">Truck Description:</label><br/>
                <textarea placeholder={this.state.truckDesc} name = "truckDesc" className="field" disabled = {this.state.viewOnly} id = "descID"></textarea>
                <div className={styles.menuDiv}><p>MENU</p></div>
                <div className={styles.scheduleDiv}><p>SCHEDULE</p></div>
                <div className={styles.routeDiv}><p>ROUTE</p></div>
                <input type="submit" value={this.state.submitText}/>
            </form>
            <button id = "backBtn" onClick={this.handleSubmit}>BACK</button>

        </div>
        );
    }
}
export default AddTruck;
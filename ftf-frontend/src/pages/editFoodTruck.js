import React, { Component } from 'react';
import styles from "../css/editFoodTruck.module.css"
import {getTruckByName, editTruck, deleteTruck} from "../API/apiCalls.js"

class EditTruck extends Component{
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
            menuURL: 'url here',
            viewOnly: true,
            submitText: "EDIT",
            truckOwnerDetails: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.state.truckName = urlParams.get("truck");
    }

    async componentDidMount(){
        
        let response = await getTruckByName(this.state.truckName).catch(error =>{
            console.log(error.message);
        });
        this.setState({truckID: response.truckID, truckDesc: response.description, 
            minPrice: response.minRange, maxPrice: response.maxRange,
            foodType: response.foodType, truckOwner: response.owner.username, truckOwnerDetails: response.owner, menuURL: response.menuURL});
    }

    async handleSubmit(event){
        event.preventDefault();

        if (event.target.id === "backBtn"){
            this.props.history.goBack();
        }
        
        else if (event.target.id === "formID"){
            //user is editing
            if (this.state.submitText === "EDIT"){
                this.setState({submitText: "SAVE", viewOnly: false});
            }
            //user is saving
            else{
                this.setState({submitText: "EDIT", viewOnly: true});
                document.querySelectorAll('.field').forEach(x=>{
                    if (x.value !== ''){
                        if (x.name === 'foodType'){
                            x.value = x.value.toUpper();
                        }
                        this.setState({[x.name]: x.value}, this.callFunction);
                    }
                });
                let tempVal = document.querySelector('#menuField').value
                if (tempVal !== ''){
                    this.setState({menuURL: tempVal});
                }
            }
        }
        else if (event.target.id === 'delTruck'){
            if (window.confirm("Are you sure you want to delete this truck?")){
                console.log("del");

                await deleteTruck(this.state.truckName);
                window.confirm("Truck Deleted");
                this.props.history.goBack();
                
            }else{
            }
        }
    }
    callFunction = ()=>{
        this.saveTruck();        
    }
    async saveTruck(){
        let userData = {
            truckID: this.state.truckID,
            truckName: this.state.truckName,
            owner: this.state.truckOwnerDetails,
            description: this.state.truckDesc,
            foodType: this.state.foodType,
            menuURL: this.state.menuURL,
            minRange: this.state.minPrice,
            maxRange: this.state.maxPrice,
        }
        
        await editTruck(userData);
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
            <h1>Edit Truck</h1>
            <form onSubmit={this.handleSubmit} id = "formID" className = {styles.formClass}>
                
                <label htmlFor="truckNameField">Truck Name:</label><br/>
                <input type="text" id="truckNameField" name = "truckName" className="field field2" placeholder={this.state.truckName} disabled = {this.state.viewOnly}/><br/>
                <label htmlFor="foodTypeField">Food Type:</label><br/>
                <input type="text" id="foodTypeField" name = "foodType" className="field field2" placeholder={this.state.foodType} disabled = {this.state.viewOnly}/><br/>
                <label htmlFor="descID">Truck Description:</label><br/>
                <textarea placeholder={this.state.truckDesc} name = "truckDesc" className="field field2" disabled = {this.state.viewOnly} id = {styles.descID}></textarea><br/>

                <label htmlFor="minPriceField">Min Price: </label><br/>
                <input min="0" type="number" id="minPriceField" name = "minPrice" className="field field2" placeholder={this.state.minPrice} disabled = {this.state.viewOnly}/><br/>
                <label htmlFor="maxPriceField">Max Price: </label><br/>
                <input type="number" id="maxPriceField" name = "maxPrice" className="field field2" placeholder={this.state.maxPrice} disabled = {this.state.viewOnly}/><br/>

                <label htmlFor="menuField">MENU</label><br/>
                {this.state.menuURL == null && 
                    <input type="text" id="menuField" name = "menuField" className="field field2" placeholder="url here" disabled = {this.state.viewOnly}/>
                }
                {this.state.menuURL != null && 
                    <input type="text" id="menuField" name = "menuField" className="field field2" placeholder={this.state.menuURL} disabled = {this.state.viewOnly}/>
                }
                <br/>
                <p>SCHEDULE</p>
                <div className={styles.scheduleDiv}></div>
                <p>ROUTE</p>
                <div className={styles.routeDiv}></div>
                <button id = "editBtn" className = {styles.editBtn} type= "submit" value={this.state.submitText}>{this.state.submitText}</button>
            </form>
            <button id = "delTruck" className = {styles.delTruck} onClick = {this.handleSubmit}>DELETE TRUCK</button>
            <button id = "backBtn"  className = {styles.backBtn} onClick={this.handleSubmit}>BACK</button>
            {/* <a href="https://ibb.co/qptvrQ9"><img src="https://i.ibb.co/FzSFDTJ/test-menu.jpg" alt="test-menu" border="0"/></a> */}
        </div>
        );
    }
}
export default EditTruck;
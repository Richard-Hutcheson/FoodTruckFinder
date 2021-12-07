import React, { Component } from 'react';
import styles from "../css/editFoodTruck.module.css"
import {getTruckByName,getUser, editTruck, deleteTruck, addRoute, getRoutes, deleteRoute, getSubscriptionsByTruck} from "../API/apiCalls.js"
import { geocodeSearch, printVar } from '../API/helperFunctions';
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

class EditTruck extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            userID: '',
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
            subbedUsers: [],
            routes: [],
            pendingRoutes: [],
            schedules: [],
            keyCount: 0,
            stopCount: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.displayRoutes = this.displayRoutes.bind(this);
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
            foodType: response.foodType, username: response.owner.username, truckOwner: response.owner.username, truckOwnerDetails: response.owner, menuURL: response.menuURL});
        //get routes from truck
        //make sure to append routes to routes and to increment keyCount
        response = await getRoutes(this.state.truckName).catch(error=>{console.log(error.message)});
        console.log("routes: ", response);
        for (let i = 0; i < response.length; i++){
            let newRoute= {
                'address': response[i].address,
                'city': response[i].city,
                'state': response[i].state,
                'schedule': response[i].schedule,
                'key': this.state.keyCount,
            }
            let tempRoutes = this.state.routes;
            tempRoutes.push(newRoute);
            this.setState({routes: tempRoutes, keyCount: this.state.keyCount+1});
        }
        //GET SUBSCRIBED USERS
        response = await getSubscriptionsByTruck(this.state.truckName).catch(error=>console.log(error.message));
        let arr = this.state.subbedUsers;
        let key = this.state.keyCount;
        for (let i = 0; i < response.length; i++){
            let newSub = <div className = {styles.userRow} key = {key}>{response[i].user.username}</div>
            arr.push(newSub);
            key++;
        }
        this.setState({subbedUsers: arr, keyCount: key});

    }

    async handleSubmit(event){
        event.preventDefault();
        if (event.target.id === "backBtn"){
            let user = await getUser(this.state.username);
            this.props.history.push({
                pathname: '/ManageFoodTrucks',
                state: {username: this.state.username, userID: user.id, role: user.role}} // your data array of objects
            );    
        }
        
        else if (event.target.id === "formID"){
            //user is editing
            if (this.state.submitText === "EDIT"){
                this.setState({submitText: "SAVE", viewOnly: false});
            }
            //user is saving
            else{
    
                this.setState({submitText: "EDIT", viewOnly: true});
                let form = event.target;
                this.setState({
                    truckName: form.truckName.value !== ''? form.truckName.value : this.state.truckName,
                    foodType: form.foodType.value !== ''? form.foodType.value.toUpperCase() : this.state.foodType.toUpperCase(),
                    truckDesc: form.truckDesc.value !== ''? form.truckDesc.value : this.state.truckDesc,
                    minPrice: form.minPrice.value !== ''? form.minPrice.value : this.state.minPrice,
                    maxPrice: form.maxPrice.value !== ''? form.maxPrice.value : this.state.maxPrice,
                    menuURL: form.menuURL.value !== ''? form.menuURL.value : this.state.menuURL,
                }, this.saveTruck);
            }
        }
        else if (event.target.id === 'delTruck'){
            if (window.confirm("Are you sure you want to delete this truck?")){
                let response = await deleteTruck(this.state.truckName).catch(e=>{console.log(e.message);});
                window.confirm("Truck Deleted");
                this.props.history.push('/ManageFoodTrucks',
                    {username: this.state.username, userID: this.state.truckOwnerDetails['id']
                })
            }else{
            }
        }
        else if (event.target.id === 'addRouteBtn'){
            let newRoute=
            <div className = {styles.newRouteDiv} key = {this.state.keyCount}>
                <input type = "text" id = {"address"+this.state.keyCount} className = {styles.routeAddress} required disabled = {this.state.viewOnly}/>
                <input type = "text" id = {"city"+this.state.keyCount} className = {styles.routeCity} required disabled = {this.state.viewOnly}/>
                <input type = "text" id = {"state"+this.state.keyCount} className = {styles.routeState}
                maxLength = "2" minLength = "2" placeholder="(ex: 'TX')" pattern = "[A-Za-z][A-Za-z]" required disabled = {this.state.viewOnly}/>
                <input type = "text" id = {"schedule"+this.state.keyCount} className = {styles.routeSchedule} required disabled = {this.state.viewOnly}/>
                <button id = {"delBtn"+this.state.keyCount} type = "button" className = {styles.routeDelBtn} onClick={this.handleRemove} disabled = {this.state.viewOnly}>X</button>
            </div>;
            let tempRoutes = this.state.routes;
            let tempPendingRoutes = this.state.pendingRoutes;
            tempRoutes.push(newRoute);
            tempPendingRoutes.push(newRoute);
            this.setState({routes: tempRoutes, keyCount: this.state.keyCount+1, pendingRoutes: tempPendingRoutes});
        }

    }
    //this function is necessary rather than creating the html directly into the array is because we want to preserve the state variables
    displayRoutes(){
        let arr = []
        for (let i = 0; i < this.state.routes.length; i++){
            let x =  
            <div className = {styles.newRouteDiv} key = {this.state.routes[i].key}>
                <input type = "text" id = {"address"+String(this.state.routes[i].key)} className = {styles.routeAddress} required disabled = {this.state.viewOnly} value = {this.state.routes[i].address}/>
                <input type = "text" id = {"city"+String(this.state.routes[i].key)} className = {styles.routeCity} required disabled = {this.state.viewOnly} value = {this.state.routes[i].city}/>
                <input type = "text" id = {"state"+String(this.state.routes[i].key)} className = {styles.routeState} value = {this.state.routes[i].state}
                    maxLength = "2" minLength = "2" placeholder="(ex: 'TX')" pattern = "[A-Za-z][A-Za-z]" required disabled = {this.state.viewOnly}/>
                <input type = "text" id = {"schedule"+String(this.state.routes[i].key)} className = {styles.routeSchedule} required disabled = {this.state.viewOnly} value = {this.state.routes[i].schedule}/>
                <button id = {"delBtn"+String(this.state.routes[i].key)} type = "button" className = {styles.routeDelBtn} onClick={this.handleDel} disabled = {this.state.viewOnly}>X</button>
            </div>;
            arr.push(x);
        }
        return (arr)
    }

    handleRemove(event){
        let ndx = event.target.id.substring(6); //cut out "delBtn to reveal the keyCount which is also the ndx in the routes array it is in"
        let tempRoutes = this.state.routes;
        let tempPendRoutes = this.state.pendingRoutes;
        // tempRoutes.forEach(function(x, i){if (ndx === x.key){tempRoutes.splice(i, 1);}})
        for (let i = 0; i < tempRoutes.length; i++){
            if (ndx === tempRoutes[i].key){
                tempRoutes.splice(i, 1);
                break;
            }
        }
        for (let i = 0; i < tempPendRoutes.length; i++){
            if (ndx === tempPendRoutes[i].key){
                tempPendRoutes.splice(i, 1);
                break;
            }
        }
        this.setState({routes: tempRoutes, pendingRoutes: tempPendRoutes});
    }
    async handleDel(event){
        let ndx = event.target.id.substring(6); //cut out "delBtn to reveal the keyCount which is also the ndx in the routes array it is in"
        let tempRoutes = this.state.routes;
        // tempRoutes.forEach(function(x, i){if (ndx === x.key){tempRoutes.splice(i, 1);}})
        let address = '', city = '', state ='', schedule = '';
        console.log(tempRoutes, ndx)

        for (let i = 0; i < tempRoutes.length; i++){
            if (ndx == tempRoutes[i].key){
                address = (tempRoutes[i].address);
                city = (tempRoutes[i].city);
                state = (tempRoutes[i].state);
                // schedule = (tempRoutes[i].props.children[3].props.value);
                tempRoutes.splice(i, 1);                
                break;
            }
        }
        let response = await deleteRoute(this.state.truckName, address, city, state);
        this.setState({routes: tempRoutes});

    }

    async saveTruck(){

        let truckData = {
            truckID: this.state.truckID,
            truckName: this.state.truckName,
            owner: this.state.truckOwnerDetails,
            description: this.state.truckDesc,
            foodType: this.state.foodType,
            menuURL: this.state.menuURL,
            minRange: this.state.minPrice,
            maxRange: this.state.maxPrice,
        }
        console.log("pending routes = ", this.state.pendingRoutes);
        let len = this.state.pendingRoutes.length < 10? this.state.pendingRoutes.length : 9;

        for (let i = 0; i < len; i++){
            //address
            let tempAddress = document.getElementById(this.state.pendingRoutes[i].props.children[0].props.id).value
            //city
            let tempCity = document.getElementById(this.state.pendingRoutes[i].props.children[1].props.id).value;
            //state
            let tempState = document.getElementById(this.state.pendingRoutes[i].props.children[2].props.id).value;
            //schedule
            let tempSchedule = document.getElementById(this.state.pendingRoutes[i].props.children[3].props.id).value;
            let fullS = tempAddress + ", " + tempCity + ", " + tempState;
            // let latLng = await this.geocode(fullS);
            //add route
            let coords = await this.callFunc("Eiffel Tower");
            console.log(coords.lat.toString(), ", ", coords.lng.toString());
            let response = await addRoute(this.state.truckName, tempAddress, tempCity, tempState, tempSchedule, coords.lat.toString(), coords.lng.toString()).catch(error=>{
                console.log(error.message);
            });


        }
        //clear pendingRoutes
        this.setState({pendingRoutes: []});
        await editTruck(truckData).catch(error=>{console.log(error.message);});
        window.location.reload(false);
    }
    callFunc = async (val) => Geocode.fromAddress(val).then((response)=>{
        const { lat, lng } = response.results[0].geometry.location;
        return {lat: lat, lng: lng};
      },
      (error) => {
        console.error(error.message);
      }
    );
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
            <h1 className = {styles.title}>Edit Truck</h1>
            <form onSubmit={this.handleSubmit} id = "formID" className = {styles.formClass}>
                <div className={styles.editableCont}>
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

                    <label htmlFor="menuField">Menu URL</label><br/>
                    {this.state.menuURL == null && 
                        <input type="text" id="menuField" name = "menuURL" className="field field2" placeholder="url here" disabled = {this.state.viewOnly}/>
                    }
                    {this.state.menuURL != null && 
                        <input type="text" id="menuField" name = "menuURL" className="field field2" placeholder={this.state.menuURL} disabled = {this.state.viewOnly}/>
                    }
                    <br/>
                </div>
                <div className = {styles.routeDiv}>
                    <p className = {styles.routeTitle}><b>Truck Route</b></p>
                    {/* <div className = {styles.customBorder}></div> */}
                    <div className={styles.addressDiv}>
                        <p>ADDRESS</p>
                        <p>CITY</p>
                        <p>STATE</p>
                        <p>SCHEDULE</p>
                    </div>
                    <div className = {styles.routeContent}>
                        {this.displayRoutes()}
                    </div>
                    <button id = "addRouteBtn" onClick = {this.handleSubmit} type = "button" className = {styles.addRouteBtn} disabled = {this.state.viewOnly}>ADD ROUTE</button>
                </div>
                <div className = {styles.subscribedUsers}>
                    <p className = {styles.subTitle}><b>Subscribed Users:</b> {this.state.subbedUsers.length}</p>
                    <div className ={styles.subContent}>
                        {this.state.subbedUsers}
                    </div>
                </div>
                <button id = "editBtn" className = {styles.editBtn} type= "submit" value={this.state.submitText}>{this.state.submitText}</button>
            </form>

            <button id = "delTruck" type = "button" className = {styles.delTruck} onClick = {this.handleSubmit}>DELETE TRUCK</button>
            <button id = "backBtn"  type = "button" className = {styles.backBtn} onClick={this.handleSubmit}>BACK</button>
        </div>
        );
    }
}
export default EditTruck;
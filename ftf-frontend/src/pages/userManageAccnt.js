import React, { Component } from 'react';
import {editUser, getUser} from '../API/apiCalls';
import styles from '../css/manageAccnt.module.css';
import { getFoodTypes } from '../API/helperFunctions';
import {Link} from "react-router-dom";

<<<<<<< HEAD
const LOW_RANGE = 1;
const MID_RANGE = 15;
const HIGH_RANGE = 30;
const MAX_RANGE = 99999;

=======
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
class UserManageAccount extends Component{

    constructor(props){
        super(props);
        this.state = {
            userid: '-1',
            name: 'unknown',
            username: 'unknown',
            password: 'unknown',
            email: 'unknown',
            address: 'unknown',
            state: 'unknown',
            city: 'unknown',
            role: 'unknown',
            submitState: 'EDIT',
            viewOnly: true,
            distSliderVal: 10,
<<<<<<< HEAD
            priceSelected: "No Preference",
            minPricePref: null,
            maxPricePref: null,
            distPreference: "No Preference",
            distCity: "unknown",
            foodTypePref: "No Preference",
            tempFoodTypePref: "No Preference",
=======
            priceSelected: "No Preference"
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
            
        }
        if (this.props.location.state != null){
            this.state.username = this.props.location.state.username;
            this.state.password = this.props.location.state.password;
            this.state.name = this.props.location.state.name;
            this.state.email = this.props.location.state.email;
            this.state.address = this.props.location.state.address;
            this.state.state = this.props.location.state.state;
            this.state.city = this.props.location.state.city;
            this.state.role = this.props.location.state.role;
<<<<<<< HEAD
=======
            console.log("REACHED IF STATEMENT ROLE: ", this.state.role);
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    async componentDidMount(){
        let response = await getUser(this.state.username).catch(
            error=>{
                console.log(error.message);
            }
        );
<<<<<<< HEAD

            
        let foodTypeList = getFoodTypes();
        let container = document.getElementById("foodTypeID");
        for (let i = 0; i < foodTypeList.length; i++){
            let item = document.createElement('option');
            item.setAttribute('value', foodTypeList[i]);
            item.innerHTML = foodTypeList[i];
            container.appendChild(item);
        }


=======
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
        if (response == null){
            response = "unable to retrieve";
            console.log("response = ", response);
        }
        else{
<<<<<<< HEAD
            //if user has a preference, set selector accordingly
            if (response.maxPricePref >= LOW_RANGE && response.maxPricePref <= MID_RANGE){
                this.setState({priceSelected: "$"});

            }else if (response.maxPricePref >= MID_RANGE && response.maxPricePref <= HIGH_RANGE){
                this.setState({priceSelected: "$$"});

            }else if (response.maxPricePref >= HIGH_RANGE){
                this.setState({priceSelected: "$$$"});
            }else{
                this.setState({priceSelected: "No Preference"});
            }

            if (response.cityPref == null || response.cityPref === "No Preference" || response.cityPref === "unknown"){
                this.setState({cityPref: null, distPreference: "No Preference"});
            }else{
                this.setState({cityPref: response.cityPref, distPreference: "sameCity"});

            }

            if (response.foodTypePref == "No Preference" || response.foodTypePref == null){
                this.setState({foodTypePref: "No Preference", tempFoodTypePref: "No Preference"});
            }else{
                this.setState({foodTypePref: response.foodTypePref, tempFoodTypePref: response.foodTypePref});
            }
=======
>>>>>>> parent of 18eefb6d... Creating new Frontend folder

            this.setState({
                userid: response.id, 
                username: response.username,
                password: response.password, 
                name: response.name,
                address: response.address,
                city: response.city,
                state: response.state,
                email: response.email,
<<<<<<< HEAD
                role: response.role,
            } );
        }

    }

    handleChange(event){
        event.preventDefault();
        // if (event.target.id === "distSlider"){
        //     let slider = document.getElementById("distSlider");
        //     let output = document.getElementById("milesID");
        //     output.innerHTML = slider.value;
    
        //     slider.oninput = function() {
        //         output.innerHTML = this.value;
        //     }
        //     this.setState({distSliderVal: event.target.value})
        // }else{
        //     const target = event.target;
        //     const value = target.type === 'checkbox' ? target.checked : target.value;
        //     const name = target.name;
        //     // this.setState({[name]:value});
        //     console.log("name = " + name + " value = " + value);
        // }
        if (event.target.id === "foodTypeID"){
            console.log(event.target.value);
            this.setState({tempFoodTypePref: event.target.value})
        }
=======
                role: response.role} );
            // this.setState({username: response.username});
            // this.setState({password: response.password});
            // this.setState({name: response.name});
            // this.setState({address: response.address});
            // this.setState({city: response.city});
            // this.setState({state: response.state});
            // this.setState({email: response.email});
            // this.setState({role: response.role});

        }

        let foodTypeList = getFoodTypes();
        let container = document.getElementById("foodTypeID");
        for (let i = 0; i < foodTypeList.length; i++){
            let item = document.createElement('option');
            item.setAttribute('value', foodTypeList[i]);
            item.innerHTML = foodTypeList[i];
            container.appendChild(item);
        }
    }
    handleChange(event){
        event.preventDefault();
        if (event.target.id === "distSlider"){
            let slider = document.getElementById("distSlider");
            let output = document.getElementById("milesID");
            output.innerHTML = slider.value;
    
            slider.oninput = function() {
                output.innerHTML = this.value;
            }
            this.setState({distSliderVal: event.target.value})
        }else{
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            // this.setState({[name]:value});
            console.log("name = " + name + " value = " + value);
        }
        

>>>>>>> parent of 18eefb6d... Creating new Frontend folder
    }
    handleSubmit(event){
        event.preventDefault();
        if (event.target.id === "submitID"){
            if (this.state.submitState === "EDIT"){
                this.setState({submitState: 'SAVE'});
                this.setState({viewOnly: false});
<<<<<<< HEAD
            }
            //The accnt detials are saved
            else{
=======
            }else{
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
                //make sure all values are correct length, if they are out of length then don't save!
                let cont = true;
                document.querySelectorAll('.field').forEach(x=>{
                    console.log("x.name = ", x.name, " and length = ", x.value.length);
                    if ((x.name === "state" && x.value.length != 2) || (x.value.length > 254)){
                        cont = false;
                    }
                });
                if (!cont){
                    window.confirm(`Length of one or more fields exceeds maximum char length.\
                        State must be two alphabetical characters. Other fields must be < 254 chars`);
                    return;
                }
                //user potentially made changes, save
                document.querySelectorAll('.field').forEach(x=>{
                    //user made change
                    if (x.value !== ''){
                        this.setState({[x.name]: String(x.value)}, this.callFunction);
                    }else{
                    }
                });
                this.resetFields();
            }
        }
        else if (event.target.id === 'cancelID'){
            this.resetFields();
        }
<<<<<<< HEAD
        //SAVE FOOD TRUCK PREFERENCES
        else if (event.target.id === 'prefFormID'){
            console.log("form submitted");
            let foodTypePrefSelection = document.getElementById("foodTypeID");
            let selection = foodTypePrefSelection.options[foodTypePrefSelection.selectedIndex].value;
            if (selection === "No Preference"){
                selection = null;
            }
            this.setState({foodTypePref: selection}, f=>{
                console.log(this.state.priceSelected + "\n" + this.state.distPreference + "\n" + this.state.foodTypePref);
                this.saveUser();

            });
=======
        else if (event.target.id === 'prefFormID'){
            console.log("form submitted");
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
        }
        else{

        }
    }
    resetFields(){
        this.setState({submitState: 'EDIT'});
        this.setState({viewOnly: true});
        //clear input fields
        document.querySelectorAll('.field').forEach(function (x){
            x.value = '';
        });
    }
    

    onValueChange(event){
<<<<<<< HEAD
        if (event.target.name === "price"){
            if (event.target.value === "$"){
        
                this.setState({minPricePref: LOW_RANGE, maxPricePref: MID_RANGE, priceSelected: "$"});
            }else if (event.target.value === "$$"){
                this.setState({minPricePref: MID_RANGE, maxPricePref: HIGH_RANGE, priceSelected: "$$"});

            }else if (event.target.value === "$$$"){
                this.setState({minPricePref: HIGH_RANGE, maxPricePref: MAX_RANGE, priceSelected: "$$$"});
            }else{
                this.setState({minPricePref: null, maxPricePref: null, priceSelected: "No Preference"});
            }
        }else if (event.target.name === "distPref"){
            if (event.target.value === "No Preference"){
                this.setState({distPreference: event.target.value, distCity: null})
            }else{
                this.setState({distPreference: event.target.value, distCity: this.state.city})
            }
            
        }
=======
        this.setState({priceSelected: event.target.value})
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
    }
    callFunction = ()=>{
        this.saveUser();        
    }
    async saveUser(){
<<<<<<< HEAD
        let userData = {
            id: this.state.userid,
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            state: this.state.state,
            city: this.state.city,
            foodTypePref: this.state.foodTypePref,
            cityPref: this.state.distCity,
            maxPricePref: this.state.maxPricePref,
            minPricePref: this.state.minPricePref,
        }
        await editUser(userData);
=======
        let udm = new Map();
        udm.set('userID', this.state.userid);
        udm.set('username', this.state.username);
        udm.set('password', this.state.password);
        udm.set('name', this.state.name);
        udm.set('email', this.state.email);
        udm.set('address', this.state.address);
        udm.set('state', this.state.state);
        udm.set('city', this.state.city);
        await editUser(udm);
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
    }
    
    render(){ 
        return (
            <div>
                <h1 className={styles.header}>MANAGE ACCOUNT</h1>
                <div className={styles.formContainer}>
                    <div className = {styles.userForm}>
                        <label htmlFor="name" className = {styles.nameLabel, styles.label}>name:</label>
                        <input className={styles.nameField, "field"} type="text" name="name" onChange={this.handleChange} placeholder={this.state.name} disabled = {this.state.viewOnly}/>
                        <label htmlFor="username" className = {styles.usernameLabel, styles.label}>username:</label>
                        <input className={styles.usernameField, "field"} type="text" name="username" onChange={this.handleChange} placeholder={this.state.username} disabled= {this.state.viewOnly}/>
                        <label htmlFor="password" className = {styles.passwordLabel, styles.label}>password:</label>
                        <input className={styles.passwordField, "field"} type="text" name="password" onChange={this.handleChange} placeholder={this.state.password} disabled= {this.state.viewOnly}/>
                        <label htmlFor="email" className = {styles.emailLabel, styles.label}>email:</label>
                        <input className={styles.emailField, "field"} type="text" name="email" onChange={this.handleChange} placeholder={this.state.email} disabled = {this.state.viewOnly}/>
                        <label htmlFor="address" className = {styles.addressLabel, styles.label}>address:</label>
                        <input className={styles.addressField, "field"} type="text" name="address" onChange={this.handleChange} placeholder={this.state.address} disabled = {this.state.viewOnly}/>
                        <label htmlFor="state" className = {styles.stateLabel, styles.label}>state:</label>
                        <input className={styles.stateField, "field"} type="text" name="state" onChange={this.handleChange} placeholder={this.state.state} disabled = {this.state.viewOnly}/>
                        <label htmlFor="city" className = {styles.cityLabel, styles.label}>city:</label>
                        <input className={styles.cityField, "field"} type="text" name="city" onChange={this.handleChange} placeholder={this.state.city} disabled = {this.state.viewOnly}/>
                    </div>
                    <button type ="button" id = "submitID" value = {this.state.submitState} className= {styles.editSaveBtn}  onClick={this.handleSubmit}>{this.state.submitState}</button> 
                    {this.state.submitState === 'SAVE' &&  
                        <button type ="button" id = "cancelID" className= {styles.cancelBtn}  onClick={this.handleSubmit}>CANCEL</button> 
                    }
                </div>
                <h1 id = "preferenceFormID" className={styles.preferencesHeader}>FOOD TRUCK PREFERENCES</h1>
                    <form className = {styles.prefFormClass} id = "prefFormID" onSubmit={this.handleSubmit}>
                        <div className={styles.innerFormClass}>
                            <div className={styles.priceDiv}>
                                <p>Price Range</p>
                                <input type="radio" id="price1" name="price" value="$" checked={this.state.priceSelected === '$'} onChange={this.onValueChange}/>
                                <label htmlFor="price1">$1-$15</label><br/>
                                <input type="radio" id="price2" name="price" value="$$" checked={this.state.priceSelected === '$$'} onChange={this.onValueChange}/>
                                <label htmlFor="price2">$15-$30</label><br/>
                                <input type="radio" id="price3" name="price" value="$$$" checked={this.state.priceSelected === '$$$'} onChange={this.onValueChange}/>
                                <label htmlFor="price3">$30+</label><br/>
                                <input type="radio" id="priceNone" name="price" value="No Preference" checked={this.state.priceSelected === 'No Preference'} onChange={this.onValueChange}/>
                                <label htmlFor="priceNone">No Preference</label><br/>
                            </div>
                            <div className={styles.distRangeClass}>
                                <p>Truck Distance Range</p>
<<<<<<< HEAD
                                <input type="radio" id="distPref1" name="distPref" value="sameCity" checked={this.state.distPreference === 'sameCity'} onChange={this.onValueChange}/>
                                <label htmlFor="distPref1">Within same city</label><br/>
                                <input type="radio" id="distPrefNone" name="distPref" value="No Preference" checked={this.state.distPreference === 'No Preference'} onChange={this.onValueChange}/>
                                <label htmlFor="distPrefNone">No Preference</label><br/>

                                {/* <input type="range" min="1" max="100" value={this.state.distSliderVal} className={styles.distSliderClass} id="distSlider" onChange={this.handleChange}/>
                                <p>Within: <span id="milesID">{this.state.distSliderVal}</span> miles</p> */}
                            </div>
                            <div className = {styles.foodTypeDiv}>
                                <p>Food Type Preference:</p>
                                <select id="foodTypeID" name="foodTypeList" form="prefFormID" onChange={this.handleChange} value = {this.state.tempFoodTypePref}>
                                    <option value="No Preference">No Preference</option>
                                </select>
                            </div>                       
                        </div>
                        <button className={styles.formSaveBtn} type="submit">SAVE PREFERENCES</button>
                    </form>
                    <div className = {styles.backBtn}>
                        <Link to= {{ pathname: "/UserDashboard", state: {user: this.state.username, userID: this.state.userID}}}>BACK</Link>
                        {/* {this.state.role === 'o' && <Link to= {{ pathname: "/TruckOwnerDashboard", state: {user: this.state.username, userID: this.state.userID}}}>BACK</Link>} */}
                        {/* {this.state.role !== 'o' && <Link to= {{ pathname: "/UserDashboard", state: {user: this.state.username, userID: this.state.userID}}}>BACK</Link>} */}
=======
                                <input type="range" min="1" max="100" value={this.state.distSliderVal} className={styles.distSliderClass} id="distSlider" onChange={this.handleChange}/>
                                <p>Within: <span id="milesID">{this.state.distSliderVal}</span> miles</p>
                            </div>
                            <div className = {styles.foodTypeDiv}>
                                <p>Food Type Preference:</p>
                                <select id="foodTypeID" name="carlist" form="prefFormID">
                                    <option value="no-pref">No Preference</option>
                                </select>
                            </div>                       
                        </div>
                        <button className={styles.formSaveBtn} type="submit">SAVE</button>
                    </form>
                    <div className = {styles.backBtn}>
                        {this.state.role === 'o' && <Link to= {{ pathname: "/TruckOwnerDashboard", state: {user: this.state.username, userID: this.state.userID}}}>BACK</Link>}
                        {this.state.role !== 'o' && <Link to= {{ pathname: "/UserDashboard", state: {user: this.state.username, userID: this.state.userID}}}>BACK</Link>}
>>>>>>> parent of 18eefb6d... Creating new Frontend folder

                    </div>          
            </div>
        );
    }
}
export default UserManageAccount;

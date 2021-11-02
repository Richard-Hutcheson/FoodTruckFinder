import React, { Component } from 'react';
import {editUser, getUser} from '../API/apiCalls';
import {Link} from "react-router-dom";
import styles from '../css/manageAccnt.module.css';


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
            viewOnly: true
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
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        let response = await getUser(this.state.username);
        if (response == null){
            response = "unable to retrieve";
            console.log("response = ", response);
        }
        else{
            this.setState({userid: response.id});
            this.setState({username: response.username});
            this.setState({password: response.password});
            this.setState({name: response.name});
            this.setState({address: response.address});
            this.setState({city: response.city});
            this.setState({state: response.state});
            this.setState({email: response.email});
            console.log("response = ", response);
        }
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // this.setState({[name]:value});
        console.log("name = " + name + " value = " + value);
    }
    handleSubmit(event){
        event.preventDefault();
        if (event.target.id == "submitID"){
            if (this.state.submitState == "EDIT"){
                this.setState({submitState: 'SAVE'});
                this.setState({viewOnly: false});
            }else{
                document.querySelectorAll('.field').forEach(x=>{
                    if (x.value != ''){
                        this.setState({[x.name]: String(x.value)}, this.callFunction);
                        console.log(this.state.state);
                    }else{
                    }
                });
                this.resetFields();
            }
        }
        else if (event.target.id == 'cancelID'){
            this.resetFields();
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
    callFunction = ()=>{
        this.saveUser();        
    }
    async saveUser(){
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
                        {this.state.submitState == 'SAVE' &&  
                            <button type ="button" id = "cancelID" className= {styles.cancelBtn}  onClick={this.handleSubmit}>CANCEL</button> 
                        }
                    </div>
                    
                    <button className = {styles.backBtn} type = "button" onClick= {() => {this.props.history.goBack();}}> BACK </button>

                </div>
        );
    }
}
export default UserManageAccount;

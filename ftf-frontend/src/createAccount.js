import React, { Component } from 'react';
import styles from "./css/createAcnt.module.css"
class CreateAccount extends Component{
    
    
    render(){
        return (
            
        <div className={styles.bodyContainer}>

            <h1 className={styles.header}>CREATE ACCOUNT</h1>

            <div className={styles.innerContainer}>
                <form className={styles.formClass} onSubmit={()=>window.confirm("Account Created")} action="/">
                        <div className={styles.groupClass}>
                            <label for="username" id = {styles.username}>Username:</label>
                            <input type="text" className={styles.inputClass} id={styles.usernameInput} name="username"  required></input>
                        </div>
                        <div className={styles.groupClass}>
                            <label for="password" id = {styles.password}>Password:</label>
                            <input type="text" className={styles.inputClass} id={styles.passwordInput} name="password"  required></input>
                            
                        </div>
                        <div className={styles.groupClass}>
                            <label for="name" id = {styles.name}>Name:</label>
                            <input type="text" className={styles.inputClass} id={styles.nameInput} name="name"  required></input>
                        </div>
                        
                        <div className={styles.groupClass}>
                            <label for="email" id = {styles.email}>Email:</label>
                            <input type="text" className={styles.inputClass} id={styles.emailInput} name="email"  required></input>
                        </div>
                        
                        <div className={styles.addressClass}>
                            <label for="address" id = {styles.address}>Address:</label>
                            <input type="text" className={styles.inputClass} id={styles.addressInput} name="address"  required></input>
                
                            <label for="city" id = {styles.city}>   City:</label>
                            <input type="text" className={styles.inputClass} id={styles.cityInput} name="city"  required></input>

                            <label for="state" id = {styles.state}>  State:</label>
                            <input type="text"  className={styles.inputClass} id={styles.stateInput} name="state"  required></input>

                        </div>
                        
                        <input type = "submit" value = "CREATE" id= {styles.createBtn}></input>
                </form>  
                <a id = {styles.backLink} href="/">                
                    <button id = {styles.backBtn} type = "button" action="/"> BACK </button>
                </a>
            </div>

        </div>
        );
    }
}
export default CreateAccount;
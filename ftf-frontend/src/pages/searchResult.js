import React, { Component } from 'react';
import {getUser, getTruckByName, getAllTrucks} from '../API/apiCalls';
import {Link} from "react-router-dom";
import styles from '../css/searchResult.module.css';

class SearchResult extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '',
            userID: '',
            password: '',
            email: '',
            address: '',
            state: '',
            city: '',
            role: '',            
            name: '',
            truckName: '',
            truckDesc: '',
            minPrice: '',
            maxPrice: '',
            foodType: '',
            truckOwner: '',
            menuURL: '',
            queryType: 'invalid',
            searchQuery: '',
            noResults: 'false',
            writeReview: false,
        }
        if (this.props.location.state != null){
            this.state.searchQuery = this.props.location.state.searchQuery;
            this.state.queryType = this.props.location.state.queryType;
            if (this.state.queryType === 'truck_name'){
                this.state.truckName = this.props.location.state.searchQuery;
            }
        }
        
        //PARSE by URL rather than PROPS
        else{
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            
            this.state.truckName = urlParams.get("query")
            this.state.queryType = urlParams.get("queryType");
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        let response = '...unknown...';

        if (this.state.queryType === 'user\'s username'){
            console.log(this.state.searchQuery)
            response = await getUser(this.state.searchQuery).catch(error =>{
                console.log(error.message);
                return;
            });
            if (response === '...unknown...'){
                window.confirm("NO RESULTS FOUND");
            }
            else if(response != null && response !== '...unknown...'){
                this.setState({
                    user: response.username,
                    userID: response.id,
                    password: response.password,
                    email: response.email,
                    address: response.address,
                    state: response.state,
                    city: response.city,
                    role: response.role,            
                    name: response.name,
                })
            }
        }else if ( this.state.queryType === 'truck_name'){
            response = await getTruckByName(this.state.truckName).catch(error =>{
                console.log(error.message);
            })
            if (response.status === 'NOT_FOUND'){
                window.confirm("NO RESULTS FOUND");
            
            }else{
                this.setState({
                    truckName: response.truckName,
                    truckDesc: response.description,
                    maxPrice: response.maxRange,
                    minPrice: response.minRange,
                    foodType: response.foodType,
                    truckOwner: response.owner.username,
                    menuURL: response.menuURL

                })
            }

        }else if (this.state.queryType === 'food type'){
             //GET ALL FOOD TRUCKS FOR FOOD TRUCK RECOMMENDATIONS
            response = await getAllTrucks().catch(error=>{
                console.log(error.message);
            })
            //response should be an array
            for (let i =0; i < response.length;++i){
                if (response[i].foodType === this.state.searchQuery){
                    let container = document.getElementById('recTrucksID');
                    let truck = document.createElement('div');
                    let recItem = document.createElement('div');
                    recItem.setAttribute("class", styles.recItem);
                    let btn = document.createElement('button');
                    btn.setAttribute('type', 'submit');
                    btn.setAttribute('class', styles.truckBtn);
                    btn.setAttribute('id', response[i].truckName);
                    btn.innerText = "VIEW";
                    recItem.innerHTML = `
                        <div class=${styles.truckName}>${response[i].truckName}</div>
                        <div class=${styles.truckPrice}>$${response[i].minRange}-$${response[i].maxRange}</div>
                        <div class=${styles.truckFoodType}>${response[i].foodType}</div>
                    `
                    btn.onclick = function() {
                        document.location.href = `http://localhost:3000/SearchResult?query=${response[i].truckName}&queryType=truck_name`;
                    }
                    recItem.appendChild(btn);
                    truck.appendChild(recItem);
                    container.appendChild(truck);
                }
                
            }
        }

        
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log("value = " + value);

    }
    handleSubmit(event){
        event.preventDefault();
        if (event.target.id === "revRatBtn"){

            if (this.state.writeReview){
                this.setState({writeReview: false});
            }else{
                this.setState({writeReview: true});
            }
        }
        else if (event.target.id === "postReviewID"){
            if (this.state.writeReview == true){
                this.setState({writeReview: false})
            }
            console.log ("POST REVIEW AND RATING!");
        }
    }

    render(){ 
        let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, lacus vitae molestie volutpat, leo risus congue justo, nec dignissim mauris ex eget arcu. Nunc fermentum scelerisque lorem vel convallis. Phasellus vel velit diam. Fusce pretium nisi nisl, at efficitur risus bibendum eu. Nulla faucibus faucibus leo eget scelerisque. In viverra tincidunt hendrerit. Nam quis malesuada nibh, ac egestas eros. Nulla non scelerisque lorem. Quisque non quam in sem consequat dignissim et vel quam.`
        let createReview = <div></div>;
        let revRatBtnTxt = "Rate and Review";
        if (this.state.writeReview == true){
            createReview =             
            <div className= {styles.newRateReview}>
                <label>Review</label>
                <textarea className = {styles.newReview}></textarea>
                <label>Rating (1-10)</label>
                <input className = {styles.newRating} type="number" min = "0" max = "10"></input>
                <button type= "button" id = "postReviewID" className = {styles.saveReviewBtn} onClick={this.handleSubmit}>Post</button>
            </div>;
            revRatBtnTxt = "Cancel";
        }
        
        //USER QUERY
        if (this.state.queryType === 'user\'s username'){
            return (
                <div>
                    <h1 className = {styles.header}>SEARCHING FOR "{this.state.searchQuery}"</h1>
                    <div className = {styles.userInfo}>
                        <div>
                            Name: <span>{this.state.name}</span>
                        </div>
                        <div>
                            Username: <span>{this.state.user}</span>
                        </div>
                        <div>
                            Email: <span>{this.state.email}</span>
                        </div>
                    </div>
                    <div className= {styles.userRevRat}>
                        <p>Reviews and Ratings Here</p>
                    </div>
                    <button className={styles.backBtn} id = "postReviewID" onClick={()=>{this.props.history.goBack();}}>BACK</button>
                </div>
            );
        }
        //TRUCK NAME
        else if (this.state.queryType === "truck_name"){
            return(
                <div>

                    {this.state.searchQuery !== '' && <h1 className = {styles.header}>SEARCHING FOR "{this.state.searchQuery}"</h1>}
                    {this.state.searchQuery === '' && <h1 className = {styles.header}>TRUCK DETAILS</h1>}

                    <div className = {styles.truckInfo}>
                        <div>
                            Food Truck: <span>{this.state.truckName}</span>
                        </div>
                        <div>
                            Food Type: <span>{this.state.foodType}</span>
                        </div>
                        <div>
                            Price Range: <span>${this.state.minPrice}...${this.state.maxPrice}</span>
                        </div>
                    </div>
                    <div className={styles.owner}>
                        <p>Truck Owner Username: {this.state.truckOwner}</p>
                    </div>
                    <div className={styles.truckDesc}>
                        <p>Description: "{this.state.truckDesc}"</p>
                    </div>
                    <div className= {styles.truckSchedule}>
                        <p>Truck Schedule</p>
                    </div>
                    <div className= {styles.truckRoute}>
                        <p>Truck Route</p>
                    </div>
                    <div className= {styles.truckMenu}>
                        <p>Truck Menu</p>
                        {this.state.menuURL !== '' && <img src={this.state.menuURL} alt="menu" border="0"/>}
                    </div>
                    <div className= {styles.truckRevRat}>
                        <p className = {styles.revRatTitle}>Truck Reviews and Ratings Here</p>
                        <div className = {styles.revRatContent}>
                            <div className = {styles.review}>
                                <div className = {styles.txtRatingDiv}>
                                    <div>
                                        <p className = {styles.reviewUser}>Anon301</p>
                                        <p className = {styles.userRating}>rating: x/10</p>
                                    </div>
                                </div>                                
                                <p className= {styles.reviewText}>{loremIpsum}</p>
                            </div>
                            <div className = {styles.review}>
                                <div className = {styles.txtRatingDiv}>
                                    <div>
                                        <p className = {styles.reviewUser}>Anon301</p>
                                        <p className = {styles.userRating}>rating: x/10</p>
                                    </div>
                                </div>                                
                                <p className= {styles.reviewText}>{loremIpsum}</p>
                            </div>
                            <div className = {styles.review}>
                                <div className = {styles.txtRatingDiv}>
                                    <div>
                                        <p className = {styles.reviewUser}>Anon301</p>
                                        <p className = {styles.userRating}>rating: x/10</p>
                                    </div>
                                </div>                                
                                <p className= {styles.reviewText}>{loremIpsum}</p>
                            </div>
                            <div className = {styles.review}>
                                <div className = {styles.txtRatingDiv}>
                                    <div>
                                        <p className = {styles.reviewUser}>Anon401</p>
                                        <p className = {styles.userRating}>rating: x/10</p>
                                    </div>
                                </div>                                
                                <p className= {styles.reviewText}>{loremIpsum}</p>
                            </div>
                        </div>
                        <div className={styles.ratrevBtnDiv}>
                            <button type = "button" id = "revRatBtn" className={styles.revRatBtn} onClick={this.handleSubmit}>{revRatBtnTxt}</button>
                        </div>
                        {createReview}
                    </div>
                    <button className={styles.backBtn} onClick={()=>{this.props.history.goBack();}}>BACK</button>
                </div>
                
            );
        }
        //FOOD TRUCK RELATED QUERY
        else{
            return (
                <div>
                    <h1 className = {styles.header}>SEARCHING FOR "{this.state.searchQuery}"</h1>
                    <p  className = {styles.listTrucks}>TRUCK RESULTS HERE</p>
                    <div className={styles.truckRecsContainer} id = "recTrucksID">
                        <div className={styles.truckRecTitle}>
                            <p><b>Food Truck Recommendations</b></p>
                        </div>
                        <div className={styles.textBar}>
                            <div className={styles.textBarText}>TRUCK NAME</div>
                            <div className={styles.textBarText}>PRICE</div>
                            <div className={styles.textBarText}>FOOD TYPE</div>
                            <div className={styles.textBarText}></div>
                        </div>
                    </div>
                    <button className={styles.backBtn} onClick={()=>{this.props.history.goBack();}}>BACK</button>

                </div>
            );
        }
    

    }
    
}
export default SearchResult;

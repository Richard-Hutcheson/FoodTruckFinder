import React, { Component } from 'react';
import {getUser, getTruckByName, getAllTrucks, postReview, getSubscriptions, subscribeToTruck, getReviews, unsubscribeToTruck, enhancedSearch, searchNearby, getRoutes} from '../API/apiCalls';
import {Link} from "react-router-dom";
import styles from '../css/searchResult.module.css';

class SearchResult extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
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
            truckID: '',
            truckOwner: '',
            menuURL: '',
            queryType: 'invalid',
            searchQuery: '',
            noResults: 'false',
            userCity: '',
            subscribed: false,
            routes: [],
            keyCount: 0,
            writeReview: false,
            reviewList: [<div key = "-1"></div>],
        }
        if (this.props.location.state != null){
            this.state.searchQuery = this.props.location.state.searchQuery;
            this.state.queryType = this.props.location.state.queryType;
            this.state.username = this.props.location.state.username;
            console.log("username = ", this.state.username);
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
            this.state.username = urlParams.get("user");
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        let response = '...unknown...';
        //WHEN SEARCHING FOR USER, GET THAT USER's INFO
        if (this.state.queryType === 'user\'s username'){
            // console.log(this.state.searchQuery)
            // response = await getUser(this.state.searchQuery).catch(error =>{
            //     console.log(error.message);
            //     return;
            // });
            // if (response === '...unknown...'){
            //     window.confirm("NO RESULTS FOUND");
            // }
            // else if(response != null && response !== '...unknown...'){
            //     this.setState({
            //         username: response.username,
            //         userID: response.id,
            //         password: response.password,
            //         email: response.email,
            //         address: response.address,
            //         state: response.state,
            //         city: response.city,
            //         role: response.role,            
            //         name: response.name,
            //     })
            // }
        }
        else if (this.state.queryType === 'nearby'){
            response = await getUser(this.state.username).catch(error =>{
                console.log(error.message);
            });
            let city = response.city;
            let username = response.username;
            this.setState({userCity: city});
            response = await searchNearby(city).catch(error =>{
                console.log(error.message);
            });
             //response should be an array
             for (let i = 0; i < response.length;++i){
                let container = document.getElementById('recTrucksID');
                let truck = document.createElement('div');
                let recItem = document.createElement('div');
                recItem.setAttribute("class", styles.recItem);
                let btn = document.createElement('button');
                btn.setAttribute('type', 'submit');
                btn.setAttribute('class', styles.truckBtn);
                btn.setAttribute('id', response[i].truck.truckName);
                btn.innerText = "VIEW";
                recItem.innerHTML = `
                    <div class=${styles.truckName}>${response[i].truck.truckName}</div>
                    <div class=${styles.truckPrice}>$${response[i].truck.minRange}-$${response[i].truck.maxRange}</div>
                    <div class=${styles.truckFoodType}>${response[i].truck.foodType}</div>
                `
                btn.onclick = function() {
                    document.location.href = `http://localhost:3000/SearchResult?query=${response[i].truck.truckName}&queryType=truck_name&user=${username}`;
                }
                recItem.appendChild(btn);
                truck.appendChild(recItem);
                container.appendChild(truck);
            }
        }
        else if (this.state.queryType === 'enhanced'){
            console.log("search query = " + this.state.searchQuery);
            response = await enhancedSearch(this.state.searchQuery).catch(error =>{
                console.log(error.message);
            });
            console.log(response);
            if (!response || response == null || response.status === "NOT_FOUND"){
                window.confirm("NO RESULTS FOUND");
                // this.props.history.goBack();
            }else{
                //response should be an array
                for (let i = 0; i < response.length;++i){
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
                    let username = this.state.username;
                    btn.onclick = function() {
                        document.location.href = `http://localhost:3000/SearchResult?query=${response[i].truckName}&queryType=truck_name&user=${username}`;
                    }
                    recItem.appendChild(btn);
                    truck.appendChild(recItem);
                    container.appendChild(truck);
                }
            }
            
        }
        //SEARCHING FOR TRUCK BY NAME, GET TRUCK INFO
        else if ( this.state.queryType === 'truck_name'){
            response = await getTruckByName(this.state.truckName).catch(error =>{
                console.log(error.message);
            });
            console.log(response);
            if (response == null || response.status === "NOT_FOUND"){
                window.confirm("NO RESULTS FOUND");
                this.props.history.goBack();
            }else{
                this.setState({
                    truckName: response.truckName,
                    truckDesc: response.description,
                    maxPrice: response.maxRange,
                    minPrice: response.minRange,
                    foodType: response.foodType,
                    truckOwner: response.owner.username,
                    menuURL: response.menuURL,
                    truckID: response.truckID,
                })
            }
            //GET SUBSCRIBED TRUCKS AND SEE IF THIS TRUCK IS IN SUBSCRIBED LIST
            response = await getSubscriptions(this.state.username);
            if (response != null && response.length === 0){
                this.setState({subscribed: false});
            }else if (response != null && response.length > 0){
                for (let i = 0; i < response.length; i++){
                    if (response[i].truck.truckName === this.state.truckName){
                        this.setState({subscribed: true});
                        break;
                    }
                }
            }
            //GET TRUCK's RATINGS AND REVIEWS
            response = await getReviews(this.state.truckName).catch(e=>{
                console.log(e.message);
            })
            if (response != null && response.length != 0){
                let newList = this.state.reviewList;
                for (let i = 0; i < response.length; i++){
                    let fragment = 
                    <div key = {i} className = {styles.review}>
                        <div className = {styles.txtRatingDiv}>
                            <div>
                                <p className = {styles.reviewUser}>{response[i].user.username}</p>
                                <p className = {styles.userRating}>rating: {response[i].rating}/10</p>
                            </div>
                        </div>                                
                        <p className= {styles.reviewText}>{response[i].description}</p>
                    </div>
                    newList.push(fragment);
                }
                this.setState({reviewList: newList});
            }
            //GET TRUCK ROUTE IF ANY EXISTS
            response = await getRoutes(this.state.truckName).catch(e=>{console.log(e.message);});
            for (let i = 0; i < response.length; i++){
                let newRoute=
                <div className = {styles.newRouteDiv} key = {this.state.keyCount}>
                    <input type = "text" id = {"address"+this.state.keyCount} className = {styles.routeAddress} required disabled value = {response[i].address}/>
                    <input type = "text" id = {"city"+this.state.keyCount} className = {styles.routeCity} required disabled value = {response[i].city}/>
                    <input type = "text" id = {"state"+this.state.keyCount} className = {styles.routeState} value = {response[i].state}
                        maxLength = "2" minLength = "2" placeholder="(ex: 'TX')" pattern = "[A-Za-z][A-Za-z]" required disabled/>
                </div>;
                let tempRoutes = this.state.routes;
                tempRoutes.push(newRoute);
                this.setState({routes: tempRoutes, keyCount: this.state.keyCount+=1});

            }
        }
        //SEARCHING FOR TRUCKS BY FOOD TYPE
        else if (this.state.queryType === 'food type'){
             //GET ALL FOOD TRUCKS FOR FOOD TRUCK RECOMMENDATIONS
            response = await getAllTrucks().catch(error=>{
                console.log(error.message);
            })
            if (response == null){
                window.confirm("NO RESULTS FOUND");
                this.props.history.goBack();
            }
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
                    let username = this.state.username;
                    btn.onclick = function() {
                        document.location.href = `http://localhost:3000/SearchResult?query=${response[i].truckName}&queryType=truck_name&user=${username}`;
                    }
                    recItem.appendChild(btn);
                    truck.appendChild(recItem);
                    container.appendChild(truck);
                }
                
            }
        }      
    }

    async handleSubmit(event){
        event.preventDefault();
        if (event.target.id === "revRatBtn"){

            if (this.state.writeReview){
                this.setState({writeReview: false});
            }else{
                this.setState({writeReview: true});
            }
        }
        //POST REVIEW
        else if (event.target.id === "postReviewID"){

            let review = {
                rating: parseFloat(document.getElementById("ratingID").value),
                description: document.getElementById("reviewTextID").value,
                username: this.state.username,
                truckName: this.state.truckName,
            }
            //POST REVIEW
            let response = await postReview(review).catch(e =>{
                console.log(e.message);
            })
            console.log("post review: ", response);
            if (response != null){
                alert("REVIEW POSTED");
            }
            if (this.state.writeReview === true){
                this.setState({writeReview: false});
            }
        }
        //SUBSCRIBE TO TRUCK
        else if (event.target.id === "subscribeBtnID"){
            if (this.state.subscribed === false){
                let response = await subscribeToTruck(this.state.truckName, this.state.username).catch(e=>{
                    console.log(e.message);
                });
                this.setState({subscribed: true});
                console.log(response);
            }
        }
        else if (event.target.id === "unsubscribeBtnID"){
            if (this.state.subscribed === true){
                let response = await unsubscribeToTruck(this.state.truckName, this.state.username).catch(e=>{
                    console.log(e.message());
                })
                this.setState({subscribed: false});
            }

        }
    }

    render(){ 
        let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, lacus vitae molestie volutpat, leo risus congue justo, nec dignissim mauris ex eget arcu. Nunc fermentum scelerisque lorem vel convallis. Phasellus vel velit diam. Fusce pretium nisi nisl, at efficitur risus bibendum eu. Nulla faucibus faucibus leo eget scelerisque. In viverra tincidunt hendrerit. Nam quis malesuada nibh, ac egestas eros. Nulla non scelerisque lorem. Quisque non quam in sem consequat dignissim et vel quam.`
        let createReview = <div></div>;
        let revRatBtnTxt = "Rate and Review";
        //POST REVIEW JSX
        if (this.state.writeReview == true){
            createReview =             
            <div className= {styles.newRateReview}>
                <form  id = "postReviewID" onSubmit = {this.handleSubmit}>
                    <label>Review</label>
                    <input type="text" id = "reviewTextID" className = {styles.newReview} maxLength = '254' required placeholder="254 character limit"></input>
                    <label>Rating</label>
                    <input className = {styles.newRating} type="number" min = "0" max = "10" id = "ratingID" placeholder="1-10" required></input>
                    <button type= "submit"  className = {styles.saveReviewBtn} >Post</button>
                </form>
                <button type = "button" id = "revRatBtn" className={styles.revRatBtn} onClick={this.handleSubmit}>CANCEL</button>

            </div>;
            revRatBtnTxt = "Cancel";
        }
        //SUBSCRIBE BTN
        let subscribeBtn;
        if (this.state.subscribed === false){
            subscribeBtn = 
                <div>
                    <button id = "subscribeBtnID" className={styles.subscribeBtn} onClick={this.handleSubmit}>SUBSCRIBE</button>
                </div>;
        }else{
            subscribeBtn = 
            <div>
                <button id = "unsubscribeBtnID" className={styles.subscribeBtn} onClick={this.handleSubmit}>UNSUBSCRIBE</button>
            </div>;
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
                            Username: <span>{this.state.username}</span>
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
                        <div className= {styles.truckNameDiv}>
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
                        <p>Truck Owner Username: <span>{this.state.truckOwner}</span></p>
                    </div>
                    <div className={styles.truckDesc}>
                        <p>Description: "<span>{this.state.truckDesc}</span>"</p>
                    </div>
                    <div className= {styles.truckSchedule}>
                        <p className = {styles.truckSchedTitle}>Truck Schedule</p>
                    </div>
                    <div className= {styles.truckRoute}>
                        <p className = {styles.truckRouteTitle}>Truck Route</p>
                        <div className={styles.addressDiv}>
                            <p>ADDRESS</p>
                            <p>CITY</p>
                            <p>STATE</p>
                        </div>
                        <div className = {styles.routeContent}>
                            {this.state.routes}
                        </div>
                    </div>
                    <div className= {styles.truckMenu}>
                        <p className = {styles.truckMenuTitle}>Truck Menu</p>
                        {this.state.menuURL !== '' && <img src={this.state.menuURL} alt="menu" border="0"/>}
                    </div>
                    <div className= {styles.truckRevRat}>
                        <p className = {styles.revRatTitle}>Truck Reviews and Ratings Here</p>
                        <div className = {styles.revRatContent}>
                            {this.state.reviewList}
                        </div>
                            <div className={styles.ratrevBtnDiv}>
                            {this.state.writeReview == false && 
                                <button type = "button" id = "revRatBtn" className={styles.revRatBtn} onClick={this.handleSubmit}>{revRatBtnTxt}</button>
                            }
                            </div>
                        {createReview}
                        {/* {this.state.writeReview == true && 
                            <button type = "button" id = "revRatBtn" className={styles.revRatBtn} onClick={this.handleSubmit}>{revRatBtnTxt}</button>
                        } */}
                    </div>
                    {subscribeBtn}
                    <button className={styles.backBtn} onClick={()=>{this.props.history.goBack();}}>BACK</button>
                </div>
                
            );
        }
        //FOOD TRUCK RELATED QUERY
        else{
            return (
                <div>
                    {this.state.queryType !== 'nearby' && <h1 className = {styles.header}>SEARCHING FOR "{this.state.searchQuery}"</h1>}
                    {this.state.queryType === 'nearby' && <h1 className = {styles.header}>SEARCHING FOR TRUCKS IN YOUR CITY</h1>}
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

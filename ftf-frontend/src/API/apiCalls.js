/*
        body: JSON.stringify({
            userID: 1,
            username: un,
            password: pw,
            role: "a"
        })
                    "Content-Type": "application/json",
            "Accept": "application/json",
*/
export async function noahCall(){
    const response = await fetch('http://localhost:8080/noah', {
        method: "GET",
    }).catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    response.text().then(function(text){
        console.log("text = " + text);
    });
}
export async function loginUser(un, pw){
    let response;
    response = await fetch(`http://localhost:8080/login/${un}/${pw}`, {
        method: "GET"
    }).catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if (response != null){
        let responseJSON = await response.json().catch(error=> {console.log(error.message)});
        return responseJSON;
    }
}
export async function saveUser(userData){

    const response = await fetch(`http://localhost:8080/saveuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(userData),
    }).catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if (response != null){
        const data = await response.json().catch(error =>{
            window.confirm("Problem encountered with JSON operation: " + error.message);
        });;
        if (data != null){
            return data;
        }else{
            return null;  
        }

    }
}
export async function createAccount(params){
    const requestOptions = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
    const response = await fetch(`http://localhost:8080/`, requestOptions)
    .catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if (response != null){
        const data = await response.json().catch(error =>{
            window.confirm("Problem encountered with JSON operation: " + error.message);
        });;
        if (data != null){
            return data.id;
        }else{
            return "...unknown...";  
        }
    }
}
export async function getUser(username){
    const requestOptions = {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
    const response = await fetch(`http://localhost:8080/findUser/${username}`, requestOptions)
        .catch(error =>{
            window.confirm("Problem encountered with fetch operation: " + error.message);
        });
    if (response != null){
        const data = await response.json().catch(error =>{
            // window.confirm("Problem encountered with JSON operation: " + error.message);
        });
        if (data != null){
            console.log("get user = ", data);
            return data;
        }else{
            return "...unknown...";  
        }
    }
}

export async function editUser(userData){
    console.log("edit user data = ", userData)
    const requestOptions = {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(userData),
    }
    const response = await fetch(`http://localhost:8080/editAccount`, requestOptions)
    .catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if (response != null){
        const data = await response.json().catch(error =>{
            window.confirm("Problem encountered with JSON operation: " + error.message);
        });

    }else{
    }
}
export async function getTruckByName(name){

    const requestOptions = {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
    const response = await fetch(`http://localhost:8080/truckDetails/name/${name}`, requestOptions)
        .catch(error =>{
            window.confirm("Problem encountered with fetch operation: " + error.message);
        });
    if (response != null){
        const data = await response.json().catch(error =>{
            // window.confirm("Problem encountered with JSON operation: " + error.message);
        });
        if (data != null){
            console.log("truck by name = ", data);
            return data;
        }else{
            return "...unknown...";  
        }
    }
}

export async function getAllTrucks(){

    const requestOptions = {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
    const response = await fetch(`http://localhost:8080/truckDetails/all`, requestOptions)
        .catch(error =>{
            window.confirm("Problem encountered with fetch operation: " + error.message);
        });
    if (response != null){
        const data = await response.json().catch(error =>{
            // window.confirm("Problem encountered with JSON operation: " + error.message);
        });
        if (data != null){
            console.log("all trucks = ", data);
            return data;
        }else{
            return "...unknown...";  
        }
    }
}

export async function editTruck(userData){
    console.log("datamap = ", userData);
    const requestOptions = {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(userData)
    };
    const response = await fetch(`http://localhost:8080/editTruck`, requestOptions)
        .catch(error =>{
            window.confirm("Problem encountered with fetch operation: " + error.message);
        });
    if (response != null){
        const data = await response.json().catch(error =>{
            // window.confirm("Problem encountered with JSON operation: " + error.message);
        });
        if (data != null){
            console.log("edit truck data = ", data);
            return data;
        }else{
            return "...unknown...";  
        }
    }
}

export async function deleteTruck(truckName){
    const requestOptions = {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
    };
    const response = await fetch(`http://localhost:8080/deleteTruck/${truckName}`, requestOptions)
        .catch(error =>{
            window.confirm("Problem encountered with fetch operation: " + error.message);
        });
    if (response != null){
        const data = await response.json().catch(error =>{
            // window.confirm("Problem encountered with JSON operation: " + error.message);
        });
        return data;
    }
}

export async function addTruck(truckDataMap){
    console.log("datamap = ", truckDataMap);
    const requestOptions = {
        method:"POST",

        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            truckID: truckDataMap.get('truckID'),
            truckName: truckDataMap.get('truckName'),
            description: truckDataMap.get('description'),
            minRange: truckDataMap.get('minRange'),
            maxRange: truckDataMap.get('maxRange'),
            foodType: truckDataMap.get('foodType'),
            owner: truckDataMap.get('owner'),
        })
    };
    const response = await fetch(`http://localhost:8080/createTruck`, requestOptions)
        .catch(error =>{
            window.confirm("Problem encountered with fetch operation: " + error.message);
        });
    if (response != null){
        const data = await response.json().catch(error =>{
            // window.confirm("Problem encountered with JSON operation: " + error.message);
        });
        if (data != null){
            console.log("data = ", data);
            return data;
        }else{
            return "...unknown...";  
        }
    }
}

export async function insertUserFoodRec(username){

    const requestOptions = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
    const response = await fetch(`http://localhost:8080/createUserRec/${username}`, requestOptions)
    .catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if (response != null){
        const data = await response.json().catch(error =>{
            window.confirm("Problem encountered with JSON operation: " + error.message);
        });;
        if (data != null){
            return data;
        }else{
            return "...unknown...";  
        }
    }
}

export async function updateFoodTypeRec(username, foodType){

    const requestOptions = {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }    
    }
    const response = await fetch(`http://localhost:8080/updateRecommendation/${username}/${foodType}`, requestOptions)
    .catch(error =>{
        console.log("hello");
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if (response != null){
        const data = await response.json().catch(error =>{
            // window.confirm("Problem encountered with JSON operation: " + error.message);
        });
        // if (data != null){
        //     return data;
        // }else{
        //     return "...unknown...";  
        // }
    }else{
    }
}

export async function getRecommendedTrucks(username){

    const requestOptions = {
        method: "GET",
        headers:{
            "Access-Control-Allow-Origin": "*"
        }    
    }
    const response = await fetch(`http://localhost:8080/getRecommendedTrucks/${username}`, requestOptions)
    .catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if (response != null){
        const data = await response.json().catch(error =>{
            window.confirm("Problem encountered with JSON operation: " + error.message);
        });
        if (data != null){
            return data;
        }else{
            return null;  
        }
    }else{
    }
}
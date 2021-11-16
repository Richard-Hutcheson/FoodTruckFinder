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
<<<<<<< HEAD
=======
export function returnUserDataJSON(userDataMap){
    try{
        let userData = {            
            id: userDataMap.get('userID'),
            name: userDataMap.get('name'),
            username: userDataMap.get('username'),
            password: userDataMap.get('password'),
            email: userDataMap.get('email'),
            address: userDataMap.get('address'),
            state: userDataMap.get('state'),
            city: userDataMap.get('city'),
            role: 'a'
        }
        return JSON.stringify(userData);
    }catch(error){
        console.log(error.message);
        return "err";
    }
}
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
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
<<<<<<< HEAD
export async function saveUser(userData){

=======
export async function saveUser(userDataMap){
    if (returnUserDataJSON(userDataMap) === "err"){
        return "incomplete user data";
    }
    console.log(returnUserDataJSON(userDataMap));
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
    const response = await fetch(`http://localhost:8080/saveuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
<<<<<<< HEAD
        },
        body: JSON.stringify(userData),
=======

        },
        body: JSON.stringify({
            userid: 1,
            name: userDataMap.get('name'),
            username: userDataMap.get('username'),
            password: userDataMap.get('password'),
            email: userDataMap.get('email'),
            address: userDataMap.get('address'),
            state: userDataMap.get('state'),
            city: userDataMap.get('city'),
            role: userDataMap.get('role')
        })
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
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
<<<<<<< HEAD
            console.log("get user = ", data);
=======
            console.log("data = ", data);
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
            return data;
        }else{
            return "...unknown...";  
        }
    }
}

<<<<<<< HEAD
export async function editUser(userData){
    console.log("edit user data = ", userData)
=======
export async function editUser(userDataMap){
    console.log(userDataMap);
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
    const requestOptions = {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
<<<<<<< HEAD
        body: JSON.stringify(userData),
    }
    const response = await fetch(`http://localhost:8080/editAccount`, requestOptions)
    .catch(error =>{
=======
        body: returnUserDataJSON(userDataMap)
    }
    const response = await fetch(`http://localhost:8080/editAccount`, requestOptions)
    .catch(error =>{
        console.log("hello");
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if (response != null){
        const data = await response.json().catch(error =>{
<<<<<<< HEAD
            window.confirm("Problem encountered with JSON operation: " + error.message);
        });

    }else{
    }
}
=======
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

>>>>>>> parent of 18eefb6d... Creating new Frontend folder
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
<<<<<<< HEAD
            console.log("truck by name = ", data);
=======
            console.log("data = ", data);
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
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
<<<<<<< HEAD
            console.log("all trucks = ", data);
=======
            console.log("data = ", data);
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
            return data;
        }else{
            return "...unknown...";  
        }
    }
}

export async function editTruck(userDataMap){
    console.log("datamap = ", userDataMap);
    const requestOptions = {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            truckID: userDataMap.get('truckID'),
            truckName: userDataMap.get('truckName'),
            description: userDataMap.get('description'),
            minRange: userDataMap.get('minRange'),
            maxRange: userDataMap.get('maxRange'),
            foodType: userDataMap.get('foodType'),
            owner: userDataMap.get('owner'),
        })
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
<<<<<<< HEAD
            console.log("edit truck data = ", data);
=======
            console.log("data = ", data);
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
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

export async function insertUserFoodRec(username){

    const requestOptions = {
        method: "POST",
<<<<<<< HEAD
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
=======
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
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
<<<<<<< HEAD
        }else{
            return "...unknown...";  
        }
    }

}

export async function updateFoodTypeRec(username, foodType){

    const requestOptions = {
        method: "PATCH",
=======
        } else {
            return "...unknown...";
        }
    }
}


export async function addTruck(truckDataMap){
    console.log("datamap = ", truckDataMap);
    const requestOptions = {
        method:"POST",

>>>>>>> parent of 18eefb6d... Creating new Frontend folder
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
<<<<<<< HEAD
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
=======
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
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
    }
}
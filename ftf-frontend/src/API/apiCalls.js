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
        console.log("response = ", responseJSON);
        return JSON.stringify(responseJSON);
    }
}
export async function saveUser(userDataMap){
    if (returnUserDataJSON(userDataMap) == "err"){
        return "incomplete user data";
    }
    console.log(returnUserDataJSON(userDataMap));
    const response = await fetch(`http://localhost:8080/saveuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"

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
            role: 'a'
        })
    }).catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    console.log("response = " + response);
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
            return data;
        }else{
            return "...unknown...";  
        }
    }
}

export async function editUser(userDataMap){
    console.log(userDataMap);
    const requestOptions = {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: returnUserDataJSON(userDataMap)
    }
    const response = await fetch(`http://localhost:8080/editAccount`, requestOptions)
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
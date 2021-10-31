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
export async function loginUser(un, pw){
    let response;
    response = await fetch(`http://localhost:8080/login/${un}/${pw}`, {
        method: "GET"
    }).catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if (response != null){
        let responseJSON = await response.json();
        console.log("response = ", responseJSON);
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
// export async function getUserID(username){
//     const response = await fetch(`http://localhost:8080/findUser/${username}`, {
//         method: "GET",
//         headers:{
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Access-Control-Allow-Origin": "*"
//         }
//     }).catch(error =>{
//         window.confirm("Problem encountered with fetch operation: " + error.message);
//     });
//     if(response != null){
//         console.log("response = ", response);
//         let responseJSON = await response.json();
//         console.log("RJ: " + responseJSON);
//         return responseJSON;
//     }else{
//         console.log("promise undefined");
//     }
// }
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


export async function getUserID(username){
    
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
            console.log("hello");
            window.confirm("Problem encountered with fetch operation: " + error.message);
        });
    if (response != null){
        const data = await response.json().catch(error =>{
            // window.confirm("Problem encountered with JSON operation: " + error.message);
        });
        if (data != null){
            return data.id;
        }else{
            return "...unknown...";  
        }
    }
}
export async function loginUser(un, pw){
    let response;
    response = await fetch('http://localhost:8080/user', {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            userID: 1,
            username: un,
            password: pw,
            role: "a"
        })
    }).catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    let responseJSON = await response.json();
    console.log("response = ", responseJSON);
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
export async function getUserID(username){
    const response = await fetch(`http://localhost:8080/findUser/${username}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }).catch(error =>{
        window.confirm("Problem encountered with fetch operation: " + error.message);
    });
    if(response != null){
        console.log("response = ", response);
        let responseJSON = await response.json();
        console.log("RJ: " + responseJSON);
        return responseJSON;
    }else{
        console.log("promise undefined");
    }
}
export async function loginUser(username, password){
    let response;
    response = await fetch('http://localhost:8080/user', {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            userID: 1,
            username: "EARN",
            password: "mypassword",
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
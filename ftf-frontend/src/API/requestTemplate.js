const baseURL = "http://localhost:8080/"

export async function makeRequest(type, url, params){

    if (type == null || url == null || params == null){
        alert("invalid parameters to makeRequest");
        return null;
    }
    let arrTypes = ['GET', 'POST', 'PATCH', 'DELETE'];
    if (!arrTypes.includes(type)){
        alert("invalid request type");
        return null;
    }
    let requestOptions = {
        method: type,
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(params),    
    }
    //exclude body for get/head requests
    if (type === 'GET'){
        requestOptions = {
            method: type,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        }
    }
    
    const response = await fetch(`${baseURL}${url}`, requestOptions)
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
            return null;  
        }
    }else{
        return null;
    }
}
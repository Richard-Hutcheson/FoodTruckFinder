export function getFoodTypes(){
    let typeList = ["AMERICAN", "CHINESE", "ITALIAN", "MEXICAN", "GREEK", "KOREAN", "JAPANESE",
    "VIETNAMESE", "THAI", "INDIAN", "FRENCH", "GERMAN", 'DESSERT', 'DRINK'];
    return typeList;
}

//for googleMaps.js
export function clear(marker, responseDiv) {
    marker.setMap(null);
    responseDiv.style.display = "none";
}
export function geocodeSearch(request, geocoder, map, marker, response, responseDiv) {
    clear(marker, responseDiv);
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;
        map.setCenter(results[0].geometry.location);
        marker.setPosition(results[0].geometry.location);
        marker.setMap(map);
        responseDiv.style.display = "block";
        // response.innerText = JSON.stringify(result, null, 2);
        return results;
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  }
export function centerMap(address, geocoder, map){
    geocoder
    .geocode(address)
    .then((result) => {
        const { results } = result;
        let text = JSON.stringify(result, null, 2);
        let parse = JSON.parse(text);
        let userMarker = new window.google.maps.Marker({map: map,label:{text: "YOU", fontWeight: "bold"}});
        userMarker.setPosition(results[0].geometry.location);
        // userMarker.setMap(map);
        map.setCenter(results[0].geometry.location); //set center around user's address
        map.setZoom(17);
        // console.log(parse.results[0].geometry.location.lat);
        // console.log(parse.results[0].geometry.location.lng);

        // console.log(text.results[0].geometry.location.lat, text.results[0].geometry.location.lng );
        let loc = {"lat": parse.results[0].geometry.location.lat, "lng": parse.results[0].geometry.location.lng};
        return "HELLO";
    })
    .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
    });
}
export function setTruckMarkers(address, geocoder, map, truckName){
    geocoder
    .geocode(address)
    .then((result) => {
        const { results } = result;
        let text = JSON.stringify(result, null, 2);
        let parse = JSON.parse(text);

        let icon = {
            url: "https://i.ibb.co/XyDz8YC/just-Truck.png", 
            scaledSize: new window.google.maps.Size(50, 30), 
            labelOrigin: new window.google.maps.Point(20,-10),
        }
        let userMarker = new window.google.maps.Marker({map: map,label:{text: truckName, color: 'green'}, icon: icon});
        userMarker.setPosition(results[0].geometry.location);
        // userMarker.setMap(map);

        // console.log(text.results[0].geometry.location.lat, text.results[0].geometry.location.lng );
        let loc = {"lat": parse.results[0].geometry.location.lat, "lng": parse.results[0].geometry.location.lng};
    })
    .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
    });
}
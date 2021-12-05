import {clear, centerMap, geocodeSearch, setTruckMarkers} from '../API/helperFunctions'






export function initMap(address, allRoutes) {
    address = address.street + ", " + address.city + ", " + address.state;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=mapCallBack&v=weekly&channel=2`;
    script.async = true;
    document.head.appendChild(script);
    window.mapCallBack = async function(){
        let map;
        let marker;
        let geocoder;
        let responseDiv;
        let response;

        map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: { lat: 31.545872, lng: -97.117883 },
        mapTypeControl: false,
        });
        geocoder = new window.google.maps.Geocoder();
        centerMap({address: address}, geocoder, map);
        const inputText = document.createElement("input");
    
        inputText.type = "text";
        inputText.placeholder = "Enter a location";
    
        const submitButton = document.createElement("input");
    
        submitButton.type = "button";
        submitButton.value = "Search";
        submitButton.classList.add("button", "button-primary");
    
        const clearButton = document.createElement("input");
    
        clearButton.type = "button";
        clearButton.value = "Clear";
        clearButton.classList.add("button", "button-secondary");
        response = document.createElement("pre");
        response.id = "response";
        response.innerText = "";
        responseDiv = document.createElement("div");
        responseDiv.id = "response-container";
        responseDiv.appendChild(response);
    
        const instructionsElement = document.createElement("p");
    
        instructionsElement.id = "instructions";
        // instructionsElement.innerHTML =
        // "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputText);
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(submitButton);
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(clearButton);
        map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
        map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
        marker = new window.google.maps.Marker({
        map,
        });
        // map.addListener("click", (e) => {
        // geocodeSearch({ location: e.latLng },  geocoder, map, marker, response, responseDiv);
        // });
        let truckMap = new Map();
        let idVal = 0;
        for (let i =0; i <  allRoutes.length; i++){
            //TRUCK ALREADY IN MAP
            if (!truckMap.has(allRoutes[i].truck.truckName)){
                truckMap.set(allRoutes[i].truck.truckName, idVal);
                idVal++;
            }
            let routeAddr = allRoutes[i].address + ", " + allRoutes[i].city + ", " + allRoutes[i].state;
            let truckName = allRoutes[i].truck.truckName;
            setTruckMarkers({address: routeAddr}, geocoder, map, truckName);
        }
        
        
        
        submitButton.addEventListener("click", () =>
        geocodeSearch({ address: inputText.value },  geocoder, map, marker, response, responseDiv)
        );
        clearButton.addEventListener("click", () => {
        clear(marker, responseDiv);
        });
        clear(marker, responseDiv);
    }
    
  }

















export function callMaps(map){
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=places`;
    script.async = true;
    
    // Append the 'script' element to 'head'
    document.head.appendChild(script);

    // Attach your callback function to the `window` object
    window.initMap = function() {
    // JS API is loaded and available
        map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 31.54626, lng: -97.1184},
            zoom: 18,
        });
        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input");
        const searchBox = new window.google.maps.places.SearchBox(input);

        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener("bounds_changed", () => {
            searchBox.setBounds(map.getBounds());
        });

        let markers = [];

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();

            if (places.length === 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach((marker) => {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            const bounds = new window.google.maps.LatLngBounds();

            places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                const icon = {
                    url: place.icon,
                    size: new window.google.maps.Size(71, 71),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(17, 34),
                    scaledSize: new window.google.maps.Size(25, 25),
                };

                // Create a marker for each place.
                markers.push(
                    new window.google.maps.Marker({
                        map,
                        icon,
                        title: place.name,
                        position: place.geometry.location,
                    })
                );
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    }


}
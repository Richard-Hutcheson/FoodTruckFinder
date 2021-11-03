export function callMaps(map){
    // const additionalOptions = {};

    // const loader = new Loader({
    //     apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //     version: "weekly",
    //     ...additionalOptions,
    // });
      
    // loader.load().then(() => {
    //     map = new window.google.maps.Map(document.getElementById("map"), {
    //         center: { lat: 31.54626, lng: -97.1184},
    //         zoom: 18,
    //         mapTypeId: "roadmap",
    //     });
    // });
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

            if (places.length == 0) {
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
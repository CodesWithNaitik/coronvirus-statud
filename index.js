function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data2.json")
        .then(response => response.json())
        .then(resp => {
            console.log(resp.data)
            resp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;
            if (cases>1001){
                color = "rgb(255, 0, 0)";
            }

            else{
                color = `rgb(${cases}, 0, 0)`;
            }
            
            //     // Mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color: color
            }).setLngLat([longitude, latitude])
            .addTo(map); 
        });
    })
}
let interval=2000;
setInterval(updateMap, interval);
// fetch("/data2.json")
// .then(response => response.json())
// .then(resp => {
// console.log(resp.data)
// resp.data.forEach(element => {
// cases = element.infected;
// color = `rgb(${cases}, 0, 0)`;
// });
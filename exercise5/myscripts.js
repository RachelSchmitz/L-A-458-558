 var map = L.map('map').setView([43.042778, -91.184167], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoicmFjaGVsc2NobWl0eiIsImEiOiJjazZzbmFxajcwaW5tM2Vyem9mbDl3M2QzIn0.BbIzDBMGcsv3Y3KolAmzhg' 
        }).addTo(map);

        L.marker([43.042778,-91.184167]).addTo(map)
            .bindPopup("My Hometown")
            .openPopup();
        
        L.circle([43.042778,-91.184167], {radius: 1200}).addTo(map);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', 
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(map);
        
        var baseLayers = {
    "Mapbox": mapbox,
    "OpenStreetMap": osm
};
var overlays = {
    "Marker": marker,
    "Roads": roadsLayer
};
L.control.layers(baseLayers, overlays).addTo(map);
            //array of towns
    
    var towns = [
        [41.590833, -93.620833, "Des Moines, Iowa"]
        [42.034722, -93.62, "Ames, Iowa"]
        [43.042778,-91.184167, "Marquette, Iowa"]
    ];
    
    for (var i= 0; i < towns.length; i++){
    marker = new L.marker([towns[i][0],towns[i][1]])
    .bindPopup(towns[i][2])
    .addTo(map)
    }
    
    
    //Pan to Marquette
    
    function marquette () {
        map.panTo(new L.LatLng (43.042778,-91.184167));
    }
    
    //set Zoom
    $("zoomOut").click(function() {
        map.setZoom(6);
    }
    
    //Ames Iowa
    $("ames").click(function() {
    map.setView(new L.LarLng( 42.034722,-93.62 ) 10);
    );
        


    //array of towns
    
    var towns = [
        [41.590833, -93.620833, "Des Moines, Iowa"]
        [42.034722, -93.62, "Ames, Iowa"]
        [43.042778, -91.184167, "Marquette, Iowa"]
    ];
    
    for (var i= 0; i < towns.length; i++){
    marker = new L.marker([towns[i][0],towns[i][1]])
    .bindPopup(towns[i][2])
    .addTo(map)
    .openPopup ();
    }
    
        
    
    //Pan to Marquette
    
    function marquette () {
        map.panTo(new L.LatLng (43.042778, -91.184167));
    }
    
    //set Zoom
    $("zoomOut").click(function() {
        map.setZoom(6);
    }
    
  
        document.getElementById("amesbutton").addEventListener("click", ames);

        function amesbutton() {
            map.setView(new L.LatLng(42.034722, -93.62), 13);
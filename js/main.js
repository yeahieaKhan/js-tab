function openCity(event, cityName){
    var tabcontent = document.getElementsByClassName("tabcontent");
    for(var i = 0; i< tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    document.getElementById(cityName).style.display ="block";


   
    
}
document.getElementById("defoultOpen").click();
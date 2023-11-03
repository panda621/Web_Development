window.onload=function(){

    var button= document.getElementById("change_weather")  
    button.onclick=function(){
        var weather=prompt("Welcome to the Weather Man. I will brighten up your mood whatecer the weather is like. What's the weather now?");
        // alert("Next weather")
        if (weather.toLowerCase() == "sunny"){
            document.getElementById("animation").src="//giphy.com/embed/3VSM58Eu7kR4A";
        }
        else if (weather.toLowerCase()=="rainy"){
            document.getElementById("animation").src="//giphy.com/embed/xTiTnngt1MsrXlpIPe";
        }
        else if (weather.toLowerCase()=="snowy"){
            document.getElementById("animation").src="//giphy.com/embed/Fh3ezinVpi4yk";        
        }
        else if (weather.toLowerCase()=="windy"){
            document.getElementById("animation").src="//giphy.com/embed/p4D5Lp6cyoz2o";
  
        }
    }
}

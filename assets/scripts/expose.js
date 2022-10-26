// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //load the correct horn image based on user input for horn option

  let selection = document.getElementById("horn-select");
  selection.addEventListener('change', (event) => {

    let hornName = event.target.value;

    // getElementsByName returns a collection of HTML elements that match this name
    // and since there is only 1 img tag, it exists in the first index
    let image =  document.getElementsByTagName("img")[0];

    if(hornName == "air-horn"){
      console.log("hornName was airhorn")
      image.src = "assets/images/air-horn.svg";
    }
    if(hornName == "car-horn"){
      console.log("hornName was car horn")
      image.src = "assets/images/car-horn.svg";
    }
    if(hornName == "party-horn"){
      console.log("hornName was  party horn")
      image.src = "assets/images/party-horn.svg";
    }


  });



}
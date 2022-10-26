// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //load the correct horn image based on user input for horn option
  let selection = document.getElementById("horn-select");
  selection.addEventListener('change', (event) => {

    // Access the value of the <option> that was selected
    let hornName = event.target.value;

    /* getElementsByName returns a collection of HTML elements that match this name
     * and since there is only 1 img tag, it exists in the first index
     */
    let image = document.getElementsByTagName("img")[0];
    let audio = document.getElementsByClassName("hidden")[0];

    // load the correct image 
    if (hornName == "air-horn") {
      console.log("hornName was airhorn")
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";

    }
    if (hornName == "car-horn") {
      console.log("hornName was car horn")
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";

    }
    if (hornName == "party-horn") {
      console.log("hornName was  party horn")
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";

    }
  });


  let playBUtton = document.getElementsByTagName("button")[0];
  playBUtton.addEventListener('click', () => {
    let audio = document.getElementsByTagName("audio")[0];
    audio.play();
    
  });



}
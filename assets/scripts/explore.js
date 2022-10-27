// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;
  let selection = document.getElementById("voice-select");
  let inputTxt = document.getElementById("text-to-speak");
  let playBtn = document.getElementsByTagName("button")[0];

  let script = null;
  let voices = [];


  //  getting voices takes time so we have to wait after page loads
  setTimeout(() => {
    console.log("laoding explore")
    let dropDown = document.getElementById("voice-select")
  
    // Store list of all voices in browser
    voices = synth.getVoices();

    // Create a new option element for each voice 
    voices.forEach(voice => {
      let option = document.createElement('option');
      option.textContent= `${voice.name} ${voice.lang}`;
  
      // insert the new option at end of selection list
      dropDown.appendChild(option);
    })
}, 1000);

  
  // When user changes and selects a new voice 
  selection.addEventListener('change', ()=>{

    // Find the corresponding voice in the list 
    voices.forEach((voice)=> {

      // if the selected voice matches an entry in the list
      if(selection.value.includes(voice.name)){

        console.log(voice.lang + " was selected");

        // create a new script for the voice by getting the user input
        script = new SpeechSynthesisUtterance(inputTxt.value);

        // set the script's language to the selected voice's language
        script.lang = voice.lang;
        console.log("Synth will speak: " + inputTxt.value)
      }

    })
   
  })


  playBtn.addEventListener('click', ()=> {
    synth.speak(script);
  })

}
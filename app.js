// let inputEl = document.getElementById("input-el");
// let translateBtn = document.getElementById("translate-btn");
// let output = document.getElementById("output");

// let serverUrl = "https://api.funtranslations.com/translate/minion.json";

// function getTranslationUrl(text){
//     return serverUrl + "?" + "text=" + text;
// }

// function errorHandler(error){
//     console.log("error ocurred",error);
// }

// translateBtn.addEventListener("click",function(){
//     let inputText = inputEl.value;

//     //server called here for processing
//     fetch(getTranslationUrl(inputText)).then(response => response.json())
//     .then(json=>output.textContent = json.contents.translated).catch(errorHandler);
// })
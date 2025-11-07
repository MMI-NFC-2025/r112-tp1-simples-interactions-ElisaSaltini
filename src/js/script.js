// changer la couleur du texte en rouge
const AMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
AMettreEnRouge.style.color = "red"

//changer en rouge quand click
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
enRougeSuiteAClick.addEventListener("click", (evt)=>{
    enRougeSuiteAClick.style.color = "red"
}); 

//changer en rouge seconds titres quand click
const collH2 = document.querySelectorAll("h2");
collH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color = "red";
    });
}); 

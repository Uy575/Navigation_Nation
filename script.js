const nav = document.getElementById("container");
const item1 = document.getElementById("home");
const item2 = document.getElementById("About");
const item3 = document.getElementById("Contact");
const item4 = document.getElementById("Ending");
const overlay = document.getElementById("overLay");


function toggle(){
    nav.classList.toggle("change");
    // overlay.classList.add("overlayShow");
    overlay.classList.toggle("overlayActive");
    if(overlay.classList.contains("overlayActive")){
        overlay.classList.add("overlayShow");
        overlay.classList.remove("overlayHide");
    }
    else{
        overlay.classList.remove("overlayShow");
        overlay.classList.add("overlayHide");
    }
   

}
nav.addEventListener("click",toggle);


item1.addEventListener("click",toggle);
item2.addEventListener("click",toggle);
item3.addEventListener("click",toggle);
item4.addEventListener("click",toggle);
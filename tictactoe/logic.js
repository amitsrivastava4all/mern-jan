var flag = true;
function printingXorZero(){
    console.log("X or Zero Called ",this);
    if(this.innerText.length==0){
    this.innerText = flag?"X":"0";
    flag = !flag;
    }
}
//bindEvents();
window.addEventListener("load",bindEvents);
function bindEvents(){
    console.log("Bind Event Call");
    var buttons = document.querySelectorAll("button");
   // var buttons = document.getElementsByTagName("button");
    // for(let i = 0 ; i<buttons.length; i++){

    // }
    // for(let button of buttons){

    // }
    buttons.forEach(currentButton => {
        currentButton.addEventListener("click",printingXorZero);
    });
}
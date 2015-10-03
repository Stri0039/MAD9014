// JavaScript Document
var longRect; 
var shortRect;
var boxCheck = false;

window.onload = function()
{
longRect =  document.querySelector(".long-rect");
shortRect =   document.querySelector(".short-rect");
  console.log("Page is loaded.");

addEvents();  
}


function addEvents(){
   
  
        
     longRect.addEventListener("mouseover", function( event ) {
     shortRect.innerHTML = "over";
  
    if(boxCheck == false)
      {
        shortRect.addEventListener("click", function( event ) {
        alert("Congratulation!");
      });
       
     boxCheck = true;
     }
      });


     
    
  
   longRect.addEventListener("mouseout", function( event ) {
     shortRect.innerHTML = "out";
   });
}




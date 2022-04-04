//get model elment 
var model=document.getElementById('simplemodel');
//get open model
var modelBtn=document.getElementById('modelBtn');
//get close model
var closeBtn=document.getElementsByClassName('closeBtn')[0];



//list o click to open model
modelBtn.addEventListener('click',openModel);
//when page loaded
document.addEventListener('DOMContentLoaded',openModel);
//click to close
closeBtn.addEventListener('click',closeModel);
//out side click 
window.addEventListener('click',clickOutSide);

//function
function openModel(){
    model.style.display='block';
}
//function closeModel
function closeModel(){
    model.style.display='none';
}
//function closeModel
function clickOutSide(e){
if(e.target==model){
    model.style.display='none';
 }
}
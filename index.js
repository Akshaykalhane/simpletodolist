let addtodobtn=document.getElementById("addbtn");
let todocontainer=document.getElementById('todocontainer');
let inputfield=document.getElementById('inputfield');
let errormsg=document.getElementById('error')
function addvalue(){
    let parainput=document.createElement('p');
    parainput.classList.add('paragraph-style')
    parainput.innerText=inputfield.value;
    inputfield.value=" ";
    todocontainer.appendChild(parainput);
    // console.log(parainput)
}
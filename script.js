const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

function addTask(){
    if(inputbox.value === ""){
        alert('You must write something');
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveStorage();
}

listcontainer.addEventListener("click",function(e){
        if (e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveStorage();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveStorage();
        }
},false)

function saveStorage(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();



rev=()=>{
    let title = document.getElementById('title');
    let btn = document.getElementById('btn');
    btn.style.display="none";
    title.innerText="You are ready to learn more!";
}

function roll(){
    let dice = document.getElementById('dice');
    let random= Math.floor(Math.random()*6)+1;
    let audio= document.getElementById('diceAudio'); 
    dice.classList.add('spin'); //add or remove class
    audio.play();

    setTimeout (function(){
            dice.classList.remove('spin');
            dice.innerText = random;

    },1000);
}


function createBox(){
    let div = document.createElement('div');
    let boxContainer = document.getElementById('boxContainer');
    boxContainer.appendChild(div);
    div.classList.add('box');
}

let users= [];
let usersContainer=document.getElementById('usersContainer');
let alert=document.getElementById('alert');

function renderUsers(){
    usersContainer.innerHTML=""; //to clear the previous data   
    users.forEach((user)=>{
    let div= document.createElement('div');
    let name=document.createElement('p');
    let email=document.createElement('p');
    div.classList.add('user');
    usersContainer.appendChild(div);
    name.innerText=user.name;
    email.innerText=user.email;
    div.appendChild(name);
    div.appendChild(email);

    })

    // let div= document.createElement('div');
    // let name=document.createElement('p');
    // let email=document.createElement('p');
    // div.classList.add('user');
    // usersContainer.appendChild(div);
    // name.innerText=users[0].name;
    // email.innerText=users[0].email;
    // div.appendChild(name);
    // div.appendChild(email);
    
}

function checkUsers(email){
    let user = users.filter((user)=>{
        return user.email==email;
    })
    return user.length > 0 ? true : false;
}
function hideAlert(){
    setTimeout(()=>{
        alert.classList.remove('success', 'danger');
    },2000)
}

function addUser(){
    let name= document.getElementById('name');
    let email= document.getElementById('email');
    let user = {
        name: name.value,
        email: email.value,
    }
    //users = [];
    
    let ifUserExist = checkUsers(email.value);
    if(ifUserExist == false){
        users.push(user);
        alert.classList.add('success');
        alert.innerText="sucessfully added!";
        hideAlert();
    }else{
        alert.classList.add('danger');
        alert.innerText="User already exists!";
        hideAlert();
    }

    renderUsers();
}

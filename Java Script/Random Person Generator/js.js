const generateRequest = document.getElementById('generateRequest');
const button = document.getElementById('getRandom');
const skeletonCont = document.getElementById('skeletonCont');
const realCont = document.getElementById('realCont');
const upper = document.getElementById('upper');
const mid = document.getElementById('mid');
const lower = document.getElementById('lower');

skeletonCont.style.display = "none";
realCont.style.display = "none";

function gettingRandom() {
    upper.innerText = "";
    mid.innerText = "";
    lower.innerText = "";
    generateRequest.style.display = "none";
    skeletonCont.style.display = "flex";
    realCont.style.display = "none";
    setTimeout(() => {
        skeletonCont.style.display = "none";
        realCont.style.display = "flex";
        randomPerson();
    }, 2000)
}

async function randomPerson() {
    let response = await fetch("https://randomuser.me/api/");
    let obj = await response.json();
    obj = obj.results[0]

    upper.innerHTML = `
    <img src="${obj.picture.large}" alt="Profile Picture" />
    <div class="pCont">
        <div id="name" class="name">${obj.name.title}. ${obj.name.first} ${obj.name.last}</div>
        <div id="email" class="email">${obj.email}</div>
    </div>
    `;
    mid.innerHTML = `
    <div id="age" class="info"><span>Gender</span>: ${obj.gender}, <span>DOB</span>: ${new Date(obj.dob.date).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})}, <span>Age</span>: ${obj.dob.age}</div>
    <div id="username" class="info"><span>Username</span>: ${obj.login.username}</div>
    <div id="Regdate" class="info"><span>Registered On</span>: ${obj.registered.date.slice(0,10)}</div>
    <div id="Add" class="info"><span>Address</span>: ${obj.location.street.number}-${obj.location.street.name}, ${obj.location.city}, ${obj.location.state}, ${obj.location.country} - ${obj.location.postcode}</div>
    `;
    lower.innerHTML = `
    <div class="label"><span>Contact Number</span></div>
    <div id="pNO" class="info">${obj.phone} / ${obj.cell}</div>
    `;
}

button.onclick = gettingRandom;

const generateRequest = document.getElementById('generateRequest');
const button = document.getElementById('getRandom');
const skeletonCont = document.getElementById('skeletonCont');
const realCont = document.getElementById('realCont');
const upper = document.getElementById('upper');
const mid = document.getElementById('mid');
const lower = document.getElementById('lower');

skeletonCont.style.display = "none";
realCont.style.display = "none";


function gettingRandom(){
    upper.innerText = "";
    mid.innerText = "";
    lower.innerText = "";
    generateRequest.style.display = "none";
    skeletonCont.style.display = "block";
    realCont.style.display = "none";
    setTimeout(()=>{
        skeletonCont.style.display = "none";
        realCont.style.display = "block";
        randomPerson();
    },2000)

}
async function randomPerson(){
    
    let response = await fetch("https://randomuser.me/api/");
    let obj = await response.json();
    obj = obj.results[0]

    upper.innerHTML = `
    <img src="${obj.picture.large}" class="h-36 w-36 rounded-full"/>
    <div class="pCont">
        <div id="name" class="text-[150%] font-semibold">${obj.name.title}. ${obj.name.first} ${obj.name.last}</div>
        <div id="email" class="text-[110%] text-[#5a5555]">${obj.email}</div>
    </div>
    `;
    mid.innerHTML = `
    <div id="age" class="absolute top-[55%] text-[#5a5555]" ><span>Gender</span>: ${obj.gender}, <span>DOB</span>: ${new Date(obj.dob.date).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})}, <span>Age</span>: ${obj.dob.age}</div>
    <div id="username" class="absolute top-[75%] text-[#5a5555]" ><span>Username</span>: ${obj.login.username}</div>
    <div id="Regdate" class="absolute top-[95%] text-[#5a5555]" ><span>Registered On</span>: ${obj.registered.date.slice(0,10)}</div>
    <div id="Add" class="absolute top-[115%] text-[#5a5555]" ><span>Address</span>: ${obj.location.street.number}-${obj.location.street.name}, ${obj.location.city}, ${obj.location.state}, ${obj.location.country} - ${obj.location.postcode}</div>
    `;
    lower.innerHTML = `
    <div class="absolute top-[25%]"><span>Contact Number</span></div>
    <div id="pNO" class="absolute top-[40%] text-[#5a5555]">${obj.phone} / ${obj.cell}</div>
    `;

}
button.onclick = gettingRandom;
// Additional section of heart counting

document.getElementById("count-btn").addEventListener("click",
    function(){
        const counter= parseInt(document.getElementById("heart-count").innerText)
        let count=counter+1;
        document.getElementById("heart-count").innerText= count;
    }
)

document.getElementById("count-btn-police").addEventListener("click",
    function(){
        const counter= parseInt(document.getElementById("heart-count").innerText)
        let count=counter+1;
        document.getElementById("heart-count").innerText= count;
    }
)

document.getElementById("count-btn-fire").addEventListener("click",
    function(){
        const counter= parseInt(document.getElementById("heart-count").innerText)
        let count=counter+1;
        document.getElementById("heart-count").innerText= count;
    }
)

document.getElementById("count-btn-ambulance").addEventListener("click",
    function(){
        const counter= parseInt(document.getElementById("heart-count").innerText)
        let count=counter+1;
        document.getElementById("heart-count").innerText= count;
    }
)
document.getElementById("count-btn-women").addEventListener("click",
    function(){
        const counter= parseInt(document.getElementById("heart-count").innerText)
        let count=counter+1;
        document.getElementById("heart-count").innerText= count;
    }
)
document.getElementById("count-btn-corruption").addEventListener("click",
    function(){
        const counter= parseInt(document.getElementById("heart-count").innerText)
        let count=counter+1;
        document.getElementById("heart-count").innerText= count;
    }
)
document.getElementById("count-btn-electricity").addEventListener("click",
    function(){
        const counter= parseInt(document.getElementById("heart-count").innerText)
        let count=counter+1;
        document.getElementById("heart-count").innerText= count;
    }
)
document.getElementById("count-btn-brac").addEventListener("click",
    function(){
        const counter= parseInt(document.getElementById("heart-count").innerText)
        let count=counter+1;
        document.getElementById("heart-count").innerText= count;
    }
)
document.getElementById("count-btn-railway").addEventListener("click",
    function(){
        const counter= parseInt(document.getElementById("heart-count").innerText)
        let count=counter+1;
        document.getElementById("heart-count").innerText= count;
    }
)

// Call and call history section

let coins=100;
let counter= parseInt(document.getElementById("coin-count").innerText)


document.getElementById("emergency-call").addEventListener("click",function(e){
    e.preventDefault

if(counter>=20){

    counter -=20
        document.getElementById("coin-count").innerText= counter;


const callHistory=document.getElementById("call-history");
const callingTo= document.getElementById("emergency-call").getAttribute("data-name")


const phone= document.getElementById("emergency-call").getAttribute("data-phone")

// Time
const now= new Date();
let hours= now.getHours();
let minutes=now.getMinutes();
let ampm="AM"


if(hours >=12){
    ampm="PM"
    if(hours>12){hours=hours-12;}
}

if(hours===0){hours=12}
if(minutes<10){minutes="0"+minutes}

const currentTime= hours +":"+minutes+""+ampm;

// For new 
const item=document.createElement("div");
item.className= "call-item bg-gray-200 p-2 rounded-xl mb-2 mt-2 ";
item.innerHTML= `<strong class="mr-5 ml-1">${callingTo}</strong> <span>${currentTime}</span><br><small class="ml-1">999</small>`;

callHistory.appendChild(item);

    }

else{alert("You have not enough coin for call")}

    })

























// Clear Button 
document.getElementById("clear-btn").addEventListener("click",
    function(){
        document.getElementById("call-history").innerHTML="";
    }
)
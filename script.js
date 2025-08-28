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
// Reusable Code
let coins = parseInt(document.getElementById("coin-count").innerText);

const callButtons = ["police-call", "emergency-call", "fire-call", "ambulance-call", "women-call","corruprion-call", "elecricity-call", "brac-call", "railway-call" ];

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = "AM";

  if (hours >= 12) {
    ampm = "PM";
    if (hours > 12) hours -= 12;
  }
  if (hours === 0) hours = 12;
  if (minutes < 10) minutes = "0" + minutes;

  return `${hours}:${minutes} ${ampm}`;
}

const callHistory = document.getElementById("call-history");


callButtons.forEach(buttonId => {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", function(e) {
    e.preventDefault();

    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-count").innerText = coins;

      const name = button.getAttribute("data-name");
      const phone = button.getAttribute("data-phone");
      const time = getCurrentTime();

      const item = document.createElement("div");
      item.className = "call-item bg-gray-200 p-2 rounded-xl mb-2 mt-2";
      item.innerHTML = `
        <strong class="mr-5 ml-1">${name}</strong> 
        <span>${time}</span><br>
        <small class="ml-1">${phone}</small>
      `;

      callHistory.appendChild(item);

      alert(`📞 Calling ${name} (${phone})`);
    } else {
      alert("You have not enough coin for call");
    }
  });
});




// Clear Button 
document.getElementById("clear-btn").addEventListener("click",
    function(){
        document.getElementById("call-history").innerHTML="";
    }
)






// Copy part section
document.getElementById("ecopy-btn").addEventListener("click", 
    function(){
        
        let numbers= parseInt(document.getElementById("number").innerText)     
        navigator.clipboard.writeText(numbers)
        alert("Number copied to clipboard!")

        const counter= parseInt(document.getElementById("copy-count").innerText)
        let count=counter+1;
        document.getElementById("copy-count").innerText= count;
    }
)




document.getElementById("pcopy-btn").addEventListener("click", 
    function(){
        
        let numbers= parseInt(document.getElementById("police-number").innerText)     
        navigator.clipboard.writeText(numbers)
        alert("Number copied to clipboard!")

        const counter= parseInt(document.getElementById("copy-count").innerText)
        let count=counter+1;
        document.getElementById("copy-count").innerText= count;
    }
)


document.getElementById("fcopy-btn").addEventListener("click", 
    function(){
        
        let numbers= parseInt(document.getElementById("fire-number").innerText)     
        navigator.clipboard.writeText(numbers)
        alert("Number copied to clipboard!")

        const counter= parseInt(document.getElementById("copy-count").innerText)
        let count=counter+1;
        document.getElementById("copy-count").innerText= count;
    }
)


document.getElementById("acopy-btn").addEventListener("click", 
    function(){
        
        let numbers= parseInt(document.getElementById("ambulance-number").innerText)     
        navigator.clipboard.writeText(numbers)
        alert("Number copied to clipboard!")

        const counter= parseInt(document.getElementById("copy-count").innerText)
        let count=counter+1;
        document.getElementById("copy-count").innerText= count;
    }
)


document.getElementById("wcopy-btn").addEventListener("click", 
    function(){
        
        let numbers= parseInt(document.getElementById("women-number").innerText)     
        navigator.clipboard.writeText(numbers)
        alert("Number copied to clipboard!")

        const counter= parseInt(document.getElementById("copy-count").innerText)
        let count=counter+1;
        document.getElementById("copy-count").innerText= count;
    }
)



document.getElementById("ccopy-btn").addEventListener("click", 
    function(){
        
        let numbers= parseInt(document.getElementById("corruption-number").innerText)     
        navigator.clipboard.writeText(numbers)
        alert("Number copied to clipboard!")

        const counter= parseInt(document.getElementById("copy-count").innerText)
        let count=counter+1;
        document.getElementById("copy-count").innerText= count;
    }
)



document.getElementById("elecopy-btn").addEventListener("click", 
    function(){
        
        let numbers= parseInt(document.getElementById("electricity-number").innerText)     
        navigator.clipboard.writeText(numbers)
        alert("Number copied to clipboard!")

        const counter= parseInt(document.getElementById("copy-count").innerText)
        let count=counter+1;
        document.getElementById("copy-count").innerText= count;
    }
)



document.getElementById("bcopy-btn").addEventListener("click", 
    function(){
        
        let numbers= parseInt(document.getElementById("brac-number").innerText)     
        navigator.clipboard.writeText(numbers)
        alert("Number copied to clipboard!")

        const counter= parseInt(document.getElementById("copy-count").innerText)
        let count=counter+1;
        document.getElementById("copy-count").innerText= count;
    }
)


document.getElementById("rcopy-btn").addEventListener("click", 
    function(){
        
        let numbers= parseInt(document.getElementById("railway-number").innerText)     
        navigator.clipboard.writeText(numbers)
        alert("Number copied to clipboard!")

        const counter= parseInt(document.getElementById("copy-count").innerText)
        let count=counter+1;
        document.getElementById("copy-count").innerText= count;
    }
)









  
    
     

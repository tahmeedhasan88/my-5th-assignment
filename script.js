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
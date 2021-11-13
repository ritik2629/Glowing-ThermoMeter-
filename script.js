const tempLoad = ()=>{
    let tempa =document.getElementById('tempa')
    tempa.innerHTML ="&#xf2cb";
    tempa.style.color = "yellow"
    tempa.style.textShadow="8px 8px 15px black"
setTimeout(()=>{
    tempa.innerHTML ="&#xf2ca"
    tempa.style.color = "hotpink"
},1000)
setTimeout(()=>{
    tempa.innerHTML ="&#xf2c9"
    tempa.style.color = "aqua"
    
},2000)
setTimeout(()=>{
    tempa.innerHTML ="&#xf2c8"
    tempa.style.color = "black"
},3000)
setTimeout(()=>{
    tempa.innerHTML ="&#xf2c7"
    tempa.style.color = "red"
},4000)
}
tempLoad();
setInterval(tempLoad , 5000);
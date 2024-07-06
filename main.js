let btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    document.body.style.backgroundColor = "#" + Math.random().toString(16).slice(2,8)
})
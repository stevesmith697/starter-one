let navBtn = document.querySelector("#nav_button")
if(navBtn){
    let header = document.querySelector("header")
    let closeBtn = document.createElement("button")
    closeBtn.classList.add("close-btn")
    closeBtn.setAttribute("type","button")
    header.querySelector("nav").prepend(closeBtn)

    navBtn.addEventListener("click",(e)=>{
        header.classList.add("hamburger-active")
    })

    closeBtn.addEventListener("click",(e)=>{
        header.classList.remove("hamburger-active")
    })
}
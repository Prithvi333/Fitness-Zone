let HLiving = document.getElementById("choose")
let clik = document.getElementById("sel")

clik.addEventListener("mouseover", () => {
    HLiving.style.opacity = 1
    HLiving.style.display = "flex"

})

clik.addEventListener("mouseleave", () => {
    HLiving.style.opacity = 0
})

HLiving.addEventListener("mouseover", () => {
    HLiving.style.opacity = 1
})


HLiving.addEventListener("mouseleave", () => {
    HLiving.style.opacity = 0
    HLiving.style.display = "none"
})


let grab = document.getElementById("aler")
let show = document.getElementById("disp")

grab.addEventListener("mouseover", () => [
    show.style.opacity = 1
])
grab.addEventListener("mouseleave", () => [
    show.style.opacity = 0
])

let chan = document.getElementsByClassName("first")
let sgnup = document.getElementById("up")
sgnup.addEventListener("click", () => {
    chan[0].textContent = "SIGN UP"
    chan[1].textContent = "SIGN UP"
})

let sgnin = document.getElementById("in")
sgnin.addEventListener("click", () => {
    chan[0].textContent = "SIGN IN"
    chan[1].textContent = "SIGN IN"
})

let sub = document.getElementById("send")
let user = document.getElementById("user")
let pass = document.getElementById("pass")

sub.addEventListener("submit", (e) => {
    e.preventDefault()
    let a = user.value
    let b = pass.value
    let useArr = JSON.parse(localStorage.getItem("userName"))
    let passArr = JSON.parse(localStorage.getItem("passName"))

    if (useArr == null) useArr = []
    if (passArr == null) passArr = []

    isres = false
    for (let i = 0; i < useArr.length; i++) {
        if (useArr[i] == a && passArr[i] == b) {
            isres = true
            break
        }
    }
    if (isres) {
        window.location.assign("hompage.html")
        alert("User already exist")
    }
    else {
        useArr.push(a)
        localStorage.setItem("userName", JSON.stringify(useArr))
        passArr.push(b)
        localStorage.setItem("passName", JSON.stringify(passArr))
        alert("User added")
    }

})


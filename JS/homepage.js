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


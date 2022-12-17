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




let mp = document.getElementById("a3")
let hold = document.getElementById("btt")
let tex = document.getElementById("obt")
fetch("/API/recipes.json").then(res => res.json()).then(res => {
    fil = res.expert
    displayData(res.recipes)
})

hold.addEventListener("click", () => {
    if (tex.value == "free")
        tex.value = "Free"
    else if (tex.value == "paid")
        tex.value = "Paid"
    if (tex.value == "Free" || tex.value == "Paid") {
        let filter = fil.filter((ele) => ele.type == tex.value)
        displayData(filter)
    }
    else {
        displayData(fil)
    }

})


function displayData(data) {
    mp.innerHTML = null
    let main = document.createElement("div")
    main.id = "fix"
    let cont = document.createElement("div")
    cont.setAttribute("class", "a3")

    data.forEach(element => {
        let card = document.createElement("div")
        card.id = "sub"
        let a = document.createElement("img")
        a.src = element.image
        a.id = "pic"
        let b = document.createElement("h3")
        b.innerText = element.text
        let c = document.createElement("p")
        c.innerText = element.para
        let d = document.createElement("p")
        d.innerText = element.time
        d.setAttribute("class", "lblue")
        let e = document.createElement("strong")
        e.innerText = element.type
        e.id = "str"
        card.append(e, a, b, c, d)
        cont.append(card)

    });
    main.append(cont)
    mp.append(main)
}
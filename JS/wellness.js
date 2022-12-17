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
fetch("/API/wellness.json").then(res => res.json()).then(res => {
    fil = res.expert
    displayData(res.wellness)
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
        let n = document.createElement("video")
        n.poster = element.image
        n.id = "pic"
        let a = document.createElement("source")
        a.src = "/vid.mp4"
        a.type = "video/mp4"
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
        n.addEventListener("mouseenter", (e) => {
            e.target.controls = true
            console.log(e.target)
        })
        n.addEventListener("mouseleave", (e) => {
            e.target.controls = false
            console.log(e.target)
        })
        n.append(a)
        card.append(e, n, b, c, d)
        cont.append(card)


    });
    main.append(cont)
    mp.append(main)
}


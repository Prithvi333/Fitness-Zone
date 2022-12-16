let HLiving=document.getElementById("choose")
let clik=document.getElementById("sel")
     
     let isture=true
clik.addEventListener("click",()=>{

   if(isture) {
    HLiving.style.display="flex"
    isture=false
   }
   else{
    HLiving.style.display="none"
    isture=true
   }
})

let mp=document.getElementById("mid-part")
let i=0
fetch("block-1.json").then(res=>res.json()).then(res=>displayData(res.data))
fetch("block-2.json").then(res=>res.json()).then(res=>displayData(res.data))
fetch("block-3.json").then(res=>res.json()).then(res=>displayData(res.data))
fetch("block-4.json").then(res=>res.json()).then(res=>displayData(res.data))
fetch("block-5.json").then(res=>res.json()).then(res=>displayData(res.data))

let low=["Newest Free Workout Videos","Newest Plus Workout Videos","Beginner Workouts","HIIT Workouts","Strength Workouts"]
let high=["View All Free Workouts","View All Plus Workouts","View All Beginner Workouts","View All HIIT Workouts","View All Strength Workouts"]

function displayData(data){
      let main=document.createElement("div")
      main.id="fix"
      let cont=document.createElement("div")
      cont.setAttribute("class", "grid-style")
      let top=document.createElement("div")
      top.id="upper"
      let left=document.createElement("h1")
      left.innerText=low[i]
      let right=document.createElement("strong")
      right.innerText=high[i]
      right.setAttribute("class","blue")
      top.append(left,right)
      mp.append(top)
      data.forEach(element => {
      let card=document.createElement("div")
      card.id="sub"
      let a=document.createElement("img")
      a.src=element.image
      a.id="pic"
      let b=document.createElement("h3")
      b.innerText=element.text
      let c=document.createElement("p")
      c.innerText=element.para
      let d=document.createElement("p")
      d.innerText=element.time
      d.setAttribute("class","lblue")
      card.append(a,b,c,d)
      cont.append(card)
      
   });
   i++
   main.append(cont)
   mp.append(main)
}
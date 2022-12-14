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
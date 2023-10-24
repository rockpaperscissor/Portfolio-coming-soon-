const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function cursorAnimation(){
    var first = document.querySelector("#first")
var round = document.querySelector(".round")
var second = document.querySelector("#second")
var bubble = document.querySelector(".bubble")
first.addEventListener("mouseenter",function(){
    gsap.to(round,{
        scale:1,
        opacity:1
    })

})
first.addEventListener("mouseleave",function(){
    gsap.to(round,{
        scale:0,
        opacity:0
    })

})
first.addEventListener("mousemove",function(dets){
    gsap.to(round,{
        left:dets.x-80,
        top:dets.y-80
    })
})
first.addEventListener("mousedown",()=>
    round.style .display = 'none'

);
    first.addEventListener("mouseup",()=>
    round.style .display = 'block');




}
cursorAnimation()
function loadingAnimation(){
    gsap.from("#first p",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.23
    })
    
   
}
loadingAnimation()




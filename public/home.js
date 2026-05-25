const items = document.querySelectorAll(".item");
const wheel = document.querySelector(".wheel");

items.forEach((item)=>{
  item.addEventListener("mouseenter", ()=>{
    wheel.style.animationPlayState = "paused";
  })

  item.addEventListener("mouseleave", ()=>{
    wheel.style.animationPlayState = "running"
  })
})

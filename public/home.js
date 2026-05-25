// const mainEl = document.querySelector("main");
// console.log(mainEl);

// mainEl.addEventListener("mousemove", (event)=>{
//   const xpos = event.offsetX;
//   const ypos = event.offsetY;


//   const spanEl = document.createElement("span");
//   spanEl.style.left = xpos + "px";
//   spanEl.style.top = ypos + "px";

//   const size = Math.random()*100;

//   spanEl.style.width = size + "px";
//   spanEl.style.height = size + "px";
//   mainEl.appendChild(spanEl)

//   setTimeout(()=>{
//     spanEl.remove();
//   },3000);
// })


// const load = document.querySelector(".load");
// const imgload = document.querySelector(".img-load");

// load.addEventListener("click", ()=>{
//    imgload.innerHTML = `<img src="https://picsum.photos/300/300?random=${Math.random()* 1000}">"`;
// })

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

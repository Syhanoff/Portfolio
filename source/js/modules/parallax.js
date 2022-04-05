document.addEventListener("mousemove", parallax);

function parallax(e){
  this.querySelectorAll(".e-move").forEach(move=>{
    const speed = move.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX*speed)/150;
    const y = (window.innerHeight - e.pageY*speed)/150;

    move.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

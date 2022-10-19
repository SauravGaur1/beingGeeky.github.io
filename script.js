let navItem  = document.querySelectorAll(".nav-item");
const collapseAble = document.getElementById("myNavbar");
// let bsCol = new bootsrap.collapse(collapseAble);
navItem.forEach(el =>{
    el.addEventListener("click", () => { /*bsCol.toggle();*/ alert(el.innerText)});
});
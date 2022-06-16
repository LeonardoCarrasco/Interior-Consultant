//DOM

const menu = document.querySelector("#icon-menu");
const close = document.querySelector("#icon-close");
const sidebar = document.querySelector(".container-sidebar");

console.log(menu);
console.log(sidebar);

menu.addEventListener("click", ()=>{

    sidebar.classList.add("active");
});

close.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
})
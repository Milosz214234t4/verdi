

function hamburger(){
  const mediaQuery = window.matchMedia('(max-width: 800px)');
  let x = document.querySelector("nav");
  console.log(x);
  x.classList.toggle("navigation-active");
 let y = document.querySelector(".hamburger");
 console.log(y);
 y.classList.toggle("hamburger--active");
 if(y.classList.contains("hamburger--active")){
   let z = document.querySelectorAll("nav ul li a");
   console.log(z);
   let li = document.querySelectorAll("nav ul li");
   for(let x = 0; x < li.length; x++){
     li[x].classList.add("margin")
   }
   let ul = document.querySelector("nav ul");
   console.log(ul);
   ul.classList.add("no-pointer");
for(let x = 0; x < z.length; x++){
  z[x].classList.add("list-style");
}

 }
 

}

function dropdown()
{let mediaQuery = window.matchMedia('(max-width: 800px)');

let nav = document.querySelector("nav");
console.log(mediaQuery.matches);
// console.log(nav.classList.contains("navigation-active"))
 if(!mediaQuery.matches){
  let x = document.querySelector("#dropdown-div");
  // console.log(x);
  x.classList.add("dropdown-hover");
  // x.classList.contains("dropdown-content")

    x.classList.remove("dropdown-content");
  
  let y = document.querySelector(".no-pointer");
  y.classList.add("grid");
 }

 
}

function dropdownnone(){
  
  let mediaQuery = window.matchMedia('(max-width: 800px)');
  // console.log(mediaQuery.matches);
    // console.log("jestem w petli")
    if(!mediaQuery.matches){
  let x = document.querySelector("#dropdown-div");
  // console.log(x);

  x.classList.remove("dropdown-hover");
  let y = document.querySelector(".no-pointer");
  y.classList.remove("grid");
  // let z = document.querySelector("#dropdown-div");
  // console.log(z.classList.contains("dropdown-hover"));
    x.classList.add("dropdown-content");
    }
  // let y = document.querySelector(".no-pointer");
  // y.classList.remove("grid");

}

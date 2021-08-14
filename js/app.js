

function hamburger(){
  const mediaQuery = window.matchMedia('(max-width: 800px)');
  console.log(mediaQuery);
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


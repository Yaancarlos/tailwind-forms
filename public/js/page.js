let slideIndex = 1;
showFuncion(slideIndex)

function showBorder(n){
    console.log('fffff')
    showFuncion(slideIndex = n)
}

function showFuncion(n) {
    let i;
   /*  document.getElementById(`border-${a}`).classList.replace('border-[#1E0E62]', "border-transparent") */
   let dots = document.getElementsByClassName("dot")
   for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" border-[#1E0E62]", "");
    }
    dots[slideIndex-1].className += " border-[#1E0E62]";
}
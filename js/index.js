var transformMultiple = -1;

window.addEventListener("load", function(){
    hamburgerMenu();
});

slider();
function slider(){
    const sliderImageContainer = document.querySelectorAll(".slider_image_container"),
    totalSlide = sliderImageContainer.length, 
    transform = -750;

    if(transformMultiple < (totalSlide - 1)){
        transformMultiple++;
    }
    else{
        transformMultiple = 0;
    }

    transformSize = transform * transformMultiple;

    for(var i = 0; i<totalSlide; i++){
        sliderImageContainer[i].style.transform = "translateX(" + transformSize + "px)";
    }
}

function hamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", function(){
        const mblMenu = document.getElementById("mbl-menu");
        if(mblMenu.classList.contains("active")){
            hamburger.innerHTML = "<i class='fa fa-bars'></i>";
            mblMenu.classList.remove("active");
        } else {
            hamburger.innerHTML = "<i class='fa fa-times'></i>";
            mblMenu.classList.add("active");
        }
    });
}

setInterval(slider , 2500);
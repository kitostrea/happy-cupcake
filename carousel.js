// original code for slideshow
// var slideIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1} 
//     x[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, 3000); // Change image every 3 seconds
//  }

"use strict";

// for homepage carousel
// all images in slideshow
const images = document.getElementsByClassName("my-slides");
// index of currently displaying slide
let slideIndex = 0;
// variable to track the timeout so we can start and stop it
let timeoutId = 0;
// buttons to control slideshow
const backBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

function playSlideshow(){
    // call to continue playing the slideshow
    timeoutId = setTimeout(playOrPauseSlideshow, 3000);
}

function playOrPauseSlideshow(){
    // determine whether we need to play or pause the slideshow using the button's ID
    let playOrPause = this.id || "";

    // hide all of the images in the slideshow by default
    for(let i = 0; i < images.length; i++){
        images[i].classList.add("hide");
    }

    if(playOrPause == "play" || playOrPause == ""){
        // call to play the slideshow
        timeoutId = setTimeout(playOrPauseSlideshow, 3000);

        // increment the slideIndex to the next index in order
        slideIndex++;
        // if that index is greater than the last index in the collection of slides, set it back to the start of the slideshow/index 0
        if(slideIndex > images.length - 1){
            slideIndex = 0;
        }

        // swap out the currently displayed center button to show ability to pause
        playBtn.classList.add("hide");
        pauseBtn.classList.remove("hide");
    }else{
        // cancel the timeout to pause the slideshow
        clearTimeout(timeoutId);

        // swap out the currently displayed center button to show ability to pause
        pauseBtn.classList.add("hide");
        playBtn.classList.remove("hide");
    }

    // display the slide at the current index in the slideshow
    images[slideIndex].classList.remove("hide");
    
}

function goToPrevious(){
    // hide all of the images in the slideshow by default
    for(let i = 0; i < images.length; i++){
        images[i].classList.add("hide");
    }

    // if we are at slide 0, go to the last slide in the slideshow and update the index
    if(slideIndex === 0){
        // update slide index
        slideIndex = images.length - 1;
        // show the image at that correct index
        images[slideIndex].classList.remove("hide");
    }else{
        // update slide index
        slideIndex--;
        // show the image at that correct index
        images[slideIndex].classList.remove("hide");
    }
}

function goToNext(){
    // hide all of the images in the slideshow by default
    for(let i = 0; i < images.length; i++){
        images[i].classList.add("hide");
    }

    // if we are at slide 0, go to the last slide in the slideshow and update the index
    if(slideIndex === images.length - 1){
        // update slide index
        slideIndex = 0;
        // show the image at that correct index
        images[slideIndex].classList.remove("hide");
    }else{
        // update slide index
        slideIndex++;
        // show the image at that correct index
        images[slideIndex].classList.remove("hide");
    }
}


// window onload function
window.onload = function(){
    // homepage carousel event listeners
    backBtn.addEventListener("click", goToPrevious);
    nextBtn.addEventListener("click", goToNext);
    playBtn.addEventListener("click", playOrPauseSlideshow);
    pauseBtn.addEventListener("click", playOrPauseSlideshow);

    // playSlideshow();
};
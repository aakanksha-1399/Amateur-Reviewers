const carouselSlide = document.querySelector('.image-slide');
const carouselImages = document.querySelectorAll('.image-slide img');

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size*counter )+'px)';

//button Listeners

nextBtn.addEventListener('click' ,() =>{
if(counter >= carouselImages.length -1) return;
carouselSlide.style.transition = "transform 0.4s ease-in-out"
counter++;
carouselSlide.style.transform = 'translateX(' + (-size*counter )+'px)';
});

prevBtn.addEventListener('click' ,() =>{
    if(counter<=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter )+'px)';
    });

carouselSlide.addEventListener('transitionend',()=>{
    
    if(carouselImages[counter].id==='lastClone')
    {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        arouselSlide.style.transform = 'translateX(' + (-size*counter )+'px)';
    }

    if(carouselImages[counter].id==='firstClone')
    {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        arouselSlide.style.transform = 'translateX(' + (-size*counter )+'px)';
    }
});
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slide = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = document.querySelector("[data-active]");
        let newIndex = [...slide.children].indexOf(activeSlide) + offset;
        
        if(newIndex < 0) newIndex = slide.children.length - 1;
        if(newIndex >= slide.children.length) newIndex = 0;

        slide.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})


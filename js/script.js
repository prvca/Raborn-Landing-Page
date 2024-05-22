function countdownFeature() {
    const saleDate = new Date("2024-06-10T15:00:00.000-06:00"); // sale date in central time
    const saleDateTime = saleDate.getTime();
    const saleDateTxt = document.querySelector(".countdown__date");

    /* Calculates time until sale and display it on the page */
    const countdown = setInterval(function() {
        const start = Date.now();
        const timeDistanceMs = (saleDateTime - start);
        const days = Math.floor(timeDistanceMs / (1000 * 60 * 60 * 24 ));
        var hours = Math.floor((timeDistanceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.querySelector(".countdown__days").textContent = days;
        document.querySelector(".countdown__hours").textContent = hours;
}, 2000);
}


function carouselFeature() {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const slide = document.querySelector(".slide");

    prevBtn.onclick = function() {carousel.scrollLeft -= slide.offsetWidth}; 
    nextBtn.onclick = function() {carousel.scrollLeft += slide.offsetWidth};
}

countdownFeature();
carouselFeature();

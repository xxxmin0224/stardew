let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.opacity = 1;
    setTimeout(showSlides, 3000); // 3초마다 슬라이드 변경
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

function showHoverImage(event, imageUrl) {
    const hoverImage = document.getElementById('hover-image');
    hoverImage.src = imageUrl;
    hoverImage.style.display = 'block';
    document.addEventListener('mousemove', moveHoverImage);
}

function moveHoverImage(event) {
    const hoverImage = document.getElementById('hover-image');
    hoverImage.style.left = event.pageX + 15 + 'px';
    hoverImage.style.top = event.pageY + 15 + 'px';
}

function hideHoverImage() {
    const hoverImage = document.getElementById('hover-image');
    hoverImage.style.display = 'none';
    document.removeEventListener('mousemove', moveHoverImage);
}

function showMap(mapSrc) {
    document.getElementById('farm-map').src = mapSrc;
    document.querySelector('.map-overlay').style.display = 'block';
    document.querySelector('.map-modal').style.display = 'block';
}

function closeMap() {
    document.querySelector('.map-overlay').style.display = 'none';
    document.querySelector('.map-modal').style.display = 'none';
}

export const sliderPopularPost = ( ) =>{
	const container = document.getElementById('popularPost')
    const slider = document.querySelector('.slider');
    const cardPost = document.getElementsByClassName('card-post').length;
    const btnSlider = document.getElementsByClassName('btn-carousel');

    let currentPosition = 0;
    let currentMargin = 0;
    let slidesPerPage = 0;
    let slidesCount = cardPost - slidesPerPage;
    let containerWidth = container.offsetWidth;

    window.addEventListener("resize", checkWidth);
    btnSlider[0].addEventListener('click', slideRight)
    btnSlider[1].addEventListener('click', slideLeft)

    function checkWidth() {
        containerWidth = container.offsetWidth;
        setParams(containerWidth);
    }

    function setParams(w) {
        if (w < 551) {
            slidesPerPage = 1;
        } else {
            if (w < 901) {
                slidesPerPage = 2;
            } else {
                slidesPerPage = 3;
            }
        }
        slidesCount = cardPost - slidesPerPage;
        if (currentPosition > slidesCount) {
            currentPosition -= slidesPerPage;
        }
        currentMargin = - currentPosition * (100 / slidesPerPage);
        slider.style.marginLeft = currentMargin + '%';
        if (currentPosition > 0) {
            btnSlider[0].classList.remove('inactive');
        }
        if (currentPosition < slidesCount) {
            btnSlider[1].classList.remove('inactive');
        }
        if (currentPosition >= slidesCount) {
            btnSlider[1].classList.add('inactive');
        }
    }

    setParams();

    function slideRight() {
        if (currentPosition != 0) {
            slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
            currentMargin += (100 / slidesPerPage);
            currentPosition--;
        }
        if (currentPosition === 0) {
            btnSlider[0].classList.add('inactive');
        }
        if (currentPosition < slidesCount) {
            btnSlider[1].classList.remove('inactive');
        }
    }

    function slideLeft() {
        if (currentPosition != slidesCount) {
            slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
            currentMargin -= (100 / slidesPerPage);
            currentPosition++;
        }
        if (currentPosition == slidesCount) {
            btnSlider[1].classList.add('inactive');
        }
        if (currentPosition > 0) {
            btnSlider[0].classList.remove('inactive');
        }
    }
}

// Begin placeholder Header Search
const placeholderHeaderSearch = document.querySelector('#header__search input');
const contentPlaceholder = [
    'Giao nhanh 2H & đúng khung giờ',
    '100% hàng tuyển chọn',
    'Bạn tìm gì hôm nay'
]
let indexContentPlaceholder = 0;
setInterval(()=>{
    placeholderHeaderSearch.setAttribute('placeholder', contentPlaceholder[indexContentPlaceholder])
    indexContentPlaceholder++;
    if(indexContentPlaceholder>contentPlaceholder.length - 1)  indexContentPlaceholder = 0;
},6000)

// End placeholder Header Search

// Begin slide show 
const slideShowPaginations = document.querySelectorAll('#slide-show-pagination div');
const slides = document.querySelectorAll('.slide-show__lines');
let indexSlideLiens = 0;
function nextSlide() {
    indexSlideLiens = (indexSlideLiens + 1) % slides.length;
    const offset = -indexSlideLiens * 100;
    for (const slide of slides) {
        slide.style.transform = `translateX(${offset}%)`;
    }

    for(const slideShowPagination of slideShowPaginations) {
        slideShowPagination.style.background = `rgba(0, 0, 0, 0.05)`;
        slideShowPagination.style.width = `16px`;
    }
    slideShowPaginations[indexSlideLiens].style.background = `rgb(10, 104, 255)`;
    slideShowPaginations[indexSlideLiens].style.width = '24px';
}

function prevSlide() {
    indexSlideLiens = (indexSlideLiens - 1 + slides.length) % slides.length;
    const offset = -indexSlideLiens * 100;
    for (const slide of slides) {
        slide.style.transform = `translateX(${offset}%)`;
    }
    for(const slideShowPagination of slideShowPaginations) {
        slideShowPagination.style.background = `rgba(0, 0, 0, 0.05)`;
        slideShowPagination.style.width = `16px`;
    }
    slideShowPaginations[indexSlideLiens].style.background = `rgb(10, 104, 255)`;
    slideShowPaginations[indexSlideLiens].style.width = '24px';
}
setInterval(nextSlide, 8000);
// End slide show

// Begin product line
const sliderProductState = {};
function nextProductLine(it) {
    if (!sliderProductState[it]) {
        sliderProductState[it] = 0;
    }
    sliderProductState[it] += 6;
    if(sliderProductState[it] > 0 ) {
        it.parentElement.querySelector('.btn-prev').style.display = 'block';
    }
    if(sliderProductState[it] == 12) it.style.display = 'none';
    it.nextElementSibling.style.transform = `translateX(-${sliderProductState[it]}0%)`
}
function prevProductLine(it) {
    if (!sliderProductState[it]) {
        sliderProductState[it] = 0;
    }
    sliderProductState[it] -= 6;
    if(sliderProductState[it] <  12) {
        it.parentElement.querySelector('.btn-next').style.display = 'block';
    }
    if(sliderProductState[it] == 0) it.style.display = 'none';
    it.previousElementSibling.style.transform = `translateX(-${sliderProductState[it]}%)`
}
// End product line


// Begin js modal
const modals = document.querySelectorAll('.modal')
const modalOpenBtns = document.querySelectorAll('.btn-open-modal')
const modalCloseBtns = document.querySelectorAll('.btn-close-modal')
const modalContainers = document.querySelectorAll('.js-modal-container')

function showModal(boxName) {
    document.querySelector(`#${boxName}`).classList.add('open');
}
function hideModal(boxName) {
    document.querySelector(`#${boxName}`).classList.remove('open');
}

modalOpenBtns.forEach((modalOpenBtn)=>{
    modalOpenBtn.addEventListener('click', ()=>{
        showModal(modalOpenBtn.getAttribute('data-view-id'));
    });
})
modalCloseBtns.forEach((modalCloseBtn)=>{
    modalCloseBtn.addEventListener('click', ()=>{
        hideModal(modalCloseBtn.getAttribute('data-view-id'));
    });
})

modalContainers.forEach((modalContainer) => {
    modalContainer.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}) 

modals.forEach((modal)=>{
    modal.onclick = ()=>{
        modal.classList.remove('open');
    }
})

// End js modal

// Begin login box
const btnLoginWithEmail = document.querySelector('#btn-login-with-email');
btnLoginWithEmail.onclick = function() {
    document.querySelector('#login-with-default').classList.add('close');
    document.querySelector('#login-with-email').classList.remove('close');
}

var btnLoginBack = function () {
    if(document.querySelector('#modal-location-box').classList.contains('open')) {
        hideModal('modal-location-box')
        showModal('modal-login-box');
    }
    document.querySelector('#login-with-default').classList.remove('close');
    document.querySelector('#login-with-email').classList.add('close');
}


const btnShowPassword = document.querySelector('#show-pass');
btnShowPassword.onclick = function () {
    var passwordInput = document.querySelector('.login-wrapp-input input[name="password"]');
    var btnShowPass = document.querySelector('.login-wrapp-input span');
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password"
    btnShowPass.innerText = (btnShowPass.innerHTML == "Hiện") ? "Ẩn" : "Hiện"
}
// End login box


// Begin location box
const locationPickers = document.querySelectorAll('.location-picker');
locationPickers.forEach((btn, index) => {
    btn.onclick = () => {
        locationPickers.forEach((btn, i) => {
            btn.querySelector('span.btn-radio').setAttribute('id', i === index ? 'icon-radio-button-on' : 'icon-radio-button-off');
            if(index==1) {
                document.querySelector('#location-picker-form').style.display = "flex";
            }else {
                document.querySelector('#location-picker-form').style.display = "none";
            }
        });
    };
});


// End location box
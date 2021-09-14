let slideIndex = 0;
let mobileImages = ['media/phonebk1.webp', 'media/phonebk2.webp', 'media/phonebk3.webp'];
let webImages = ['media/bk1.webp', 'media/bk2.webp', 'media/bk3.webp'];
let mobileMenu = document.getElementById('mobileMenu');
let slides = document.getElementsByClassName("mySlides");
let imageSrc = document.getElementsByClassName("imageSrc");
let zoomIn = document.querySelector('.zoomIn');

let burgerId = document.getElementById('burgerId');
let logo = document.querySelector('.logoContainer');
let scrolled = document.querySelector('.scrolled');
let headerContainer = document.querySelector('.headerContainer');
let mobileMenuItems = document.querySelector('.mobileMenuItems');
let masonryContent = document.getElementsByClassName('masonry-content');
let zoomInContainer = document.querySelector('.zoomInContainer');
let zoomImgId = document.getElementById('zoomImgId');
let backDiv = document.querySelector('.backDiv');
let loadingTxt = document.querySelector('#loadingTxt');

zoomInContainer.style.display = 'none';
zoomImgId.style.display = 'none';
loadingTxt.style.display = 'block';

document.getElementById("year").innerHTML = new Date().getFullYear();

showSlides();
zoomImage();

function showSlides() {
    for (let i = 0; i < mobileImages.length; i++) {
        slides[i].style.display = "none";
        if ($(window).width() <= 480) {
        imageSrc[i].src = mobileImages[i]; 
        zoomIn.style.animationDuration = '20s';
        }
        else {
        imageSrc[i].src = webImages[i];
        }
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
        }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000);
}


const burgerFunction = () => {
    if (mobileMenu.style.display === 'block') {
        closeMenu ();
    } else {
        openMenu ();
    }
}

const closeMenu = () => {
    burgerId.classList.remove('open');
    burgerId.classList.add('hamburgerOut');
    mobileMenu.classList.add('closeMenuAnim');
    setTimeout(function() {
        $(mobileMenu).removeClass('closeMenuAnim');
        mobileMenu.style.display = 'none';
        headerContainer.classList.add('scrolled');
        logo.style.display = 'block';
        document.body.classList.remove('lock-scroll');
        burgerId.classList.remove('hamburgerOut');
        burgerId.style.right = '5%';
    },500)
}

const openMenu = () => {
    mobileMenu.style.display = 'block';
    burgerId.classList.add('open');
    burgerId.classList.add('hamburgerIn');
    mobileMenu.classList.add('openMenuAnim')
    mobileMenuItems.classList.add('textAppearing');
    setTimeout(function() {
        $(mobileMenu).removeClass('openMenuAnim');
        $(burgerId).removeClass('hamburgerIn');
        burgerId.style.right = '85%';
    },500)
    logo.style.display = 'none';
    document.body.classList.toggle('lock-scroll');
    headerContainer.classList.remove('scrolled');
}

function zoomImage () {
    backDiv.addEventListener('click', function() {
        if (zoomInContainer.style.display === 'block') {
            zoomInContainer.classList.add('fadeOut');
            zoomImgId.classList.add('fadeOut');
            loadingTxt.style.display = 'block';
            setTimeout(function (){
                zoomInContainer.classList.remove('fadeOut');
                zoomImgId.classList.remove('fadeOut');
                zoomInContainer.style.display = 'none';
                zoomImgId.src = '';
            }, 500);
        }
    })
    for (let i = 0; i < masonryContent.length; i++) {
        masonryContent[i].addEventListener('click', function () {
            if (zoomInContainer.style.display === 'none') {
                    zoomInContainer.classList.add('fadeIn');
                    zoomInContainer.style.display = 'block';
                    zoomImgId.style.display = 'block';
                    zoomImgId.onload = function () {
                        console.log('loaded');
                        loadingTxt.style.display = 'none';
                        zoomImgId.classList.add('fadeIn');
                        
                    }
                    setTimeout(function () {    
                        console.log(masonryContent[i].src.replace(/^.*[\\\/]/, ''));
                        zoomImgId.src = 'media/Big/' + masonryContent[i].src.replace(/^.*[\\\/]/, '');
                        zoomInContainer.classList.remove('fadeIn');
                        zoomImgId.classList.remove('fadeIn');
                    }, 500);
            }
        });
    }
}

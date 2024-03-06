import _ from './utils/Util';
// import imagesLoaded from 'imagesloaded'
// import * as THREE from 'three';
import Scroll from './utils/Scroll';
// import frag from "./../../assets/shader/main.frag?raw";
// import vert from "./../../assets/shader/main.vert?raw";

class main {
  constructor() {
    this.pageSize = _.getPageSize();
    this.width = this.pageSize.ww;
    this.height = this.pageSize.wh;
    // this.width = window.innerWidth;
    // this.height = window.innerWidth;
    this.header = document.getElementById('header');
    this.toTop = document.getElementById('to-top');
    this.top = document.getElementById('top');
    this.logo = document.getElementById('logo');
    this.menu = document.getElementById('menu');
    this.overlay = document.getElementById('overlay');
    this.overlayLogo = document.getElementById('overlay-logo');
    this.overlayName = document.getElementById('overlay-name');
    this.overlayText = document.getElementById('overlay-text');
    this.overlayImgs = document.getElementById('overlay-imgs');
    this.overlayLimitedName = document.getElementById('overlay-limited-name');
    this.overlayLimitedText = document.getElementById('overlay-limited-text');
    this.overlayCat = document.getElementById('overlay-cat');
    this.overlayTel = document.getElementById('overlay-tel');
    this.footer = document.getElementById('footer');
    this.kv = document.getElementsByClassName('keyv');
    this.faqTitle = document.getElementsByClassName('faq-title')[0];
    this.faqWrapper = document.getElementsByClassName('faq-wrapper')[0];
    this.faqWrapperInner = document.getElementsByClassName('faq-wrapper__inner')[0];
    this.swiperContainer = document.getElementsByClassName('swiper-container');
    this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
    this.menuTrigger = document.getElementsByClassName('menu-trigger');
    this.overlayTrigger = document.getElementsByClassName('overlay-trigger');
    this.swipers = [];
    this.index = 0;
    this.scroller = document.body;
    this.scrollingElement =
      'scrollingElement' in document
        ? document.scrollingElement
        : window.navigator.userAgent.indexOf('WebKit') != -1
          ? body
          : document.documentElement || body.parentNode;

    gsap.registerPlugin(ScrollTrigger);
    Splitting();
    this.init();
    this.animationScroll();
    this.faqTitle.addEventListener('click', this.triggerQa.bind(this));
    for (let i = 0; i < this.menuTrigger.length; i++) {
      this.menuTrigger[i].addEventListener('click', this.triggerMenu.bind(this));
    }
    for (let i = 0; i < this.overlayTrigger.length; i++) {
      this.overlayTrigger[i].addEventListener('click', this.triggerOverlay.bind(this));
    }
    for (let i = 0; i < this.scrollTrigger.length; i++) {
      this.scrollTrigger[i].addEventListener('click', this.toScroll.bind(this));
    }
    window.onresize = () => {
      this.resizeEvent();
    }
    window.onscroll = () => {
      this.scrollAnimation();
    }
  }

  triggerMenu() {
    if (this.menu.classList.contains('active')) {
      this.menu.classList.remove('active');
      for (let i = 0; i < this.menuTrigger.length; i++) {
        this.menuTrigger[i].classList.remove('active');
      }
    } else {
      this.menu.classList.add('active');
      for (let i = 0; i < this.menuTrigger.length; i++) {
        this.menuTrigger[i].classList.add('active');
      }
    }
  }

  triggerOverlay(e) {
    if (this.overlay.classList.contains('active')) {
      this.overlay.classList.remove('active');
    } else {
      let elm = e.currentTarget;
      let imgNum = elm.getAttribute('data-imgnum');
      let index = elm.getAttribute('data-index');
      let imgs = '';

      for (let i = 0; i < imgNum; i++) {
        imgs += `<div class="swiper-slide">
          <picture>
            <source srcset="./assets/img/product/${index}_${i+1}.webp" width="1120" height="840" type="image/webp" />
            <img src="./assets/img/product/${index}_${i+1}.png" width="1120" height="840" alt="" />
          </picture>
        </div>`;
      }

      this.overlayLogo.setAttribute('src', `./assets/img/logo/${elm.getAttribute('data-index')}.png`);
      this.overlayName.innerHTML = elm.getAttribute('data-name');
      this.overlayText.innerHTML = elm.getAttribute('data-shopdesc');
      this.overlayImgs.innerHTML = imgs;
      this.overlayLimitedName.innerHTML = elm.getAttribute('data-product');
      this.overlayLimitedText.innerHTML = elm.getAttribute('data-productdesc');
      this.overlayCat.innerHTML = elm.getAttribute('data-cat');
      this.overlayTel.innerHTML = elm.getAttribute('data-tel');
      for (let i = 0; i < this.swipers.length; i++) {
        if (this.swipers[i].className === 'product-slider') {
          this.swipers[i].wrapper.slideTo(0,0);
        }
      }
      this.overlay.classList.remove('no-limited');
      if (elm.getAttribute('data-limited') === '') {
        this.overlay.classList.add('no-limited');
      }
      imagesLoaded(this.overlayLogo, () => {
        this.overlay.classList.add('active');
      });
    }
  }

  detectHeight() {
    if (this.faqTitle.classList.contains('open')) {
      this.faqWrapper.setAttribute('style', `height: ${this.faqWrapperInner.clientHeight}px`);
    }
  }

  animationScroll() {
    let addactive = document.getElementsByClassName('addactive');

    for (let i = 0; i < addactive.length; i++) {
      let elm = addactive[i];
      let start = `top center+=${window.innerHeight/2}`;
      if (elm.classList.contains('first')) {
        start = `top center+=${window.innerHeight/2}`;
      }
      gsap.to(elm, {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
          onEnter: () => {
            elm.classList.add('active');
            if (elm.classList.contains('show')) {
              setTimeout(() => {
                elm.classList.add('nowillchange');
              }, 3000)
            }
          }
        }
      });
    }
  }

  triggerQa(e) {
    let elm = e.currentTarget;
    if (elm.classList.contains('open')) {
      elm.classList.remove('open');
      this.faqWrapper.setAttribute('style', `height: 0`);
      this.faqWrapper.classList.remove('open');
    } else {
      elm.classList.add('open');
      this.faqWrapper.setAttribute('style', `height: ${this.faqWrapperInner.clientHeight}px`);
      this.faqWrapper.classList.add('open');
    }
  }
  
  toScroll(e) {
    const elm = e.currentTarget;
    const target = document.getElementById(elm.getAttribute('data-target'));
    let elemRect = target.getBoundingClientRect();
    let scrollY = window.scrollY || window.pageYOffset;
    let top = elemRect.top + scrollY;

    top -= this.header.clientHeight;
    this.menu.classList.remove('active');

    for (let i = 0; i < this.menuTrigger.length; i++) {
      this.menuTrigger[i].classList.remove('active');
    }

    Scroll.to(top, 2);
    if (elm.classList.contains('open')) {
      this.triggerQa(target.getElementsByClassName('q')[0]);
    }
  }

  initSwiper() {
    for (let i = 0; i < this.swiperContainer.length; i++) {
      let thisSwiper = this.swiperContainer[i];
      let space = 40;
      let slides = 1.5;
      let speed = 1000;
      let loop = true;
      let center = true;
      let pagination = {};
      let className = '';
      let autoplay = {
          delay: 5000,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false,
        };
      if (thisSwiper.classList.contains('product-slider')) {
        slides = 1;
        space = 0;
        className = 'product-slider';
        pagination = {
          el: ".swiper-pagination",
          clickable: true,
        };
      } else if (thisSwiper.classList.contains('marquee-slider')) {
        center = false;
        className = 'marquee-slider';
        speed = 8000;
        slides = 3.5;
        autoplay = {
          delay: 0,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false,
        };
        if (this.width < 750) {
          slides = 1.5;
          space = this.width * .04;
        } else {
        }
      } else {
        if (this.width < 750) {
          slides = 1;
          space = 0;
        }
      }
      let swiper = new Swiper(thisSwiper, {
        // Optional parameters
        // direction: 'vertical',
        className: className,
        centeredSlides: center,
        speed: speed,
        // initialSlide: initialSlide,
        loop: loop,
        autoplay: autoplay,
        slidesPerView: slides,
        spaceBetween: space,
        pagination: pagination,
        on: {
          init: () => {
            ScrollTrigger.refresh();
          },
        },
      });
      this.swipers.push({wrapper: swiper, className: className});
    }
  }

  init() {
    this.resizeEvent();
    window.scrollTo(0, 0);
    document.body.classList.add('loaded');
    setTimeout(() => {
      this.interval = setInterval(this.gifAnim.bind(this), 3000);
    }, 1000);
    this.initSwiper();
    // setTimeout(() => {
    //   this.logo.setAttribute('src', './assets/img/logo.gif');
    //   this.logo.classList.add('visible');
    // }, 500);
  }

  gifAnim() {
    if (this.index < this.kv.length-1) {
      this.index++;
    } else {
      this.index = 0;
    }
    for (let i = 0; i < this.kv.length; i++) {
      this.kv[i].classList.remove('active');
    }
    this.kv[this.index].classList.add('active');
  }

  resizeEvent() {
    let vh = window.innerHeight * 0.01;
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    this.detectHeight();
  }
  scrollAnimation() {
    this.scrollY = this.scrollingElement.scrollTop;

    if (this.scrollY > this.height) {
      this.toTop.classList.add('active');
    } else {
      this.toTop.classList.remove('active');
    }
  }

}

window.addEventListener("load", () => {
  new main();
});

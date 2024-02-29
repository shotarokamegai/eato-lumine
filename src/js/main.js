import _ from './utils/Util';
import * as THREE from 'three';
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
    this.footer = document.getElementById('footer');
    this.qa = document.getElementsByClassName('q');
    this.swiperContainer = document.getElementsByClassName('swiper-container');
    this.qaFaq = document.getElementsByClassName('qa-faq');
    this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
    this.menuTrigger = document.getElementsByClassName('menu-trigger');
    this.scroller = document.body;
    this.scrollingElement =
      'scrollingElement' in document
        ? document.scrollingElement
        : window.navigator.userAgent.indexOf('WebKit') != -1
          ? body
          : document.documentElement || body.parentNode;

    gsap.registerPlugin(ScrollTrigger);
    this.init();
    this.animationScroll();
    for (let i = 0; i < this.menuTrigger.length; i++) {
      this.menuTrigger[i].addEventListener('click', this.triggerMenu.bind(this));
    }
    for (let i = 0; i < this.qa.length; i++) {
      this.qa[i].addEventListener('click', this.triggerQa.bind(this));
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

  detectHeight() {
    for (let i = 0; i < this.qaFaq.length; i++) {
      let faq = this.qaFaq[i];
      let a = faq.getElementsByClassName('a')[0];
      let aInner = faq.getElementsByClassName('a__inner')[0];
      if (faq.classList.contains('active')) {
        a.setAttribute('style', `height: ${aInner.clientHeight}px`);
      }
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
    let elm;
    if (e instanceof HTMLElement) {
      elm = e;
    } else {
      elm = e.currentTarget;
    }
    let parent = elm.parentNode;
    let a = parent.getElementsByClassName('a')[0];
    let aInner = a.getElementsByClassName('a__inner')[0];

    if (parent.classList.contains('active')) {
      parent.classList.remove('active');
      a.setAttribute('style', `height: 0`);
    } else {
      parent.classList.add('active');
      a.setAttribute('style', `height: ${aInner.clientHeight}px`);
    }
  }
  
  toScroll(e) {
    const elm = e.currentTarget;
    const target = document.getElementById(elm.getAttribute('data-target'));
    let elemRect = target.getBoundingClientRect();
    let scrollY = window.scrollY || window.pageYOffset;
    let top = elemRect.top + scrollY;

    top -= this.header.clientHeight;

    Scroll.to(top, 2);
    if (elm.classList.contains('open')) {
      this.triggerQa(target.getElementsByClassName('q')[0]);
    }
  }

  initSwiper() {
    for (let i = 0; i < this.swiperContainer.length; i++) {
      let thisSwiper = this.swiperContainer[i];
      let space = 20;
      let slides = 2.5;
      let speed = 700;
      let loop = true;
      let  initialSlide = 0;
      let autoplay = {
          delay: 3000,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false,
        };
      if (thisSwiper.classList.contains('marquee-slider')) {
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
      }
      new Swiper(thisSwiper, {
        // Optional parameters
        // direction: 'vertical',
        speed: speed,
        // initialSlide: initialSlide,
        loop: loop,
        autoplay: autoplay,
        slidesPerView: slides,
        spaceBetween: space,
        on: {
          init: () => {
            ScrollTrigger.refresh();
          },
        },
      });
    }
  }

  init() {
    this.resizeEvent();
    window.scrollTo(0, 0);
    document.body.classList.add('loaded');
    this.initSwiper();
    setTimeout(() => {
      this.logo.setAttribute('src', './assets/img/logo.gif');
      this.logo.classList.add('visible');
    }, 500);
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

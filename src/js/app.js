import { settings, select, classNames } from './settings.js';
import Product from './Product.js';
import Home from './Home.js';

export const app = {

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
  
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');
    //console.log('idFromHash', idFromHash);

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    //console.log('pageMatchingHash',pageMatchingHash);
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initData: function () {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.products;

    thisApp.data = {};

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();
        thisApp.initHome();
      });
  },

  initHome: function(){
    const thisApp = this;

    console.log('thisApp.data: ', thisApp.data);

    for(let productData in thisApp.data.products){
      new Home(productData, thisApp.data.products[productData]);
    }
  },

  initMenu: function(){
    const thisApp = this;
    
    console.log('thisApp.data: ', thisApp.data);

    for(let productData in thisApp.data.products){
      new Product(productData, thisApp.data.products[productData]);
    }
  },

  initHamburger: function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-ul');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }));
  },

  banerHeader: function () {
    let baner = ['Home of Original Tastes', 'Real Venezuela, Real Coffee', 'Taste Real Venezuela'];
    let randomHeader = Math.floor(Math.random() * baner.length);
    document.getElementById('randomHeader').innerHTML = baner[randomHeader];
    //document.getElementById('randomHeader').style.textAlign = 'center';
  },

  carousel () {
        
    const elem = document.querySelector('.main-carousel');
    window.addEventListener( 'load', function() {
      // eslint-disable-next-line no-undef
      new Flickity( elem, {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 5000,
        pageDots: false,
        pauseAutoPlayOnHover: false
      });
    });
  },

  init: function () {
    const thisApp = this;
    
    thisApp.initData();
    thisApp.initPages();
    
    thisApp.initMenu();
    //thisApp.initHome();
    thisApp.initHamburger();
    thisApp.banerHeader();
    thisApp.carousel ();
  
  },
};
app.init();
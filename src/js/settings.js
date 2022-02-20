export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    contactWidget: '#template-contact-widget',
    productWidget: '#template-products-widget',
  },
  containerOf: {
    pages: '#pages',
    //home: '.home-wrapper',
    contact: '.contact-wrapper',
    products: '.products-wrapper',  
  },
  nav: {
    links: '.main-nav a',
  },
  home: {
    productsListHome: '.products-list-home'
  },
  products: {
    productsList: '.products-list'
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};
  
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  }
};
  
export const templates = {
  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
  productWidget: Handlebars.compile(document.querySelector(select.templateOf.productWidget).innerHTML),
};
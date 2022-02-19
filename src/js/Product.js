import { templates, select } from './settings.js';
import { utils } from './utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
  }

  renderInMenu() {
    const thisProduct = this;

    const generatedHTML = templates.menuProduct(thisProduct.data);

    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    const menuContainerHome = document.querySelector(select.containerOf.home);

    menuContainerHome.append(thisProduct.element);

  }
}

export default Product;
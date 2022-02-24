import { templates, select } from './settings.js';
import { utils} from './utils.js';

class Home {
  constructor(id, data) {
    
    const thisHome = this;

    thisHome.id = id;
    thisHome.data = data;

    thisHome.render();
  
  }

  render () {
    const thisHome = this;
    const generatedHTML = templates.homeWidget(thisHome.data);
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    console.log(generatedHTML);
    const menuContainer = document.querySelector(select.home.productsListHome);
    console.log(menuContainer);
    menuContainer.append(thisHome.element);
  }
}

export default Home;
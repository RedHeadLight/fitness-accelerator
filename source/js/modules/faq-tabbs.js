import {Tabs} from '../vendor/tabs';
let tabs;

const initFaqTabbs = () => {
  tabs = new Tabs();
  window.tabs = tabs;
};

export {initFaqTabbs, tabs};

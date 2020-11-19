"use strict";

import { Banner } from './components/banner.js';
import { NavBar } from './components/navbar.js';
// import { Footer } from './components/footer.js';

import { Food } from './pages/food.js';
import { Error } from './pages/error.js';
import { Info } from './pages/info.js';

const routes = {
    '/': Info,
    '/appetizer': Food,
    '/meals': Food,
    '/deserts': Food,
};

const banner = null || document.getElementById('banner_container');
const navbar = null || document.getElementById('navbar_container');
const content = null || document.getElementById('content_container');
const footer = null || document.getElementById('footer_container');

var activePage = null;

const router = async () => {

    banner.innerHTML = await Banner.render();
    navbar.innerHTML = await NavBar.render();

    let url = location.hash.slice(1).toLowerCase() || '/';
    // console.log(url);
    
    activePage = routes[url] ? routes[url] : Error;
    await activePage.init();
    content.innerHTML = await activePage.render();
    await activePage.after_render();
}

export const update = async () => {
    content.innerHTML = await activePage.render();
    await activePage.after_render();
}


window.addEventListener('hashchange', router);
window.addEventListener('load', router);
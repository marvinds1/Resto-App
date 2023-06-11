import './views/component/main';
import '../styles/main.css';
import '../styles/resto.css';
import App from './views/app';
import swRegister from './utils/swRegister';
import WebSocketInitiator from './utils/webSocket';
import CONFIG from './globals/config';

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#maincontent');
const tombolMenu = document.getElementsByClassName('tombol-menu');
const menu = document.getElementsByClassName('navbar-menu');

menu[0].addEventListener('click', () => {
  menu[0].classList.toggle('active');
});

tombolMenu[0].addEventListener('click', () => {
  menu[0].classList.toggle('active');
});

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

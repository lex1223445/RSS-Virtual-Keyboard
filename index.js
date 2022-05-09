import './styles/style.scss';
import createKeys from './utils/createKeys.js';



const setLocalStorage = () => {
  localStorage.setItem('lang', language);
}
const getLocalStorage = () => {
  if (localStorage.getItem('lang')) {
    language = localStorage.getItem('lang');
  }
}

window.addEventListener('beforeunload', setLocalStorage);
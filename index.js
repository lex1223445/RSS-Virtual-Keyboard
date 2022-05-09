import './styles/style.scss';
import createKeys from './utils/createKeys.js';

let language = "ru";
let capsLock = false;
let shift = false;


const setLocalStorage = () => {
  localStorage.setItem('lang', language);
}
const getLocalStorage = () => {
  if (localStorage.getItem('lang')) {
    language = localStorage.getItem('lang');
  }
}

window.addEventListener('beforeunload', setLocalStorage);

const changeLanguage = () => {
    if (language == "ru") {
      language = "en"
    } else {
      language = "ru"
    }
  }
  
  const changeCapsLock = () => {
    if (capsLock == false) {
      capsLock = true
    } else {
      capsLock = false
    }
  }
  
  const changeShift = () => {
    if (shift == false) {
      shift = true
    } else {
      shift = false
    }
  }
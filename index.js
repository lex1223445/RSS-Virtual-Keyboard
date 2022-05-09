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

  const pressHandler = (event) => {
    event.preventDefault();
    const key = document.querySelector(`.${event.code}`)
    event.code == "CapsLock" ? null : key.classList.add("active")
    const textArea = document.querySelector('#textarea');
    const keyboardWrapper = document.querySelector(".keyboard-wrapper")
    
    switch (event.code) {
  
      case "MetaLeft":
        event.preventDefault()
        break
      case "Tab":
        event.preventDefault()
        textArea.value += "    "
        break
      case "Enter":
        textArea.value += "\n"
        break
      case "Backspace":
        textArea.value = textArea.value.substring(0, textArea.value.length - 1)
        break
      case "Delete":
        textArea.value = textArea.value.slice(0, textArea.selectionStart) + textArea.value.slice(textArea.selectionEnd + 1)
        break
      case "CapsLock":
        if (event.repeat) {
          break
        }
        changeCapsLock()
        keyboardWrapper.replaceWith(renderKeyboard(language, capsLock))
        break
      case "ShiftLeft":
        if (event.repeat) {
          break
        }
        changeShift()
        keyboardWrapper.replaceWith(renderKeyboard(language, capsLock, shift))
        break
      case "ShiftRight":
        if (event.repeat) {
          break
        }
        changeShift()
        keyboardWrapper.replaceWith(renderKeyboard(language, capsLock, shift))
        break
      case "ControlLeft":
        break
      case "ControlRight":
        break
      case "AltLeft":
        event.preventDefault()
        if (event.shiftKey) {
          changeLanguage()
          keyboardWrapper.replaceWith(renderKeyboard(language, capsLock))
        }
        break
      case "AltRight":
        event.preventDefault()
        if (event.shiftKey) {
          changeLanguage()
          keyboardWrapper.replaceWith(renderKeyboard(language, capsLock))
        }
        break
      default:
        const textContent = event.shiftKey ? key.textContent.toUpperCase() : key.textContent
        textArea.value += textContent;
        break
    }
  
  };
  
  const suppressHandler = (event) => {
    const key = document.querySelector(`.${event.code}`)
    event.code == "CapsLock" ? null : key.classList.remove("active")
    const keyboardWrapper = document.querySelector(".keyboard-wrapper")
  
    switch (event.code) {
      case "ShiftLeft":
        changeShift()
        keyboardWrapper.replaceWith(renderKeyboard(language, capsLock))
        break
      case "ShiftRight":
        changeShift()
        keyboardWrapper.replaceWith(renderKeyboard(language, capsLock))
        break
    }
  }
  
  const clickHandler = (event) => {
    const textArea = document.querySelector('#textarea');
    const textContent = event.target.textContent;
    const keyboardWrapper = document.querySelector(".keyboard-wrapper")
    event.target.textContent == "CapsLock" ? event.target.classList.add("active") : null
  
    switch (event.target.textContent) {
  
      case "MetaLeft":
        event.preventDefault()
        break
      case "Tab":
        event.preventDefault()
        textArea.value += "    "
        break
      case "Enter":
        textArea.value += "\n"
        break
      case "Backspace":
        textArea.value = textArea.value.substring(0, textArea.value.length - 1)
        break
      case "Delete":
        textArea.value = textArea.value.slice(0, textArea.selectionStart) + textArea.value.slice(textArea.selectionEnd + 1)
        break
      case "CapsLock":
        if (event.repeat) {
          break
        }
        changeCapsLock()
        keyboardWrapper.replaceWith(renderKeyboard(language, capsLock))
        break
      case "Shift":
        break
      case "Ctrl":
        break
      case "Alt":
        break
      default:
        textArea.value += textContent;
        break
    }
  
  };
  
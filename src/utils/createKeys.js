import keys from './keysMap.js';

const createKeys = (lang = "ru", caps = false, shift = false) => {
  const keyboard = []

  Object.keys(keys).forEach(key => {
    const keyItem = document.createElement('div');
    if (key == "CapsLock") {
      caps ? keyItem.classList.add('key', `${key}`, "active") : keyItem.classList.add('key', `${key}`)
    } else if (key == "ShiftLeft" || key == "ShiftRight") {
      shift ? keyItem.classList.add('key', `${key}`, "active") : keyItem.classList.add('key', `${key}`)
    } else {
      keyItem.classList.add('key', `${key}`)
    }

    if(caps && shift){
      keyItem.innerText = keys[key][lang].caseDown
    }else if((!caps && shift)){
      keyItem.innerText = keys[key][lang].caseUp
    }else if((caps && !shift)){
      keyItem.innerText = keys[key][lang].caseUp
    }else{
      keyItem.innerText = keys[key][lang].caseDown
    }
    keyboard.push(keyItem)
  });

  return keyboard;
};

export default createKeys;

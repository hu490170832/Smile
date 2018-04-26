export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function clearSiblingsClass(domList, className) {
  if(!domList.length) {
    return
  }
  for(var i=0;i<domList.length;i++) {
    let newClass = domList[i].className.split(' ')
    if(newClass.indexOf(className)!=-1) {
      let index = newClass.indexOf(className)
      newClass.splice(index,1)
    }
    domList[i].className = newClass.join(' ')
  } 
}

//样式单选
export function SingleSelection(el,domList,className) {
  clearSiblingsClass(domList,className)
  addClass(el,className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

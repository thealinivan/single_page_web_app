
//get DOM element
const getClass = className => {
  return document.querySelector(className)
}
const getId = id => {
  return document.querySelector(`.${id}`)
}

//create new DOM element defining className
const createEl = (tagName, className) => {
  let el = document.createElement(`${tagName}`)
  el.className = className
  return el
}

//change text color
const navColor = el => {
  getClass(".element1").style.color = "rgb(0,0,0,0.3)"
  getClass(".element2").style.color = "rgb(0,0,0,0.3)"
  getClass(".element3").style.color = "rgb(0,0,0,0.3)"
  el.style.color = "rgb(0,0,0,0.7)"
}

const midContent = el => {
  const nm = getClass(".newMid")
  const tsm = getClass(".tripsMid")
  const tm = getClass(".tripMid")
  nm.style.opacity = "0"
  tsm.style.opacity = "0"
  tm.style.opacity = "0"

  nm.style.transform = "translateX(-50px)"
  tsm.style.transform = "translateX(-50px)"
  tm.style.transform = "translateX(-50px)"

  el.style.opacity = "1"
  el.style.transform = "translateX(0px)"
}

const inputOpacity = el => {
  //destination origin persons name telephone
  getClass(".destination").style.opacity = "0.1"
  getClass(".origin").style.opacity = "0.1"
  getClass(".persons").style.opacity = "0.1"
  getClass(".name").style.opacity = "0.1"
  getClass(".telephone").style.opacity = "0.1"
  el.style.opacity = "1"
}

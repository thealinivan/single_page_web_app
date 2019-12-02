//root access
const root = document.querySelector(".root")

//header
const navEl1 = () => {
  const wrapper = createEl("div","navEl1")
  const el = createEl("h2", "element1")
  el.innerText = "New"
  el.style.fontFamily = "'Montserrat', sans-serif"
  el.style.transition = "all .3s ease-in-out"
  wrapper.append(el)
  return wrapper
}
const navEl2 = () => {
  const wrapper = createEl("div","navEl2")
  const el = createEl("h2", "element2")
  el.innerText = "Trips"
  el.style.fontFamily = "'Montserrat', sans-serif"
  el.style.transition = "all .3s ease-in-out"
  el.style.color = "rgb(0,0,0,0.3)"
  wrapper.append(el)
  return wrapper
}

const navEl3 = () => {
  const wrapper = createEl("div","navEl3")
  const el = createEl("h2", "element3")
  el.innerText = "Trip"
  el.style.fontFamily = "'Montserrat', sans-serif"
  el.style.transition = "all .3s ease-in-out"
  el.style.color = "rgb(0,0,0,0.3)"
  wrapper.append(el)
  return wrapper
}

const header = () => {
  const wrapper = createEl("div","head")
  wrapper.append(navEl1())
  wrapper.append(navEl2())
  wrapper.append(navEl3())
  wrapper.style.position = "sticky"
  wrapper.style.height = "30px"
  wrapper.style.textAlign = "center"
  wrapper.style.boxShadow = "1px 1px 8px rgba(68, 68, 68, 0.94)"
  wrapper.style.padding = "15px 0"
  wrapper.style.color = "rgb(0,0,0,0.5)"
  wrapper.style.display = "flex"
  return wrapper
}

//footer
const forwBtn = () => {
  const wrapper = createEl("div","forwBtn")
  const el = createEl("div", "forwardButton")
  el.style.height = "25px"
  el.style.width = "25px"
  el.style.transform = "rotate(-45deg)"
  el.style.borderBottom = "15px solid rgb(0,0,0,0.3)"
  el.style.borderRight = "15px solid rgb(0,0,0,0.2)"
  el.style.borderRadius = "15px"
  wrapper.append(el)
  return wrapper
}

const backBtn = () => {
  const wrapper = createEl("div","backBtn")
  const el = createEl("div", "backButton")
  el.style.height = "25px"
  el.style.width = "25px"
  el.style.transform =  "rotate(135deg)"
  el.style.borderBottom =  "15px solid rgb(0,0,0,0.2)"
  el.style.borderRight = "15px solid rgb(0,0,0,0.3)"
  el.style.borderRadius = "15px"
  wrapper.append(el)
  return wrapper
}

const newTripBtn = () => {
  const wrapper = createEl("div", "plusButton")
  wrapper.style.padding = "0 30px"
  const x = createEl("div", "x-axys")
  const y = createEl("div", "y-axys")
  x.style.height = "45px"
  x.style.width = "12px"
  x.style.borderRadius = "10px"
  x.style.backgroundColor = "rgb(200,200,200)"
  y.style.transform = "translateY(-45px)"
  y.style.transform += "rotate(90deg)"
  y.style.height = "45px"
  y.style.width = "12px"
  y.style.borderRadius = "10px"
  y.style.backgroundColor = "rgb(200,200,200)"
  wrapper.append(x)
  wrapper.append(y)
  return wrapper
}

const footer = () => {
  const wrapper = createEl("div","foot")
  wrapper.style.display = "flex"
  wrapper.style.justifyContent = "space-between"
  wrapper.style.marginTop = "-100px"
  wrapper.style.padding = "10px 0"
  wrapper.style.opacity = "0.8"
  wrapper.append(backBtn())
  wrapper.append(newTripBtn())
  wrapper.append(forwBtn())
  return wrapper

}

//main
const newMid = () => {
  const wrapper = createEl("div", "newMid")
  wrapper.style.position = "absolute"
  wrapper.style.width = "80vw"
  wrapper.style.transition = "all .3s ease-in-out"
  wrapper.style.textAlign = "center"
  wrapper.style.padding = "10vw"
  wrapper.style.fontFamily = "'Montserrat', sans-serif"
  const heading = midElementHeading("Plan your new trip")
  const dest = singleInput("destination", "Where to ?", "destBtn")
  const org = singleInput("origin", "Pickup location..", "orgBtn")
  const pers = singleInput("persons", "No of passengers..", "persBtn")
  const name = singleInput("name", "Name..", "nameBtn")
  const phone = singleInput("telephone", "Phone..", "phoneBtn")
  const go = sqBtn("submitBtn", "Create trip")
  wrapper.append(heading)
  wrapper.append(dest)
  wrapper.append(org)
  wrapper.append(pers)
  wrapper.append(name)
  wrapper.append(phone)
  wrapper.append(go)
  return wrapper
}
const tripsMid = () => {
  const wrapper = createEl("div", "tripsMid")
  const heading = midElementHeading("My trips")
  const list = noTrips()


  wrapper.style.position = "absolute"
  wrapper.style.width = "80vw"
  wrapper.style.transition = "all .3s ease-in-out"
  wrapper.style.textAlign = "center"
  wrapper.style.padding = "10vw"
  wrapper.style.fontFamily = "'Montserrat', sans-serif"

  wrapper.append(heading)
  wrapper.append(list)
  return wrapper
}
const tripMid = () => {
  const wrapper = createEl("div", "tripMid")
  wrapper.style.position = "absolute"
  wrapper.style.width = "80vw"
  wrapper.opacity = "0"
  wrapper.style.transition = "all .3s ease-in-out"
  wrapper.style.textAlign = "center"
  wrapper.style.padding = "10vw"
  wrapper.style.fontFamily = "'Montserrat', sans-serif"
    const heading = midElementHeading("Trip to ?")
    const tripWr = createEl("div", "tripContainer")
      const tripData = createEl("div", "tripData")
      const tripControl = createEl("div", "tripControl")
        const offers = createEl("button", "tripOffers")
        const editTrip = createEl("button", "editTrip")
        const deleteTrip = createEl("button", "deleteTrip")

  tripWr.append(noTrips())
  wrapper.append(tripWr)
  wrapper.append(heading)
  wrapper.append(tripWr)
  return wrapper
}
const mid = () => {
  const wrapper = createEl("div", "cont")
  const cont = createEl("div", "container")
  wrapper.style.width = "100%"
  wrapper.style.height = "100vh"
  wrapper.style.marginTop = "-60px"
  cont.style.padding = "50px 0"
  cont.append(tripMid())
  cont.append(tripsMid())
  cont.append(newMid())
  wrapper.append(cont)
  return wrapper
}

//mid element heading
const midElementHeading = text => {
  const wrapper = createEl("div","midHeading")
  const el = createEl("h2", "midHead")
  el.innerText = text
  el.style.padding = "10px 0px 45px 0"
  el.style.fontFamily = "'Montserrat', sans-serif"
  // el.style.transition = "all .3s ease-in-out"
  el.style.color = "rgb(0,0,0,0.8)"
  wrapper.append(el)
  return wrapper
}

//input
const singleInput = (inputClass, placeholder, btnClass) => {
  // const org = createEl("input", "org")
  const wrapper = createEl("div", inputClass)
  wrapper.style.display = "flex"
  wrapper.style.marginBottom = "10px"
  wrapper.style.transition = "all .3s ease-in"
  const inp = createEl("input", "wrapper")
  inp.style.border = "none"
  inp.style.borderBottom = "1px solid gray"
  inp.style.width = "80vw"
  inp.style.fontFamily = "'Montserrat', sans-serif"
  inp.style.fontSize = "1.2em"
  inp.placeholder = placeholder
  inp.style.padding = "15px"
  inp.style.marginBottom = "5px"
  inp.style.float = "left"
  const btnWrap = createEl("div", "btnContainer")
  btnWrap.style.padding = "12px"
  btnWrap.style.width = "40px"
  btnWrap.style.float = "right"
  const btn = createEl("button", btnClass)
  btn.style.border = "none"
  btn.style.height = "25px"
  btn.style.width = "25px"
  btn.style.transform = "rotate(-45deg)"
  btn.style.borderBottom = "8px solid rgb(0,0,0,0.3)"
  btn.style.borderRight = "8px solid rgb(0,0,0,0.2)"
  btn.style.borderRadius = "9px"
  wrapper.append(inp)
  btnWrap.append(btn)
  wrapper.append(btnWrap)
  return wrapper
}

const noTrips = () => {
  const wrapper = createEl("div", "noTrips")
  wrapper.style.height = "350px"
  wrapper.style.textAlign = "center"
  wrapper.append(midElementHeading("You have no trips yet"))
  wrapper.append(sqBtn("submitBtn goToNewTrip", "Create New Trip"))
  wrapper.style.opacity = "0.5"
  return wrapper
}

const sqBtn = (className, text) => {
  const wrapper = createEl("div", className)
  wrapper.innerText = text
  wrapper.style.width = "200px"
  wrapper.style.border = "1px solid rgb(0,0,0,0.2)"
  wrapper.style.borderRadius = "10px"
  wrapper.style.color = "rgb(0,0,0,0.6)"
  wrapper.style.marginTop = "50px"
  wrapper.style.padding = "15px 30px"
  wrapper.style.textAlign = "center"
  return wrapper
}

const pendingOffer = () => {
  //wrapper
  //btn accept
  //btn reject
}

const tripElement = () => {
  //wrapper
  //Origin
  //Destination
  //Date and time
}

const tripsList = () => {
  const wrapper = createEl("div", "tripsList")
  //trip elements
  return wrapper
}

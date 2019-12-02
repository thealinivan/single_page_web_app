




//Event Listeners
document.addEventListener('DOMContentLoaded', () => {


  //Default layout
  root.append(header())
  root.append(mid())
  root.append(footer())
  navColor(getClass(".element1"))
  inputOpacity(getClass(".destination"))


  //DOM elements
  const el1 = getClass(".element1")
  const el2 = getClass(".element2")
  const el3 = getClass(".element3")

  const mainNew = getClass(".newMid")
  const mainTrips = getClass(".tripsMid")
  const mainTrip = getClass(".tripMid")

  const leftArrow = getClass(".backButton")
  const rightArrow = getClass(".forwardButton")
  const plusBtn = getClass(".plusButton")

  const inpDest = getClass(".destination")
  const inpOrg = getClass(".origin")
  const inpPers = getClass(".persons")
  const inpName = getClass(".name")
  const inpPhone = getClass(".telephone")

  const destBtn = getClass(".destBtn")
  const orgBtn = getClass(".orgBtn")
  const persBtn = getClass(".persBtn")
  const nameBtn = getClass(".nameBtn")
  const phoneBtn = getClass(".phoneBtn")
  const submitBtn = getClass(".submitBtn")


  //Navigation layout
  midContent(mainNew)
  let layoutIndex = 0
  const newLayout = () => {
    navColor(el1)
    midContent(mainNew)
    layoutIndex = 0
  }
  const tripsLayout = () => {
    navColor(el2)
    midContent(mainTrips)
    layoutIndex = 1
  }
  const tripLayout = () => {
    navColor(el3)
    midContent(mainTrip)
    layoutIndex = 2
  }

  const user = () => {

  }
  const trip = () => {

  }

  const sendTrip  = () => {

  }






  //Event Listeners | Navigation
  el1.addEventListener('click', newLayout)
  el2.addEventListener('click', tripsLayout)
  el3.addEventListener('click', tripLayout)

  leftArrow.addEventListener('click', () => {
    if(layoutIndex === 1) {
      newLayout()
      layoutIndex = 0
    } else if (layoutIndex === 2) {
      tripsLayout()
      layoutIndex = 1
    }
  })
  rightArrow.addEventListener('click', () => {

    if(layoutIndex === 0) {
      tripsLayout()
      layoutIndex = 1
    } else if (layoutIndex === 1) {
      tripLayout()
      layoutIndex = 2
    }
  })
  plusBtn.addEventListener('click', () => {
    document.activeElement.blur()
    navColor(el1)
    newLayout()
    layoutIndex = 0
  })


  //Event Listeners | Inputs for new trip
  inpDest.addEventListener('click', () => {
    // ui feedback
  })
  inpOrg.addEventListener('click', () => {
    // ui feedback
  })
  inpPers.addEventListener('click', () => {
    // ui feedback
  })
  inpName.addEventListener('click', () => {
    // ui feedback
  })
  inpPhone.addEventListener('click', () => {
    // ui feedback
  })

  //Event Listeners | Buttons for new trip Inputs
  destBtn.addEventListener('click', () => {
    inputOpacity(inpOrg)
  })
  orgBtn.addEventListener('click', () => {
    inputOpacity(inpPers)
  })
  persBtn.addEventListener('click', () => {
    inputOpacity(inpName)
  })
  nameBtn.addEventListener('click', () => {
    inputOpacity(inpPhone)
  })
  phoneBtn.addEventListener('click', () => {
    //get data object
    //fetch api post
    //render trips
  })

  //Event Listeneres | Buttons | Create/create new trip
  submitBtn.addEventListener('click', () => {
    //create user object
    //create trip object
    //fetch post request (user)
    //fetch post request (trip)
    //navigate to trips
  })



})

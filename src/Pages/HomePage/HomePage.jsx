// import React from 'react'

import Banner from "./Components/Banner/Banner"
import FAQ from "./Components/FAQ/FAQ"
import Introduction from "./Components/Introduction/Introduction"
import Location from "./Components/Location/Location"

const HomePage = () => {
  const animateOnce = true;

  return (
    <div>
      <Banner animateOnce={animateOnce} />
      <Introduction animateOnce={animateOnce} />
      <FAQ animateOnce={animateOnce} />
      <Location animateOnce={animateOnce} />
    </div>
  )
}

export default HomePage

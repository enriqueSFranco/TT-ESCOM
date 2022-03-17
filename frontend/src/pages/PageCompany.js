import React from "react"

import Objects from "../components/AboutMe/Objects";
import Interests from "../components/AboutMe/Interests";
import Skills from "../components/AboutMe/Skills";
import Languajes from "../components/AboutMe/Languajes";

const PageCompany = () => {
  return (
    <div className="row align-items-stretch my-5">
      <div><Objects></Objects></div>
      <div><Interests></Interests>
      <Skills></Skills></div>
      <div><Languajes></Languajes></div>
    </div>
    
  )
}

export default PageCompany;
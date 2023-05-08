import React from 'react'
import ContentLoader from "react-content-loader"

function PizzaBlockLoader(props) {
  
  return (
  <ContentLoader 
    speed={2}
    width={280}
    height={400}
    viewBox="0 0 280 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="390" cy="453" r="45" /> 
    <rect x="0" y="242" rx="0" ry="0" width="280" height="29" /> 
    <rect x="23" y="289" rx="0" ry="0" width="1" height="9" /> 
    <circle cx="132" cy="115" r="115" /> 
    <circle cx="87" cy="196" r="5" /> 
    <rect x="0" y="286" rx="0" ry="0" width="280" height="47" /> 
    <rect x="1" y="350" rx="0" ry="0" width="76" height="31" /> 
    <rect x="67" y="395" rx="0" ry="0" width="0" height="3" /> 
    <rect x="157" y="349" rx="13" ry="13" width="120" height="31" />
  </ContentLoader>
)

}

export default PizzaBlockLoader

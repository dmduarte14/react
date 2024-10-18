import React from 'react'
import Proptypes from 'prop-types'



function Footer({
  image,
  height,
  width,
  colorF,
  text,
  colorFont
}) {
  return (
    <footer>

      <div className="footer-container" 
      style={{backgroundColor: colorF, color: colorFont}}>
        <img src={image} alt="footer" style={{backgroundColor:colorF, height: height, width: width}}/>
        <p>{text}</p>
      </div>

  </footer>
  )
}

export default Footer

Footer.propTypes =  {
  image: Proptypes.string.isRequired,
  height: Proptypes.string,
  width: Proptypes.string,
  colorF: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
  colorFont: Proptypes.string.isRequired,
}




import React from 'react'
import defaultImage from '../../public/img/card_ge.jpg';
import Proptypes from 'prop-types'

function Card({
   cardImage = defaultImage,
   imageAlt,
   title,
   description,
   buttonTitle,
   action,
   buttonColor}

) {
  return (

    <div className="card">
    <img src={cardImage } className="card-img-top" alt={imageAlt} />
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {/* <a href={link} className="btn btn-primary"style={{backgrounColor: buttonColor}}>{buttonTile}</a> */}
        <button onClick={action} 
                className="btn btn-primary"
                style={{backgroundColor: buttonColor}}>
                {buttonTitle}
        </button>

    </div>
</div>

  )
}
Card.propTypes = {
    cardImage : Proptypes.string.isRequired,
    imageAlt: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    buttonTitle: Proptypes.string.isRequired,
    action: Proptypes.func.isRequired,
    buttonColor: Proptypes.string.isRequired,
  };
  

export default Card

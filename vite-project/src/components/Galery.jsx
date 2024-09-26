import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../public/img/car1.jpg';

function Galery({
    image = defaultImage, 
    imageAlt, 
   
}) {
  return (

     
    
          <img className="image-galery" 
               src={image} 
               alt={imageAlt} 
          />
        
     
  
  );
}

Galery.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Galery;

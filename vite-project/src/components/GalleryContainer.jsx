import React from 'react';
import Galery from './galery';
import PropTypes from 'prop-types';

function GalleryContainer({ galleries }) {
  return (
    <section id="Galeria">  
    
             <h2>Galería</h2>
          <div className='image-container'>
         
      {galleries.map((gallery, index) => (
        <Galery
          key={index}
          image={gallery.image}
          imageAlt={gallery.imageAlt}
          title={gallery.title}
        />
      ))}
         </div>   
         
    </section>
  );
}

GalleryContainer.propTypes = {
  galleries: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GalleryContainer;

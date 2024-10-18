import propTypes from 'prop-types'

function CarouselItem({
    imageCarousel,
    imageAlt,
    active
}) {
  return (
    
    <div className={`carousel-item ${active ? "active" : ""}` }
      
    >	
       <img src={imageCarousel} className="d-block w-100" alt={imageAlt}/>
     </div>
    
);
}
CarouselItem.propTypes = {
imageCarousel: propTypes.string.isRequired,
imageAlt: propTypes.string.isRequired,
active: propTypes.bool.isRequired,
};

export default CarouselItem;

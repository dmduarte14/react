import Proptypes from 'prop-types'

function Hero({imageHero}) {
  return (
<hero className="hero">

    <img src={imageHero} alt="flecha" className="img-banner"/>

</hero>

  );
}

Hero.propTypes = {
  imageHero: Proptypes.string.isRequired,
  
};

export default Hero;

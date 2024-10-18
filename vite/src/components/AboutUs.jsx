import Proptypes from 'prop-types'

function AboutUs({text}) {
  return (


  
  <section id="Nosotros"> 
  
    <hr className="linea"/>
    <div className="style-font">

        <h2>Nosotros</h2>
            <p>{text}</p>
    </div>
</section>

  );
}
AboutUs.propTypes = {
    text : Proptypes.string.isRequired,
};

export default AboutUs;

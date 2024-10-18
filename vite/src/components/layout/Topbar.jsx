import Proptypes from 'prop-types'

function Topbar({ urlInstagram, urlFacebook, colorFont, colorBackground }) {
  return (
    <section id="topbar">
      <div className="flex-container"style={{  backgroundColor: colorBackground }}>
        <div className="contacto">
          <a href="https://wa.me/1135202715?text=Hola este es un mensaje generado desde el sitio" target="_blank">
            <i className="fa-brands fa-whatsapp" style={{ color: colorFont, backgroundColor: colorBackground }}></i>
          </a>
          <i className="fa-solid fa-phone" style={{ color: colorFont, backgroundColor: colorBackground, paddingLeft: '5px' }}></i>
          <i className="fa-regular fa-envelope" style={{ color: colorFont, backgroundColor: colorBackground, paddingLeft: '5px' }}></i>
          <a style={{ color: colorFont, backgroundColor: colorBackground }}>4789-1200</a>
          <span style={{ padding: '1px',  color: colorFont , backgroundColor: colorBackground, paddingLeft: '5px' }}> / </span>
          <a style={{ color: colorFont, backgroundColor: colorBackground }}>4789-1300</a>
          
        </div>
        <div className="container-sm" style={{  backgroundColor: colorBackground }}>
          <a href={urlInstagram} target="_blank">
            <i className="fa-brands fa-instagram" style={{ color: colorFont, backgroundColor: colorBackground }}></i>
          </a>
          <a href={urlFacebook} target="_blank">
            <i className="fa-brands fa-facebook" style={{ color: colorFont, backgroundColor: colorBackground }}></i>
          </a>
        </div>
      </div>
    </section>
  );
}

Topbar.propTypes = {
  urlInstagram: Proptypes.string.isRequired,
  urlFacebook: Proptypes.string.isRequired,
  colorFont: Proptypes.string.isRequired,
  colorBackground: Proptypes.string.isRequired,
};

export default Topbar;

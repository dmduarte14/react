
import Proptypes from 'prop-types'


function Header({image, imageAlt, imageURL, imageWA}) {
  return (


<header className="header">
        
        <div className="logo" href={imageURL}>
               <img src={image} 
                alt={imageAlt}
              
                className="img-logo"/> 
        </div>

               <nav className="nav-var">
                   <ul>
                       <li><a href="#">Inicio</a></li>  
                       <li><a href="#Nosotros">Nosotros</a></li>
                       <li><a href="#Servicios">Servicios</a></li>
                       <li><a href="#Autogestion">Autogestión</a></li>
                       <li><a href="#Galeria">Galeria</a></li>
                       <li><a href="#Contacto">Contacto</a></li>
                   </ul>
               </nav>
         
               <a href="https://wa.me/1135202715?text=Hola este es un mensaje generado desde el sitio" target="_blank">
               <img className="logo-ws" 
               src={imageWA} 
               alt="flecha" /></a>

               
</header>

  );
}
Header.proptypes={
 image: Proptypes.string.isRequired, 
 imageAlt: Proptypes.string.isRequired,
 ImageUrl: Proptypes.string.isRequired,
 imageWA: Proptypes.string.isRequired,
   
};

export default Header

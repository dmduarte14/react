
import './App.css'
import Header from './components/layout/header'
import "../public/css/index.css";
import logo from "../public/img/LogoServicioTecnico.png";
import wa from "../public/img/whatsapp.jpg";
import Topbar from './components/layout/Topbar';
import Hero from './components/layout/Hero';
import ImageHero2 from '../public/img/banner.png';
import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import CardContainer from './components/CardContainer';
import GalleryContainer from './components/GalleryContainer';
import Footer from './components/layout/Footer';
import logoFooter from '../public/img/toolbox2.png';
import ContactForm from './components/ContactForm';
import Form from './components/Form';


const slides = [
{
  image: "../../public/img/tec_aire.jpg",
  alt: "aire"
},
{
  image: "../../public/img/tec_heladera.jpg",
  alt: "heladera"
},
{
  image: "../../public/img/tec_herramientas.jpg",
  alt: "herramientas"
},
{
  image: "../../public/img/tec_horno.jpg",
  alt: "horno"
},
{
  image: "../../public/img/tec_lavarropas.jpg",
  alt: "lavarropas"
},

];

const cards = [

  {
    cardImage: "../../public/img/card_aa.jpg",
    imageAlt: "Climatización",
    title: "Climatización",
    description: "Para programar instalaciones, gestionar reclamos o asistencias relacionadas a cualquier equipo de climatizacion.",
    buttonTitle: "Continuar",
    buttonColor: "green"},
  
    {cardImage: "../../public/img/card_ge.jpg",
    imageAlt: "Garantia extendida",
    title: "Garantia Extendida",
    description: "Seleccione comenzar para iniciar cualquier tramite, reclamo o consulta sobre cualquier producto en garantia extendida.",
    buttonTitle: "Leer más",
    buttonColor: "gold"
  },
  {cardImage: "../../public/img/card_heladera.jpg",
    imageAlt: "Heladeras",
    title: "Heladeras",
    description: "Por cualquier consulta relacionada a reparaciones de heladeras, recambios o asistencia técnica por favor continue aqui",
    buttonTitle: "Leer más",
    buttonColor: "black"
  },
  {cardImage: "../../public/img/card_lavarropas.jpg",
    imageAlt: "Lavarropas",
    title: "Lavarropas",
    description: "Por cualquier consulta relacionada a reparaciones, recambios o asistencia técnica de lavarropas por favor continue aqui",
    buttonTitle: "Leer más",
    buttonColor: "black"
  },
  ];

  const galleries = [
  {
      image: "../../public/img/car1.jpg",
      imageAlt: "Lavarropas",
      title: "Lavarropas"
    },  
    {
      image: "../../public/img/car2.jpg",
      imageAlt: "Lavarropas",
      title: "Lavarropas"
    },
    {
      image: "../../public/img/car3.jpg",
      imageAlt: "Lavarropas",
      title: "Lavarropas"
    },
    {
      image: "../../public/img/car4.jpg",
      imageAlt: "Heladeras",
      title: "Heladeras"
    },
    
    {
      image: "../../public/img/car5.jpg",
      imageAlt: "Heladeras",
      title: "Heladeras"
    },
    {
      image: "../../public/img/car6.jpg",
      imageAlt: "Heladeras",
      title: "Heladeras"
    }
  ,    {
    image: "../../public/img/car7.jpg",
    imageAlt: "Lavarropas",
    title: "Lavarropas"
  },
  {
    image: "../../public/img/car8.jpg",
    imageAlt: "Lavarropas",
    title: "Lavarropas"
  },
  {
    image: "../../public/img/car9.jpg",
    imageAlt: "Lavarropas",
    title: "Lavarropas"
  },
  {
    image: "../../public/img/car10.jpg",
    imageAlt: "Heladeras",
    title: "Heladeras"
  },
  
  {
    image: "../../public/img/car11.jpg",
    imageAlt: "Heladeras",
    title: "Heladeras"
  },
  {
    image: "../../public/img/car12.jpg",
    imageAlt: "Heladeras",
    title: "Heladeras"
  },
  {
    image: "../../public/img/car13.jpg",
    imageAlt: "Lavarropas",
    title: "Lavarropas"
  },
  {
    image: "../../public/img/car14.jpg",
    imageAlt: "Heladeras",
    title: "Heladeras"
  },
  
  {
    image: "../../public/img/car15.jpg",
    imageAlt: "Heladeras",
    title: "Heladeras"
  }
  ];



function App() {


  return (
    <>
    <Topbar urlInstagram="https://www.instagram.com/danielmduarte14/" 
            urlFacebook="https://www.facebook.com/daniel.duarte.1447/" 
            colorFont="white"
            colorBackground='black'
    />

      <Header image={logo} 
              imageAlt="Logo Servicio Tecnico" 
              imageURL={logo} 
              imageWA={wa}
      />

      <Hero imageHero={ImageHero2} />
 
      <AboutUs text="Somos una nueva empresa dedicada a ofrecer servicios técnicos de alta calidad, destacándonos por nuestra seriedad, responsabilidad y confiabilidad. Nos enorgullece proporcionar soluciones profesionales y personalizadas, comprometidos con la satisfacción de nuestros clientes.              También nos centramos en el crecimiento personal y profesional de nuestro equipo, proporcionándoles las herramientas necesarias para mantenerse actualizados y ofrecer un servicio excepcional.  Te invitamos a seguirnos en Instagram para estar al tanto de nuestras últimas novedades y promociones."/>
    
    <h2>Servicios</h2>
    
    <Carousel slides={slides}/>
    
    <br />
    
    <h2>Autogestion</h2>
    <CardContainer cards={cards}/>


    <GalleryContainer galleries={galleries} />
   
 

<br />
<h2>Contacto</h2>
<Form />

<br />

<Footer image={logoFooter} 
           height='80px' 
           width='80px' 
           colorF='grey' 
           text='Trabajo práctico React UTN - Alumno Daniel Duarte'
           colorFont='white'/>
    </>
  );
}

export default App

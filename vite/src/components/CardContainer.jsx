import React from 'react';
import CardImage from '../../public/img/card_ge.jpg';
import Proptypes from 'prop-types'
import Card from './card';

function CardContainer({ cards }) {
  
  const handleCard = () => {
    console.log("click");
  };

  return (
    

    <section id="Autogestion"> 
    <hr className="linea"/>
    <br /><br /><br />
            <div className="card-container">
              

            {cards.map((card, index) => (

              <Card 
                key={index}
                cardImage={card.cardImage}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
                buttonTitle={card.buttonTitle}
                buttonColor={card.buttonColor}
                action={handleCard}
              />

            ))       
          
          }

   
</div>
              </section>


        
      

  )
}



export default CardContainer

CardContainer.propTypes = {
  cards: Proptypes.arrayOf(
    Proptypes.shape({
      CardImage: Proptypes.string,
      imageAlt: Proptypes.string.isRequired,
      title: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired,
      buttonTitle: Proptypes.string.isRequired,
      action: Proptypes.func.isRequired,
      buttonColor: Proptypes.string,
    })
  ).isRequired,
};

    


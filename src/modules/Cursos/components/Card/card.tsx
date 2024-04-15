import Carousel from '../Carousel/carousel';
import './card.css';

function Card({ id, imagem }) {
    return(

        <section className="card">
            <a href={`https://www.youtube.com/watch?v=${id}`} 
            rel='noreferrer noopener' 
            target='_blank'>
            <img src={imagem}
            alt="capa" />
            </a>
   
        </section>

    );

}

export default Card;
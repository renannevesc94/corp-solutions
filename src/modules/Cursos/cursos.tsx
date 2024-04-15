import Banner from './components/Banner/banner';
import Container from './components/Container/container';
import Card from './components/Card/card';
import videos from './json/db.json'
import Category from './components/Category/category';
import Carousel from './components/Carousel/carousel';

const categories = [
    'Videos 1',
    'Videos 2',
    'Videos 3',
    'Videos 4'
]

function filterCategory(id) {
    return videos.filter(video => video.category === categories[id])
}
export const Cursos = () => {
    return(
        <>
        <Banner />
        <Container>

            <Category category={categories[0]}>
                <Carousel>
                 { filterCategory(0).map(video => <Card id={video.id} key={video.id} imagem={video.imagem}/>)}
                </Carousel>
            </Category>
            <Category category={categories[1]}>
                <Carousel>
                 { filterCategory(1).map(video => <Card id={video.id} key={video.id} imagem={video.imagem}/>)}
                </Carousel>
            </Category>
            <Category category={categories[2]}>
                <Carousel>
                 { filterCategory(2).map(video => <Card id={video.id} key={video.id} imagem={video.imagem}/>)}
                </Carousel>
            </Category>
            <Category category={categories[0]}>
                <Carousel>
                 { filterCategory(0).map(video => <Card id={video.id} key={video.id} imagem={video.imagem}/>)}
                </Carousel>
            </Category>

        </Container>
        </>
    )
}




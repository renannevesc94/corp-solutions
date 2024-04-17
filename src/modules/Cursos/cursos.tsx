import Banner from "./components/Banner/banner";
import Container from "./components/Container/container";
import Card from "./components/Card/card";
import videos from "./json/db.json";
import Category from "./components/Category/category";

const categories = [
  "Combatendo o preconceito dentro da empresa",
  "Trilha inclusão",
  "Trilha diversidade",
];

function filterCategory(id) {
  return videos.filter(video => {
    return video.category === categories[id];
  });
}
export const Cursos = () => {
  return (
    <>
      <Banner />

      <Container>
        {categories.map((categoria, indx) => (
          <Category key={indx} category={categoria}>
            
              {filterCategory(0).map(video => (
                <Card id={video.id} key={video.id} imagem={video.imagem} title={video.title} />
              ))}
              {filterCategory(1).map(video => (
              <Card id={video.id} key={video.id} imagem={video.imagem} />
            ))}
          </Category>
        ))}
      </Container>
    </>
  );
};

{
  /* <Category category={categories[1]}>
          <Carousel>
            {filterCategory(1).map(video => (
              <Card id={video.id} key={video.id} imagem={video.imagem} />
            ))}
          </Carousel>
        </Category>
        <Category category={categories[2]}>
          <Carousel>
            {filterCategory(2).map(video => (
              <Card id={video.id} key={video.id} imagem={video.imagem} />
            ))}
          </Carousel>
        </Category>
        <Category category={categories[0]}>
          <Carousel>
            {filterCategory(0).map(video => (
              <Card id={video.id} key={video.id} imagem={video.imagem} />
            ))}
          </Carousel>
        </Category> */
}

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header";
import Banner from "./components/Banner/banner";
import Card from "./components/Card/card";
import Container from "./components/Container/container";
import "./styles.module.css";

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
      <Header />
      <Banner />

      <Container>
        {categories.map((categoria, indx) => (
          <Category key={indx} category={categoria}>
            
              {filterCategory(indx).map(video => (
                <Card id={video.id} key={video.id} imagem={video.imagem} title={video.title} />
              ))}
          </Category>
        ))}
      </Container>
      <Footer/>
    </>
  );
};

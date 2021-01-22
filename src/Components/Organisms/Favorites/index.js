import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "../../Molecules/Project-Card";
const Favorites = ({ setAuth }) => {
  const { profile } = useSelector((state) => state);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setAuth(2);
  }, [setAuth]);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return (
    <>
      {load ? (
        <h3>Carregando...</h3>
      ) : profile.favorites.length > 0 ? (
        profile.favorites.map((e) => (
          <ProjectCard
            titulo={e.title}
            tipo={e.type}
            descricao={e.description}
            stack={e.qualifications}
            projectFavorite={e}
            userId={e.userId}
            linguagem={e.qualifications}
            nivel={e.nivel}
            time={`Tempo estimado: ${e.time}`}
            isFavorite
          />
        ))
      ) : (
        <h3>Você está sem projetos favoritos aqui...</h3>
      )}
    </>
  );
};
export default Favorites;

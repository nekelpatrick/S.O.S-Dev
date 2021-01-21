import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "../../Molecules/Project-Card";

const Favorites = ({ setAuth }) => {
  const { profile } = useSelector((state) => state);

  useEffect(() => {
    setAuth(2);
  }, [setAuth]);

  return (
    <>
      {profile.favorites.length > 0 &&
        profile.favorites.map((e, i) => (
          <ProjectCard
            key={i}
            titulo={e.title}
            tipo={e.type}
            descricao={e.description}
            stack={e.qualifications}
            projectFavorite={e}
            userId={e.userId}
            isFavorite
          />
        ))}
    </>
  );
};

export default Favorites;

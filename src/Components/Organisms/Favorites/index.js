import ProjectCard from "../../Molecules/Project-Card";

import { useSelector } from "react-redux";

const Favorites = () => {
    const { profile } = useSelector((state) => state)

    return (
        <>
        {
        profile.favorites.length > 0 
            && 
            profile.favorites.map((e) => (
                <ProjectCard 
                titulo={e.title} 
                tipo={e.type} 
                descricao={e.description} 
                stack={e.qualifications} 
                projectFavorite={e} 
                isFavorite/>
            ))
        }
        </>
    )
};

export default Favorites;
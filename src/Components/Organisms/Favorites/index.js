import ProjectCard from "../../Molecules/Project-Card";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [haveFavorites, setHaveFavorites] = useState(false);
    const { profile } = useSelector((state) => state)

    // useEffect(() => {
    //     if ( favorites.length < 1 ) {
    //         setFavorites(profile.favorites)
    //     }
    //     if ( favorites.length > 0 ) {
    //         setHaveFavorites(true)
    //     };
    // },[])

    console.log(profile.favorites)

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
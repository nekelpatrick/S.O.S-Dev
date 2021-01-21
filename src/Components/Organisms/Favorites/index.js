import ProjectCard from "../../Molecules/Project-Card";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [haveFavorites, setHaveFavorites] = useState(false);
    const { profile } = useSelector((state) => state)

    useEffect(() => {
        setFavorites([profile])
        if ( favorites.length > 0 ) {
            setHaveFavorites(true)
        };
    }, []);

    console.log(favorites)

    // utilizar em ProjectCard
    // titulo={title} tipo={type} descricao={description} stack={qualifications}
    return (
        <>
        {
        haveFavorites 
            && 
            // favorites.map(({title, type, description, qualifications}) => (
                <ProjectCard />
            // ))
        }
        </>
    )
};

export default Favorites;
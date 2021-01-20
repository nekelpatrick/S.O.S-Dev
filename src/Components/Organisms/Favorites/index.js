import ProjectCard from "../../Molecules/Project-Card";
import { useState, useEffect } from "react";
import { api } from "../../../axios-globalConfig/axios-global";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        api.get("/users").then((res) => setFavorites(res.data))
    }, [favorites])

    console.log(favorites);

    return (
        <ProjectCard />
    )
};

export default Favorites;
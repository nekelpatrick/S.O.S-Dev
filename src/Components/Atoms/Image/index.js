import defaultImage from "./no-image.png";

const Image = ({src, alt, width, height}) => {

    return (
        <img 
        src={src || defaultImage} 
        alt={alt || "nothing here"} 
        width={width || "180px"} height={height || "180px"}
        />
    )
}

export default Image;
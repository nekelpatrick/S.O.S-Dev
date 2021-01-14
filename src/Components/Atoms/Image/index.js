import defaultImage from "./no-image.png";
import { StyledImage } from "./style";

const Image = ({ src, alt, width, height, borderRadius, margin }) => {
  return (
    <StyledImage
      src={src || defaultImage}
      alt={alt || "nothing here"}
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin = {margin}
    />
  );
};

export default Image;

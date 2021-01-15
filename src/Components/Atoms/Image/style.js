import styled from "styled-components";

export const StyledImage = styled.img`
  width: ${(props) => props.width || "180px"};
  height: ${(props) => props.height || "180px"};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props => props.margin)};
  border: none;
`;

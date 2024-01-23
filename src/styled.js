import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4em;
  margin-bottom: 0.1em;
  color: tomato;
`;
export const NavMenuUl = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 0;
  justify-content: space-between;
`;
export const BlogImg = styled.img`
  width: 100%;
`;
export const BlogTitle = styled.h2`
  font-size: 2em;
`;
export const ExpandBlog = styled.p`
    float: right;
    color: tomato;
`;
//style for drop cap https://css-tricks.com/snippets/css/drop-caps/
export const BlogText = styled.p`
  &::first-letter {
    font-size: 6em;
    float: left;
    line-height: 0.65;
    margin: 0.1em 0.1em 0.2em 0;
    color: lightgray;
  }
`;
export const CopyRight = styled.p`
  color: lightgray;
`;

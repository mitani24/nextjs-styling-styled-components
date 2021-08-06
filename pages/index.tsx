import styled from "styled-components";

const Hello = styled.div`
  font: 15px Helvetica, Arial, sans-serif;
  background: #eee;
  padding: 100px;
  text-align: center;
  transition: 100ms ease-in background;
  &:hover {
    background: #ccc;
  }
`;

export default function Home() {
  return (
    <Hello>
      <p>Hello World</p>
    </Hello>
  );
}

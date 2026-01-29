import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const Title = styled.h1`
  font-size: 1.5rem;
  color: blue;
  text-align: center;
  font-weight: 600;
  background-color: #f0f0f0;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 1.25rem;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Title>Hello, World!</Title>
        <Button onClick={() => console.log("Button clicked!")}>Check in</Button>
        <Button onClick={() => console.log("Button clicked!")}>
          Check out
        </Button>
        <Input placeholder="guest number" type="number" />
        <Input placeholder="guest number" type="number" />
      </StyledApp>
    </>
  );
}

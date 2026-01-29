import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 1.25rem;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => console.log("Button clicked!")}>Check in</Button>
        <Button onClick={() => console.log("Button clicked!")}>
          Check out
        </Button>
        <Heading as="h3">Form</Heading>
        <Input placeholder="guest number" type="number" />
        <Input placeholder="guest number" type="number" />
      </StyledApp>
    </>
  );
}

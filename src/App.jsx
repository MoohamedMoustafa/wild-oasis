import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 1.25rem;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => console.log("Button clicked!")}
              >
                Check in
              </Button>
              <Button
                variation="secondary"
                size="medium"
                onClick={() => console.log("Button clicked!")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input placeholder="guest number" type="number" />
              <Input placeholder="guest number" type="number" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

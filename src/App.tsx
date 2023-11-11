import Input from "./components/Input";
import Button from "./components/button";
import Container from "./components/container";

function App() {
  return (
    <main>
      <Input id="1" label="Input field" type="text" disabled={true} />
      <Input id="2" label="Another input field" type="text" disabled={true} />
      <p>
        <Button> Button </Button>
      </p>
      <p>
        <Button href="https://google.com">Link</Button>
      </p>
      <Container as={"button"}>Click me </Container>
    </main>
  );
}

export default App;

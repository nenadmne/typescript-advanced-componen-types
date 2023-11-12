import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Form from "./components/Form";

function App() {
  const saveHandler = (data: unknown) => {
    const extractedData = data as {
      name: string;
      surname: string;
    };
    console.log(extractedData);
  };
  return (
    <main>
      <Form onSave={saveHandler}>
        <Input id="name" label="Enter name" type="text" />
        <Input id="surname" label="Enter surname" type="text" />
        <p>
          <Button> Save </Button>
        </p>
      </Form>

      <p>
        <Button href="https://google.com">Link</Button>
      </p>
      <Container as={"button"}>Click me </Container>
    </main>
  );
}

export default App;

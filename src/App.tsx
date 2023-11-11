import Input from "./components/Input";
import Button from "./components/button";

function App() {
  return (
    <>
      <h1>Let's get started!</h1>
      <Input id="1" label="Input field" type="text" disabled={true} />
      <Input id="2" label="Another input field" type="text" disabled={true} />
      <p>
        <Button> Button </Button>
      </p>
      <p>
        <Button href="https://google.com">Link</Button>
      </p>
    </>
  );
}

export default App;

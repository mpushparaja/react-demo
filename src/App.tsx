import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Germany", "Paris"];

  const handlerEvent = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    // <ListGroup
    //   items={items}
    //   heading="Cities"
    //   onSelectedItem={handlerEvent}
    // ></ListGroup>
    // <Alert children="Hello Push" />
    <div>
      {alertVisible && (
        <Alert
          children="Hello Push"
          onClose={() => setAlertVisibility(false)}
        />
      )}
      <Button
        color="danger"
        children="My button"
        onclicked={() => setAlertVisibility(true)}
      />
    </div>
  );
}

export default App;

import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Germany", "Paris"];

  const handlerEvent = (item: string) => {
    console.log(item);
  };
  return (
    <ListGroup
      items={items}
      heading="Cities"
      onSelectedItem={handlerEvent}
    ></ListGroup>
  );
}

export default App;

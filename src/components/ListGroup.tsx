import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

//props sharing data between the components
function ListGroup({ items, heading, onSelectedItem }: Props) {
  // items = [];

  //handling events
  //   const handleEvents = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import { ReactNode, useState } from "react";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const message = items.length === 0 && <p>No items found</p>;

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {message}

      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          {items.map((item, index) => (
            <a
              id={"list-" + { item }}
              data-bs-toggle="list"
              href={"#list-" + { item }.item}
              role="tab"
              aria-controls="list-home"
              className={
                selectedIndex === index
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
export default ListGroup;

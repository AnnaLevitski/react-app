import Card from "./components/Card";
import Button from "./components/Button";
import CheckBoxes from "./components/CheckBoxes";
import Input from "./components/Input";
import ListGroup from "./components/ListGroup";
import { SetStateAction, useState } from "react";

const items = ["Neque", "Porro quisquam", "Est qui ", "Dolorem"];

const handleSelectItem = (items: string) => {
  console.log(items);
};

function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [value, setValue] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [isCheckbox, setIsCheckbox] = useState(true);
  const handleChange = () => {
    setIsDisabled((current) => !current);
  };

  const handleClick = () => {
    setValue(tempValue);
    if (!isShown) setIsShown((current) => !current);
  };
  const handleClose = () => {
    setIsShown((current) => !current);
  };

  const handleNewValue = (val: string) => {
    console.log("Main " + val);
    if (tempValue == "") setIsCheckbox(false);
    setTempValue(val);
  };

  return (
    <div>
      <ListGroup
        heading="Lorem Ipsum"
        items={items}
        onSelectItem={handleSelectItem}
      />
      <div className="input-group mb-3">
        <CheckBoxes isCheckbox={isCheckbox} onChange={handleChange} />
        <Input onChange={handleNewValue}></Input>
      </div>
      <Button isDisabled={isDisabled} onClick={handleClick}>
        Send
      </Button>
      <div>
        {isShown && (
          <Card closeClick={handleClose}>
            <strong>Holy guacamole! </strong> {value}
          </Card>
        )}
      </div>
    </div>
  );
}
export default App;

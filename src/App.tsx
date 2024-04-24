import Card from "./components/Card";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import ListGroup from "./components/ListGroup";
import { SetStateAction, useState } from "react";

const items = ["Home", "Profile", "Messages", "Settings"];

function App() {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isShownCard, setIsShownCard] = useState(false);
  const [value, setValue] = useState("");
  const [mainHeading, setMainHeading] = useState("Home");
  const [tempValue, setTempValue] = useState("");
  const [isDisabledCheckbox, setIsDisabledCheckbox] = useState(true);
  const handleChange = () => {
    setIsDisabledButton((current) => !current);
  };
  const handleSelectItem = (item: string) => {
    setMainHeading(item);
  };

  const handleClick = () => {
    setValue(tempValue);
    if (!isShownCard) setIsShownCard(true);
  };
  const handleClose = () => {
    setIsShownCard(false);
  };

  const handleNewValue = (val: string) => {
    console.log("Main " + val);
    if (!tempValue) setIsDisabledCheckbox(false);
    setTempValue(val);
  };

  return (
    <div>
      <ListGroup
        heading={mainHeading}
        items={items}
        onSelectItem={handleSelectItem}
      />
      <div className="input-group mb-3">
        <CheckBox disabled={isDisabledCheckbox} onChange={handleChange} />
        <Input onChange={handleNewValue} value={tempValue}></Input>
      </div>
      <Button isDisabled={isDisabledButton} onClick={handleClick}>
        Send
      </Button>
      <div>
        {isShownCard && (
          <Card closeClick={handleClose}>
            <strong>Holy guacamole! </strong> {value}
          </Card>
        )}
      </div>
    </div>
  );
}
export default App;

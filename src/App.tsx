import { Suspense, lazy, useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import ListGroup from "./components/ListGroup";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import Placeholder from "./components/Placeholder";
import React from "react";

const Messages = lazy(() => import("./components/Messages"));

const items = ["Home", "Profile", "Messages", "Settings"];

function App() {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isShownCard, setIsShownCard] = useState(false);
  const [isShownMessages, setIsShownMessages] = useState(false);
  const [value, setValue] = useState("");
  const [mainHeading, setMainHeading] = useState("Home");
  const [tempValue, setTempValue] = useState("");
  const [isDisabledCheckbox, setIsDisabledCheckbox] = useState(true);
  const handleChange = () => {
    setIsDisabledButton((current) => !current);
  };
  const handleSelectItem = async (item: string) => {
    setMainHeading(item);
    if (item != "Messages") {
      setIsShownMessages(false);
    } else {
      setIsShownMessages(true);
    }
  };

  const handleClick = () => {
    setValue(tempValue);
    if (!isShownCard) setIsShownCard(true);
  };
  const handleClose = () => {
    setIsShownCard(false);
  };

  const handleNewValue = (val: string) => {
    if (!tempValue) setIsDisabledCheckbox(false);
    setTempValue(val);
  };

  return (
    <>
      <Layout isRow={true}>
        <ListGroup
          heading={mainHeading}
          items={items}
          onSelectItem={handleSelectItem}
        />
        <Layout isRow={false}>
          <Placeholder heading={mainHeading} isShown={!isShownMessages} />
          <Suspense fallback={<Spinner />}>
            {isShownMessages && <Messages />}
          </Suspense>
        </Layout>
      </Layout>
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
    </>
  );
}
export default App;
function updateState(arg0: {}): any {
  throw new Error("Function not implemented.");
}

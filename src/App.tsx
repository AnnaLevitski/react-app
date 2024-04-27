import { Suspense, lazy, useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import ListGroup from "./components/ListGroup";
import Spinner from "./components/Spinner";

const Alert = lazy(() => import("./components/Alert"));

const items = ["Home", "Profile", "Messages", "Settings"];

let data: {
  email: string;
  body: string;
}[] = [];

function App() {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isShownCard, setIsShownCard] = useState(false);

  const [value, setValue] = useState("");
  const [mainHeading, setMainHeading] = useState("Home");
  const [messages, setMessages] = useState(
    <p>
      Some placeholder content in a paragraph relating to "{mainHeading}
      ".
    </p>
  );
  const [tempValue, setTempValue] = useState("");
  const [isDisabledCheckbox, setIsDisabledCheckbox] = useState(true);
  const handleChange = () => {
    setIsDisabledButton((current) => !current);
  };
  const handleSelectItem = async (item: string) => {
    setMainHeading(item);
    console.log(item);
    if (item != "Messages") {
      setMessages(
        <p>
          Some placeholder content in a paragraph relating to "{item}
          ".
        </p>
      );
    } else {
      setMessages(<Spinner />);
      await getMessagesDone();
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
    console.log("Main " + val);
    if (!tempValue) setIsDisabledCheckbox(false);
    setTempValue(val);
  };

  async function getMessagesDone() {
    fatchMessages().then((dataJSON) => {
      type parsedType = {
        body: string;
        email: string;
        id: number;
        name: string;
        postId: number;
      };
      const parsedStr = JSON.parse(dataJSON) as parsedType[];

      const tempData: {
        email: string;
        body: string;
      }[] = parsedStr.map(({ email, body }) => ({ email, body }));
      console.log(tempData);
      for (let index in tempData) {
        randomDelay().then(() => {
          data.push(tempData[index]);
          setMessages(
            <Suspense fallback={<Spinner />}>
              <Alert items={data}></Alert>
            </Suspense>
          );
        });
      }
    });
  }

  async function fatchMessages(): Promise<string> {
    return fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
      (response) => response.text()
    );
  }
  async function randomDelay(): Promise<TimerHandler> {
    return new Promise((r: Function) =>
      setTimeout(() => r(), randomInt(1000, 12000))
    );
  }
  const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div>
      <ListGroup
        heading={mainHeading}
        items={items}
        onSelectItem={handleSelectItem}
      >
        {messages}
      </ListGroup>
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

import { useEffect, useState } from "react";
import Spinner from "./Spinner";

type ParsedType = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};
type Message = { email: string; body: string }[];

async function randomDelay(d: any): Promise<TimerHandler> {
  return new Promise((r: Function) =>
    setTimeout(() => r(d), randomInt(0, 4500))
  );
}

const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Messages = () => {
  const [messagesArr, setMessagesArr] = useState<Message>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.text())
      .then(async (dataJSON) => {
        const parsedStr = JSON.parse(dataJSON) as ParsedType[];
        return parsedStr.map(({ email, body }) => ({ email, body }));
      })
      .then((data) =>
        data.forEach((d) =>
          randomDelay(d).then((message: any) => {
            setMessagesArr((messages) => [...messages, message]);
          })
        )
      );
  }, []);

  return (
    <>
      {!messagesArr.length && <Spinner />}
      {messagesArr.map((item, index) => (
        <div key={index} className="alert alert-primary" role="alert">
          <h6 className="alert-heading">{item.email}</h6>
          {item.body}
        </div>
      ))}
    </>
  );
};
export { randomInt };
export default Messages;

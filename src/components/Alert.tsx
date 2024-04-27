import Spinner from "./Spinner";

interface Props {
  items: { email: string; body: string }[];
}

const Alert = ({ items }: Props) => {
  const message = items.length === 0 && <Spinner />;

  return (
    <>
      {message}
      {items.map((item, index) => (
        <div className="alert alert-primary" role="alert">
          <h6 className="alert-heading">{item.email}</h6>
          {item.body}
        </div>
      ))}
    </>
  );
};

export default Alert;

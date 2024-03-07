interface Props {
  children: string;
  isDisabled: boolean;
  onClick: () => void;
}

const Button = ({ children, onClick, isDisabled }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-primary"}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;

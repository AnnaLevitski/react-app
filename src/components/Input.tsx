import React from "react";

interface Props {
  onChange: (val: string) => void;
  value: string;
}
const Input = ({ onChange, value }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      onChange={handleInputChange}
      value={value}
    />
  );
};
export default Input;

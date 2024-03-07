import React from "react";
import { useState } from "react";

interface Props {
  onChange: (val: string) => void;
}
const Input = ({ onChange }: Props) => {
  const handleInputChange = (e: {
    [x: string]: any;
    target: { value: string };
  }) => {
    onChange(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        aria-label="Text input with checkbox"
        onChange={handleInputChange}
      />
    </>
  );
};
export default Input;

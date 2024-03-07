import React from "react";

interface Props {
  onChange: () => void;
  isCheckbox: boolean;
}
const CheckBoxes = ({ isCheckbox, onChange }: Props) => {
  return (
    <>
      <div className="input-group-text">
        <input
          className="form-check-input mt-0"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
          id="flexCheckDisabled"
          disabled={isCheckbox}
          onChange={onChange}
        />
      </div>
    </>
  );
};
export default CheckBoxes;

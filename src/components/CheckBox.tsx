import React from "react";

interface Props {
  onChange: () => void;
  disabled: boolean;
}
const CheckBoxe = ({ disabled, onChange }: Props) => {
  return (
    <div className="input-group-text">
      <input
        className="form-check-input mt-0"
        type="checkbox"
        value=""
        id="flexCheckDisabled"
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};
export default CheckBoxe;

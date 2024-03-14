import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  closeClick: () => void;
}

const Card = ({ children, closeClick }: Props) => {
  return (
    <div className="card">
      <div className="input-group mb-3">
        <div className="card-body">{children}</div>
        <button
          type="button"
          className="btn-close"
          onClick={closeClick}
        ></button>
      </div>
    </div>
  );
};

export default Card;

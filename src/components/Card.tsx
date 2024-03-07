import React, { ReactNode } from "react";
import { useState } from "react";

interface Props {
  children: ReactNode;
  closeClick: () => void;
}

const Card = ({ children, closeClick }: Props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">{children}</div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={closeClick}
        ></button>
      </div>
    </>
  );
};

export default Card;

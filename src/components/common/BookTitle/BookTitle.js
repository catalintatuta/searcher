import React from "react";
import {MyTitle} from "./styled";

const BookTitle = ({url, children}) => {
  return (
    <MyTitle
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </MyTitle>
  );
};

export default BookTitle;

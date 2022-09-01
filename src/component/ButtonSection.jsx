import React from "react";

import * as Button from "../component/Button";

function ButtonSection({ keyID, dataTodos }) {
  return (
    <div className="d-flex gap-sm-3 gap-2 my-3 flex-wrap" key={keyID}>
      <Button.Toggle data={dataTodos} />
      <Button.Edit pathParams={dataTodos.id} />
      <Button.Delete data={dataTodos} />
    </div>
  );
}

export default ButtonSection;

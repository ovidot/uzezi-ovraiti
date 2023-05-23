import React from "react";

const Designer = () => {
  return (
    <div className="col-md-6 ovidot">
      <h1 className="myname" style={{ textAlign: "center", color: "black" }}>
        Designer . Developer{"{"}
        {"}"}
      </h1>
      <p style={{ textAlign: "center", color: "black" }}>
        Equipped with the design, build and experience you need to help you
        represent your brand online and increase your customer satisfaction.{" "}
      </p>
      <div className="row">
        <div className="col">
          <img src="/images/vscode.png" alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Designer;

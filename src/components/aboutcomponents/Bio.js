import React from "react";

const Bio = () => {
  return (
    <>
      <div
        className="row pt-5"
        align="right"
        style={{ justifyContent: "center" }}
      >
        <div
          className="col-md-8"
          style={{ backgroundColor: "skyblue", borderRadius: "20px" }}
        >
          <h1 className="my2name abta"> About Me</h1>
          <h2 className style={{ color: "black" }} align="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Bio;

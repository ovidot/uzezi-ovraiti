import React from "react";

const HomeInfo = () => {
  return (
    <div className="col-md-6" style={{ textAlign: "right" }}>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <p className="subtitle">Get to know me</p>
          <h2 className="subtitle2">Who am i?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 mx-auto" id="whoami" style={{}}>
          <p style={{ color: "black" }}>
            i am a software engineer with a little over a decade of experience.
            Recognized as a practical and effective developer, experienced in
            leading cross-functional teams in a time-pressured setting to
            complete projects on schedule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;

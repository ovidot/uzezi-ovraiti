import React from "react";

const Contactitem = () => {
  return (
    <div className="row " style={{ justifyContent: "center" }}>
      <div className="col-md-6" style={{ backgroundColor: "black" }}>
        <h5 className="codefnt">&lt;html&gt;</h5>
        <h5 className="codefnt">&lt;body&gt;</h5>
        <h5 className="codefnt ps-5" align="left">
          &lt;/h1&gt;
        </h5>
        <h1 className="myname" align="center">
          {" "}
          Uzezi Henry Ovraiti
        </h1>
        <h5 className="codefnt ps-5" align="left">
          &lt;/h1&gt;
        </h5>
      </div>
      <div className="col-md-6">
        <h5 className="codefnt pe-5" align="left">
          &lt;/hr&gt;
        </h5>
        <hr style={{ width: "30vw", height: 2, color: "gray" }} />
        <hr style={{ width: "30vw", height: 2, color: "skyblue" }} />
        <hr style={{ width: "30vw", height: 2, color: "gray" }} />
        <hr style={{ width: "30vw", height: 2, color: "skyblue" }} />
        <hr style={{ width: "30vw", height: 2, color: "gray" }} />
        <h5 className="codefnt pe-5" align="left">
          &lt;/hr&gt;
        </h5>
      </div>
      <div className="col-m6-8" align="center">
        <h6 className="codefnt ps-5" align="left">
          &lt;/p&gt;
        </h6>
        <p className="subtitle"> What's Next?</p>
        <h6 className="codefnt ps-5" align="left">
          &lt;/p&gt;
        </h6>
        <hr style={{ width: "30vw", height: 2, color: "skyblue" }} />
        <h1 className="subtitle2">Get in Touch</h1>
      </div>
      <div className="col-md-7">
        <h5 className="codefnt" align="left">
          &lt;img
        </h5>
        <img src="images/people.png" width="100%;" alt="" />
        <h5 className="codefnt" align="right">
          &gt;
        </h5>
      </div>
      <div className="col-md-6">
        <h5 className="codefnt">&lt;form&gt;</h5>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="username" />
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              placeholder="FullName"
            />
          </div>
          <div>
            <label className="form-label" />
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" />
            <textarea
              type="text"
              id="message"
              className="form-control"
              placeholder="Subject"
            ></textarea>
          </div>
          <h5 className="codefnt" align="left">
            &lt;/button&gt;
          </h5>
          <button type="submit" className="btn col-6" id="sndmsg">
            Start a project
          </button>
          <h5 className="codefnt" align="left">
            &lt;/button&gt;
          </h5>
          <h5 className="codefnt" align="right">
            &lt;/form&gt;
          </h5>
        </form>
      </div>
      <h5 className="codefnt" align="left">
        &lt;/body&gt;
      </h5>
      <h5 className="codefnt" align="left">
        &lt;/html&gt;
      </h5>
    </div>
  );
};

export default Contactitem;

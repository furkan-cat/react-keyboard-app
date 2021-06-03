import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <section className="container d-flex justify-content-around mt-5">
        <div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 helal">ESC</div>
        </div>
        <div className="d-flex">
          <div className="bg-dark p-3 mt-4 text-white rounded-3 me-1 helal">
            F1
          </div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 me-1 helal">
            F2
          </div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 me-1 helal">
            F3
          </div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 helal">F4</div>
        </div>
        <div className="d-flex">
          <div className="bg-dark p-3 mt-4 text-white rounded-3 me-1 helal">
            F5
          </div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 me-1 helal">
            F6
          </div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 me-1 helal">
            F7
          </div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 helal">F8</div>
        </div>
        <div className="d-flex">
          <div className="bg-dark p-3 mt-4 text-white rounded-3 me-1 helal">
            F9
          </div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 me-1 helal">
            F10
          </div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 me-1 helal">
            F11
          </div>
          <div className="bg-dark p-3 mt-4 text-white rounded-3 helal">F12</div>
        </div>
      </section>
      <section className="container d-flex justify-content-around mt-1">
        <div className="bg-dark p-3 text-white rounded-3 me-1 helal">
          `<br />~
        </div>
        <div className="bg-dark p-3 text-white rounded-3 me-1 helal">
          1
        </div>
        <div className="bg-dark p-3 text-white rounded-3 helal">2</div>
        <div className="bg-dark p-3 text-white rounded-3 me-1 helal">
          3
        </div>
        <div className="bg-dark p-3 text-white rounded-3 helal">4</div>
        <div className="bg-dark p-3 text-white rounded-3 me-1 helal">
          5
        </div>
        <div className="bg-dark p-3 text-white rounded-3 helal">6</div>
        <div className="bg-dark p-3 text-white rounded-3 me-1 helal">
          7
        </div>
        <div className="bg-dark p-3 text-white rounded-3 helal">8</div>
        <div className="bg-dark p-3 text-white rounded-3 me-1 helal">
          9
        </div>
        <div className="bg-dark p-3 text-white rounded-3 helal">0</div>
      </section>
    </Fragment>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="container">
        <section className="d-flex justify-content-between mt-5">
          <div>
            <div className="bg-dark p-3 mt-4 text-white rounded-3 helal">
              ESC
            </div>
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
            <div className="bg-dark p-3 mt-4 text-white rounded-3 helal">
              F4
            </div>
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
            <div className="bg-dark p-3 mt-4 text-white rounded-3 helal">
              F8
            </div>
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
            <div className="bg-dark p-3 mt-4 text-white rounded-3 helal">
              F12
            </div>
          </div>
          <div className="d-flex">
            <div className="bg-dark p-3 text-white rounded-3 helal">print</div>
            <div className="bg-dark p-3 text-white rounded-3 helal">del</div>
            <div className="bg-dark p-3 text-white rounded-3 helal">light</div>
          </div>
        </section>

        <section className="d-flex justify-content-between mt-1">
          <div className="bg-dark p-3 text-white rounded-3 me-1 helal">
            `<br />~
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal">1 !</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">2@</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">3#</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">4$</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">5%</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">6^</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">7&</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">8*</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">9(</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">0)</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">-_</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">+=</div>
          <div className="bg-dark p-3 text-white rounded-3 helal bigbtn">
            backspace
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal">page up</div>
        </section>

        <section className="d-flex justify-content-between mt-1">
          <div className="bg-dark p-3 text-white rounded-3 helal smallbtn">
            tab
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal">Q</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">W</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">E</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">R</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">T</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">Y</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">U</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">I</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">O</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">P</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">("}")</div>
          <div className="bg-dark p-3 text-white rounded-3 helal bigbtn">
            \ |
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal">
            page down
          </div>
        </section>

        <section className="d-flex justify-content-between mt-1">
          <div className="bg-dark p-3 text-white rounded-3 me-1 helal mediumbtn">
            caps lock
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal">A</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">S</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">D</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">F</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">G</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">H</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">J</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">K</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">L</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">; :</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">' "</div>
          <div className="bg-dark p-3 text-white rounded-3 helal bigbtn">
            ENTER
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal">home</div>
        </section>

        <section className="d-flex justify-content-between mt-1">
          <div className="bg-dark p-3 text-white rounded-3 me-1 helal bigbtn">
            shift
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal">Z</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">X</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">C</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">V</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">B</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">N</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">M</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">,</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">.</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">/?</div>
          <div className="bg-dark p-3 text-white rounded-3 helal bigbtn">
            shift
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal backspace">
            up
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal backspace">
            end
          </div>
        </section>

        <section className="d-flex justify-content-between mt-1">
          <div className="bg-dark p-3 text-white rounded-3 me-1 helal smallbtn">
            con
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal smallbtn">
            option
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal smallbtn">
            comm
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal space">
            SPACE
          </div>
          <div className="bg-dark p-3 text-white rounded-3 helal">smg</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">fn</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">con</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">left</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">down</div>
          <div className="bg-dark p-3 text-white rounded-3 helal">right</div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;

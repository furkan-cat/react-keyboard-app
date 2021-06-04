const Buttons = () => {
  return (
    <div
      className="container"
      style={{
        width: "1000px",
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        backgroundColor: "black"
      }}
    >
      <div style={{ marginBottom: "100px" }} className="rounded-3">
        <section className="d-flex flex-row mt-5">
          <div
            className="mt-4 p-2 text-white rounded-3 me-1 buttons"
            style={{ backgroundColor: "orangered" }}
          >
            ESC
          </div>
          <div className="light mt-4 text-white rounded-3 me-1 buttons">F1</div>
          <div className="light mt-4 text-white rounded-3 me-1 buttons">F2</div>
          <div className="light mt-4 text-white rounded-3 me-1 buttons">F3</div>
          <div className="light mt-4 text-white rounded-3 me-1 buttons">F4</div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">F5</div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">F6</div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">F7</div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">F8</div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">F9</div>
          <div className="light mt-4 text-white rounded-3 me-1 buttons">
            F10
          </div>
          <div className="light mt-4 text-white rounded-3 me-1 buttons">
            F11
          </div>
          <div className="light mt-4 text-white rounded-3 me-1 buttons">
            F12
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">
            print
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">del</div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">
            light
          </div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div className="dark p-2 text-white rounded-3 me-1 buttons">
            `<br />~
          </div>
          <div className="light text-white rounded-3 me-1 buttons">1 !</div>
          <div className="light text-white rounded-3 me-1 buttons">2@</div>
          <div className="light text-white rounded-3 me-1 buttons">3#</div>
          <div className="light text-white rounded-3 me-1 buttons">4$</div>
          <div className="light text-white rounded-3 me-1 buttons">5%</div>
          <div className="light text-white rounded-3 me-1 buttons">6^</div>
          <div className="light text-white rounded-3 me-1 buttons">7&</div>
          <div className="light text-white rounded-3 me-1 buttons">8*</div>
          <div className="light text-white rounded-3 me-1 buttons">9(</div>
          <div className="light text-white rounded-3 me-1 buttons">0)</div>
          <div className="light text-white rounded-3 me-1 buttons">-_</div>
          <div className="light text-white rounded-3 me-1 buttons">+=</div>
          <div className="dark text-white rounded-3 me-1 buttons backspace">
            backspace
          </div>
          <div className="dark text-white rounded-3 me-1 buttons">up</div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div className="dark p-2 text-white rounded-3 me-1 buttons smallbtn">
            tab
          </div>
          <div className="light text-white rounded-3 me-1 buttons">Q</div>
          <div className="light text-white rounded-3 me-1 buttons">W</div>
          <div className="light text-white rounded-3 me-1 buttons">E</div>
          <div className="light text-white rounded-3 me-1 buttons">R</div>
          <div className="light text-white rounded-3 me-1 buttons">T</div>
          <div className="light text-white rounded-3 me-1 buttons">Y</div>
          <div className="light text-white rounded-3 me-1 buttons">U</div>
          <div className="light text-white rounded-3 me-1 buttons">I</div>
          <div className="light text-white rounded-3 me-1 buttons">O</div>
          <div className="light text-white rounded-3 me-1 buttons">P</div>
          <div className="light text-white rounded-3 me-1 buttons">[</div>
          <div className="light text-white rounded-3 me-1 buttons">]</div>
          <div className="dark text-white rounded-3 me-1 buttons upenter">
            \ |
          </div>
          <div className="dark text-white rounded-3 buttons">down</div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div className="dark p-2 text-white rounded-3 me-1 buttons capslock">
            caps lock
          </div>
          <div className="light text-white rounded-3 me-1 buttons">A</div>
          <div className="light text-white rounded-3 me-1 buttons">S</div>
          <div className="light text-white rounded-3 me-1 buttons">D</div>
          <div className="light text-white rounded-3 me-1 buttons">F</div>
          <div className="light text-white rounded-3 me-1 buttons">G</div>
          <div className="light text-white rounded-3 me-1 buttons">H</div>
          <div className="light text-white rounded-3 me-1 buttons">J</div>
          <div className="light text-white rounded-3 me-1 buttons">K</div>
          <div className="light text-white rounded-3 me-1 buttons">L</div>
          <div className="light text-white rounded-3 me-1 buttons">; :</div>
          <div className="light text-white rounded-3 me-1 buttons">' "</div>
          <div className="dark text-white rounded-3 me-1 buttons enter">
            ENTER
          </div>
          <div className="dark p-2 text-white rounded-3 buttons">home</div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div className="dark p-2 text-white rounded-3 me-1 buttons left-shift">
            shift
          </div>
          <div className="light text-white rounded-3 me-1 buttons">Z</div>
          <div className="light text-white rounded-3 me-1 buttons">X</div>
          <div className="light text-white rounded-3 me-1 buttons">C</div>
          <div className="light text-white rounded-3 me-1 buttons">V</div>
          <div className="light text-white rounded-3 me-1 buttons">B</div>
          <div className="light text-white rounded-3 me-1 buttons">N</div>
          <div className="light text-white rounded-3 me-1 buttons">M</div>
          <div className="light text-white rounded-3 me-1 buttons">,</div>
          <div className="light text-white rounded-3 me-1 buttons">.</div>
          <div className="light text-white rounded-3 me-1 buttons">/ ?</div>
          <div className="dark text-white rounded-3 me-1 buttons smallbtn">
            shift
          </div>
          <div className="light text-white rounded-3 me-1 buttons">up </div>
          <div className="dark text-white rounded-3 me-1 buttons">end</div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div className="dark p-2 text-white rounded-3 me-1 buttons smallbtn">
            con
          </div>
          <div className="dark text-white rounded-3 me-1 buttons smallbtn">
            option
          </div>
          <div className="dark text-white rounded-3 me-1 buttons smallbtn">
            comm
          </div>
          <div className="light text-white rounded-3 me-1 buttons space">
            SPACE
          </div>
          <div className="dark text-white rounded-3 me-1 buttons">smg</div>
          <div className="dark text-white rounded-3 me-1 buttons">fn</div>
          <div className="dark text-white rounded-3 me-1 buttons">con</div>
          <div className="light text-white rounded-3 me-1 buttons">left</div>
          <div className="light text-white rounded-3 me-1 buttons">down</div>
          <div className="light text-white rounded-3 buttons">right</div>
        </section>
      </div>
    </div>
  );
};

export default Buttons;

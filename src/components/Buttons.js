import React, { useEffect } from "react";

const Buttons = () => {
  const keyPressHandler = (e) => {
    if (document.getElementById(e.keyCode)) {
      document.getElementById(e.keyCode).style.background = "red";
      console.log(e.keyCode);
    }
  };

  const keyDownHandler = (e) => {
    if (document.getElementById(e.keyCode)) {
      document.getElementById(e.keyCode).style.background = "";
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", keyDownHandler);
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keyup", keyDownHandler);
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  return (
    <div
      className="container d-flex justify-content-center"
    >
      <div style={{ marginBottom: "100px" }} className="rounded-3">
        <section className="d-flex flex-row mt-5">
          <div
            className="mt-4 p-2 text-white rounded-3 me-1 buttons esc"
            id={27}
          >
            ESC
          </div>
          <div
            className="light mt-4 text-white rounded-3 me-1 buttons"
            id={112}
          >
            F1
          </div>
          <div
            className="light mt-4 text-white rounded-3 me-1 buttons"
            id={113}
          >
            F2
          </div>
          <div
            className="light mt-4 text-white rounded-3 me-1 buttons"
            id={114}
          >
            F3
          </div>
          <div
            className="light mt-4 text-white rounded-3 me-1 buttons"
            id={115}
          >
            F4
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons" id={116}>
            F5
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons" id={117}>
            F6
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons" id={118}>
            F7
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons" id={119}>
            F8
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons" id={120}>
            F9
          </div>
          <div
            className="light mt-4 text-white rounded-3 me-1 buttons"
            id={121}
          >
            F10
          </div>
          <div
            className="light mt-4 text-white rounded-3 me-1 buttons"
            id={122}
          >
            F11
          </div>
          <div
            className="light mt-4 text-white rounded-3 me-1 buttons"
            id={123}
          >
            F12
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">
            print
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons" id={46}>
            del
          </div>
          <div className="dark mt-4 text-white rounded-3 me-1 buttons">
            light
          </div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div className="dark p-2 text-white rounded-3 me-1 buttons" id={192}>
            `<br />~
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={49}>
            1 !
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={50}>
            2@
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={51}>
            3#
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={52}>
            4$
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={53}>
            5%
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={54}>
            6^
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={55}>
            7&
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={56}>
            8*
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={57}>
            9(
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={48}>
            0)
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={189}>
            -_
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={187}>
            +=
          </div>
          <div
            className="dark text-white rounded-3 me-1 buttons backspace"
            id={8}
          >
            backspace
          </div>
          <div className="dark text-white rounded-3 me-1 buttons" id={33}>
            up
          </div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div
            className="dark p-2 text-white rounded-3 me-1 buttons smallbtn"
            id={9}
          >
            tab
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={81}>
            Q
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={87}>
            W
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={69}>
            E
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={82}>
            R
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={84}>
            T
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={89}>
            Y
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={85}>
            U
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={73}>
            I
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={79}>
            O
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={80}>
            P
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={219}>
            [
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={221}>
            ]
          </div>
          <div className="dark text-white rounded-3 me-1 buttons upenter">
            \ |
          </div>
          <div className="dark text-white rounded-3 buttons" id={34}>
            down
          </div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div
            className="dark p-2 text-white rounded-3 me-1 buttons capslock"
            id={20}
          >
            caps lock
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={65}>
            A
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={83}>
            S
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={68}>
            D
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={70}>
            F
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={71}>
            G
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={72}>
            H
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={74}>
            J
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={75}>
            K
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={76}>
            L
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={186}>
            ; :
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={222}>
            ' "
          </div>
          <div className="dark text-white rounded-3 me-1 buttons enter" id={13}>
            ENTER
          </div>
          <div className="dark p-2 text-white rounded-3 buttons" id={36}>
            home
          </div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div className="dark p-2 text-white rounded-3 me-1 buttons left-shift">
            shift
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={90}>
            Z
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={88}>
            X
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={67}>
            C
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={86}>
            V
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={66}>
            B
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={78}>
            N
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={77}>
            M
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={188}>
            ,
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={190}>
            .
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={191}>
            / ?
          </div>
          <div
            className="dark text-white rounded-3 me-1 buttons smallbtn"
            id={16}
          >
            shift
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={38}>
            up
          </div>
          <div className="dark text-white rounded-3 me-1 buttons" id={35}>
            end
          </div>
        </section>

        <section className="d-flex flex-row mt-1">
          <div
            className="dark p-2 text-white rounded-3 me-1 buttons smallbtn"
            id={17}
          >
            con
          </div>
          <div className="dark text-white rounded-3 me-1 buttons smallbtn">
            option
          </div>
          <div
            className="dark text-white rounded-3 me-1 buttons smallbtn"
            id={18}
          >
            comm
          </div>
          <div
            className="light text-white rounded-3 me-1 buttons space"
            id={32}
          >
            SPACE
          </div>
          <div className="dark text-white rounded-3 me-1 buttons">smg</div>
          <div className="dark text-white rounded-3 me-1 buttons">fn</div>
          <div className="dark text-white rounded-3 me-1 buttons" id={17}>
            con
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={37}>
            left
          </div>
          <div className="light text-white rounded-3 me-1 buttons" id={40}>
            down
          </div>
          <div className="light text-white rounded-3 buttons" id={39}>
            right
          </div>
        </section>
      </div>
      <input type="text" />
    </div>
  );
};

export default Buttons;

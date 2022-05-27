import { useEffect } from "react";
import greenCheck from "../icons/green_check.ico";

function About(props) {
  const count = 0;
  const setProgress = props.setProgress;

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 500);
    document.title = "TextUtils - About";
  }, [count, setProgress]);

  return (
    <main
      style={{
        backgroundColor: "transparent",
        color: props.theme === "dark" ? "rgb(248,249,250)" : "rgba(0,0,0,0.8)",
      }}
    >
      <div
        className="row justify-content-center py-3 m-0"
        style={{ maxWidth: "100%" }}
      >
        <div className="col-11 col-md-10 col-lg-8">
          <h2>About</h2>
          <div
            className="underlined"
            style={{
              width: "8%",
              height: "2px",
              background: "#0d6efd",
              marginRight: "auto",
              borderRadius: "5px",
              marginBottom: "48px",
            }}
          ></div>
          <p className="fw-bolder mb-4 text-decoration-underline">
            TextUtils provides many of the text features to manipulate text
            easily.
          </p>
          <p className="fw-bolder">Some of its features:</p>
          <ul className="mt-0 ps-0" style={{ listStyleType: "none" }}>
            <li className="h6">
              <img src={greenCheck} alt="" />{" "}
              <span>Text Uppercasing/Lowercasing</span>{" "}
            </li>
            <li className="h6">
              <img src={greenCheck} alt="" /> <span>Text to Speech</span>{" "}
            </li>
            <li className="h6">
              <img src={greenCheck} alt="" />{" "}
              <span>Text Encoding/Decoding</span>{" "}
            </li>
            <li className="h6">
              <img src={greenCheck} alt="" /> <span>Extra Spaces Removal</span>{" "}
            </li>
            <li className="h6">
              <img src={greenCheck} alt="" /> <span>and much more ..</span>{" "}
            </li>
          </ul>
          <p className="fst-italic fw-bolder mt-4">
            "Designed & Coded by{" "}
            <a
              className="text-decoration-none"
              href="https://github.com/mohit-kwatra"
              target="_blank"
              rel="noreferrer"
            >
              Mohit Kwatra
            </a>
            "
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;

import React, { useState, useEffect } from "react";
import Button from "./Button";

function TextForm(props) {
  const [text, setText] = useState("");
  const count = 0;
  const setProgress = props.setProgress;

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 500);
    document.title = "TextUtils - Home";
  }, [count, setProgress])

  function convertToUppercase() {
    if (text.trim().length === 0) {
      props.showAlert("Invalid Input!", "danger");
    } else {
      setText(text.toUpperCase());
      props.showAlert("Successfully converted to Uppercase!", "success");
    }
  }

  function convertToLowercase() {
    if (text.trim().length === 0) {
      props.showAlert("Invalid Input!", "danger");
    } else {
      setText(text.toLowerCase());
      props.showAlert("Successfully converted to lowercase!", "success");
    }
  }

  function copyText() {
    if (text.trim().length === 0) {
      props.showAlert("What should I copy? 😥", "danger");
    } else {
      const textarea = document.querySelector("textarea");
      textarea.select();
      navigator.clipboard.writeText(text);
    }
  }

  function clearText() {
    if (text.trim().length === 0) {
      props.showAlert("What should I clear? 😥", "danger");
    } else {
      setText("");
    }
  }

  function removeSpaces() {
    if (text.trim().length === 0) {
      props.showAlert("Invalid Input!", "danger");
    } else {
      setText(text.split(/[ ]+/).join(" "));
      props.showAlert("Successfully removed extra spaces!", "success");
    }
  }

  function base64Encode() {
    if (text.trim().length === 0) {
      props.showAlert("Invalid Input!", "danger");
    } else {
      setText(btoa(text));
      props.showAlert("Successfully encoded!", "success");
    }
  }

  function base64Decode() {
    if (text.trim().length === 0) {
      props.showAlert("Invalid Input!", "danger");
    } else {
      setText(atob(text));
      props.showAlert("Successfully decoded!", "success");
    }
  }

  const speak = () => {
    if (text.trim().length === 0) {
      props.showAlert("Invalid Input!", "danger");
    } else {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <main className={props.theme === "dark"? "text-light":"text-dark"}>
          <div
            className="row justify-content-center py-3 m-0"
            style={{ maxWidth: "100%" }}
          >
            <div className="col-11 col-md-10 col-lg-8">
              <div className="form">
                <h3 style={{color: props.theme === "light" && "rgba(0,0,0,0.8)"}}>Simply enter your text and choose operation you want to perform on.</h3>
                <textarea
                  rows="10"
                  className={`form-control rounded-2 my-3 ${props.theme === "dark"? "text-light":"text-dark"}`}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  placeholder="Enter text here .."
                  value={text}
                  style={{
                    backgroundColor:
                      props.theme === "dark" ? "transparent" : "rgb(248,249,250)"
                  }}
                ></textarea>
                <div className="row gy-3">
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <Button
                      text="Convert to Uppercase"
                      color="primary"
                      onclick={convertToUppercase}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <Button
                      text="Convert to Lowercase"
                      color="secondary"
                      onclick={convertToLowercase}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <Button
                      text="Copy Text"
                      color="primary"
                      onclick={copyText}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <Button
                      text="Clear Text"
                      color="secondary"
                      onclick={clearText}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <Button
                      text="Remove Extra Spaces"
                      color="primary"
                      onclick={removeSpaces}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <Button
                      text="Base64 Encode"
                      color="secondary"
                      onclick={base64Encode}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <Button
                      text="Base64 Decode"
                      color="primary"
                      onclick={base64Decode}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <Button
                      text="Text to Speech"
                      color="secondary"
                      onclick={speak}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center py-5 m-0"
            style={{ maxWidth: "100%" }}
          >
            <div className="col-8 col-lg-6">
              <div
                className={`text-report text-center p-3 rounded-2 ${props.theme === "dark"? "text-light":"text-dark bg-light"}`}
                style={{border: props.theme === "dark"? "1px solid #ced4da":"1px solid #ced4da", background: props.theme === "dark" && "transparent"}}
              >
                <h4 style={{color: props.theme === "light" && "rgba(0,0,0,0.8)"}}>Text Report</h4>
                <hr />
                <p className="fst-italic">
                  Total Words:{" "}
                  {text.length > 0 ? text.trim().split(" ").length : "0"}
                </p>
                <p className="fst-italic">Total Letters: {text.length}</p>
              </div>
            </div>
          </div>
    </main>
  );
}

export default TextForm;

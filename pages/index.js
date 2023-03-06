import { useRef, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [feebackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;
    const reqBody = { email, text: feedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeeback() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }

  return (
    <div className={styles.container}>
      <h1>Hello Next World!</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your email address</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeeback}>Load feeback</button>
      <ul>
        {feebackItems.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

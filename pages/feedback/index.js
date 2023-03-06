import { Fragment, useState } from "react";
import { buildFeebackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  const [feebackData, setFeedbackData] = useState();

  function loadFeebackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.feedback));
  }
  return (
    <Fragment>
      {feebackData && <p>{feebackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.text}>
            {item.text}
            <button onClick={loadFeebackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeebackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;

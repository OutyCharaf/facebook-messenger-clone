import React from "react";
import "./Message.css";

function Message(props) {
  const isUser = props.user === props.message.user;
  return (
    <React.Fragment>
      <div className="date-time text-center mb-3">{props.message.dateTime}</div>
      <div className={isUser ? "card user-message text-light mb-5": "card message text-dark mb-3"}>
        <p className="card-text mt-2 mb-2 ml-4 mr-4">{props.message.text}</p>
      </div>
    </React.Fragment>
  );
}

export default Message;

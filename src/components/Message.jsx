import React from "react";
import "./Message.css";

function Message(props) {
  const isUser = props.user === props.message.user;
  return (
    <React.Fragment>
      <div className="date-time text-center">{props.message.dateTime}</div>
      <div className={isUser ? "card user-message text-light mb-3": "card message text-dark mb-3"}>
        <div className="card-body">
          <h5 className="card-title">{props.message.user}</h5>
          <p className="card-text">{props.message.text}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Message;

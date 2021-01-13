import React from 'react';
import "./Messages.css";
import { IconButton } from '@material-ui/core';
import Message from './Message';
import { useEffect, useState } from "react";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import PropTypes from 'prop-types';

function Messages({ user }) {
    
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    
    const addNewMessage = (event) => {
        event.preventDefault();
        const currentdate = new Date();
        let dateTime = 0;
        if (currentdate.getHours()<10 && currentdate.getHours()>=0){
        if(currentdate.getMinutes()<10 && currentdate.getMinutes()>=0){
            dateTime = "0"+currentdate.getHours() + ":0" +currentdate.getMinutes() + ", "
                        +currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear();
        }
        else{
            dateTime = "0"+currentdate.getHours() + ":" +currentdate.getMinutes() + ", "
                        +currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear();
        }
        }
        else{
        if(currentdate.getMinutes()<10 && currentdate.getMinutes()>=0){
            dateTime = currentdate.getHours() + ":0" +currentdate.getMinutes() + ", "
                    +currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear();
        }
        else{
            dateTime = currentdate.getHours() + ":" +currentdate.getMinutes() + ", "
                        +currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear();
        }
        }
        setMessages([...messages, { user: user, text: message, dateTime: dateTime }]);
        setMessage("");
    };

    function scrollToBottom(){
        window.scrollTo(0, document.body.scrollHeight);
    }

    useEffect(()=>{
        scrollToBottom();
    }, [messages]);

    return (
        <div className="container text-center">
            <img
                className="messenger-logo mt-5 mb-4"
                src={process.env.PUBLIC_URL + "/facebook_messenger_logo.png"}
                width="85"
                height="85"
                alt="Facebook Messenger"
            />
            <h3 className="app-title">Facebook Messenger</h3>
            <h4 className="username mt-4">Bienvenue {user}</h4>
            <div className="vertical-space"></div>
            {messages.map((msg) => (
                <Message key={messages.indexOf(msg)} user={user} message={msg}></Message>
            ))}
            <div className="vertical-space"></div>
            <form className="message-form">
                <input
                    className="message-field form-control"
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    type="text"
                    placeholder="Écrivez un message..."
                />
                <IconButton
                    onClick={addNewMessage}
                    disabled={!message}
                    type="submit"
                    color="primary">
                    <SendRoundedIcon/>
                </IconButton>
            </form>
        </div>
    );
}

Messages.propTypes = {
    user: PropTypes.string
}

export default Messages;

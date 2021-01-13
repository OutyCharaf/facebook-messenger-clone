import React, { useEffect, useState } from 'react';
import "./Messages.css";
import Message from './Message';
import { IconButton } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import PropTypes from 'prop-types';

function Messages({ user }) {
    
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    
    function currentDate() {
        let dateTime = 0;
        const currentdate = new Date();
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
        else if(currentdate.getMinutes()<10 && currentdate.getMinutes()>=0){
            dateTime = currentdate.getHours() + ":0" +currentdate.getMinutes() + ", "
                    +currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear();
        }
        else{
            dateTime = currentdate.getHours() + ":" +currentdate.getMinutes() + ", "
                        +currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear();
        }
        return dateTime;
    }
    
    const addNewMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, { user: user, text: message, dateTime: currentDate() }]);
        setMessage("");
    };

    const sendThumbUp = () => {
        setMessages([...messages, { user: user, text: 0x01F44D, dateTime: currentDate() }]);
        setMessage("");
    }

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
                {message ? 
                    <IconButton onClick={addNewMessage} type="submit" color="primary">
                        <SendRoundedIcon/>
                    </IconButton>
                    :
                    <IconButton onClick={sendThumbUp} color="primary">
                        <ThumbUpRoundedIcon/>
                    </IconButton>
                }
            </form>
        </div>
    );
}

Messages.propTypes = {
    user: PropTypes.string
}

export default Messages;

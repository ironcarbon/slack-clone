import React from 'react';
import moment from 'moment';


const isOwnMessage = (message, user) => {
    return message.user.id === user.uid ? 'message_self' : '';
}

const timeFromNow = timestamp => moment(timestamp).fromNow();

const Message = ({ message, user }) => {
    console.log({ message })
    return (

        <React.Fragment>
            <img src={message.user.avatar} />
            <div className={isOwnMessage(message, user)}>
                <p>{message.user.name}</p>
                <p>{timeFromNow(message.timestamp)}</p>
                <p>{message.content}</p>
            </div>

        </React.Fragment>
    )
}

export default Message;
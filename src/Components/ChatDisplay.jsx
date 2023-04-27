import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMessages from './DisplayMessages';



function ChatDisplay() {
    const [messages, setMessages] = useState([]);


    const loadMessages = () => {
        axios.get("http://127.0.0.1:8000/api/messages/users/" + JSON.parse(sessionStorage.getItem('user')).id + "&&" + sessionStorage.getItem('targetUser'))
            .then(function (response) {
                if (response.status === 200) {

                    setMessages(response.data);



                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    useEffect(() => {
        loadMessages();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            loadMessages();
        }, 1000);

        return () => clearInterval(interval);
    }, []);




    return (
        <div>
            {
                messages.map((message) => (
                    <DisplayMessages
                        message={message}
                    />
                ))
            }
        </div >
    )
}


export default ChatDisplay

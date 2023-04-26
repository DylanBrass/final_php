import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function ChatDisplay() {
    const [messages, setMessages] = useState([]);


    const loadMessages = () => {
        axios.get("http://127.0.0.1:8000/api/messages/users/3&&1")
            .then(function (response) {
                if (response.status === 200) {

                    console.log(response.data)
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
        }, 2000);

        return () => clearInterval(interval);
    }, []);




    return (
        <div>
            {
                messages.map((message) => (

                    < div >
                        {message.message.description}
                    </div>
                ))
            }
        </div >
    )
}


export default ChatDisplay

import React from 'react'

function DisplayMessages({ message }) {
    console.log(message)
    return (
        <>
            <div style={message.sender_id === JSON.parse(sessionStorage.getItem('user')).id ? { textAlign: 'right', color: "white", background: "blue" } : { textAlign: 'left' }}
            >
                <p>
                    {message.message.description}
                </p>
                {message.message.image != "" &&
                    <img src={`data:image/jpeg;base64,${message.message.image}`} style={{ width: "100px", height: "100px" }} />
                }
            </div>


        </>
    )
}

export default DisplayMessages
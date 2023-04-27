import React from 'react'

function DisplayMessages({ message }) {
    return (
        <div style={message.sender_id === JSON.parse(sessionStorage.getItem('user')).id ? { textAlign: 'right', color: "white", background: "blue" } : { textAlign: 'left' }}
        >{message.message.description}</div>
    )
}

export default DisplayMessages
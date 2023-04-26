import React from 'react'

function DisplayMessages({ message }) {
    return (
        <div style={message.sender_id == 1 ? { textAlign: 'right' } : { textAlign: 'left' }}
        >{message.message.description}</div>
    )
}

export default DisplayMessages
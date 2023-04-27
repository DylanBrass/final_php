import React from 'react'

function DisplayUsersTemplate({ user }) {
    return (
        <div onClick={() => {
            sessionStorage.setItem('targetUser', user.id)
            console.log(sessionStorage.getItem('targetUser'));
        }
        }
            style={JSON.parse(sessionStorage.getItem('user')).id == user.id ? { display: 'none' } : {}}
        >
            {user.username}
        </div >
    )
}


export default DisplayUsersTemplate

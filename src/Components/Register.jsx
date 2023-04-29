import React from 'react'

import axios from 'axios';


function Register({ onLoginSuccess }) {

    const createUser = (event) => {

        event.preventDefault();

        let username = event.target.username.value;
        let pwd = event.target.pwd.value;
        let fn = event.target.fn.value;
        let ln = event.target.ln.value;
        let age = event.target.age.value;
        let email = event.target.email.value;



        axios.post('http://127.0.0.1:8000/api/users', {
            "username": username,
            "firstName": fn,
            "lastName": ln,
            "age": age,
            "email": email,
            "password": pwd
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log(response);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                    onLoginSuccess(); // Call onLoginSuccess when login is successful
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }


    return (
        <>
            <form onSubmit={createUser}>
                <input
                    placeholder='username'
                    name='username'
                />
                <input
                    placeholder='password'
                    type='password'
                    name='pwd'
                />
                <input
                    placeholder='first name'
                    name='fn'
                />
                <input
                    placeholder='last name'
                    name='ln'
                />
                <input
                    placeholder='age'
                    name='age'
                />
                <input
                    placeholder='email'
                    name='email'
                />

                <button type="submit">create account !</button>

            </form>
        </>
    )
}

export default Register
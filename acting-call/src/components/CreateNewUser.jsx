import React from 'react'
import axios from 'axios'

function CreateNewUser() {
    const handleLogin = async (loginDetails) => {
        await axios.post(`/api/account/register/`, loginDetails).then((res)=> {
            console.log("res.data", res.data)
          })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const username = event.target.username.value;
        handleLogin({ email: email, password: password, username: username});
        console.log(email, password, username)
      };

    

    return (
        <div>
            <form className="text-black" onSubmit={handleSubmit}>
                <input type="email" placeholder="email" name="email"></input>
                <input type="password" name= "password" placeholder="password"></input>
                <input  name= "username" placeholder="username"></input>
                <button className="text-white">submit</button>
            </form>
        </div>
    )
}

export default CreateNewUser

import { useState } from 'react'
import axios from 'axios'
export const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // make a request to log in
    console.log('SUBMIT')
    axios
      .post('http://127.0.0.1:8000/api/auth/token/login/', {
        username: username,
        password: password,
      })
      .then((res) => setAuth(res.data.auth_token, username))
  }

  return (
    <>
      <h2>Hello this is a Login form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            id="username-input"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            id="password-input"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" className="btn" value="Log In" />
        </div>
      </form>
    </>
  )
}

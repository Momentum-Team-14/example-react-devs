import axios from 'axios'
import { useState } from 'react'

export const InputField = () => {
  const [username, setUsername] = useState('')

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div>
      <h1> Smol Form</h1>
      <input type="text" value={username} onChange={handleChange} />
    </div>
  )
}

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    // make a request to log in
    console.log('SUBMIT')
    axios
      .post('http://127.0.0.1:8000/api/auth/token/login/', {
        username: username,
        password: password,
      })
      .then((res) => console.log(res))
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

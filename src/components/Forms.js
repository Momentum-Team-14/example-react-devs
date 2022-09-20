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

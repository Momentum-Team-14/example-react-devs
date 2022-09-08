import { useState } from 'react'
export const App = () => {
  const devs = [
    { name: 'Nathan', expertise: 'React', available: true },
    { name: 'Aziza', expertise: 'Vue, React', available: false },
    { name: 'Alexis', expertise: 'Rust', available: true },
    { name: 'Orlando', expertise: 'React, JavaScript', available: true },
    { name: 'Gary', expertise: 'Flying, JavaScript', available: false },
    { name: 'Corey', expertise: 'React, ReactRouter', available: true },
    { name: 'Jeff', expertise: 'React, Remix', available: true },
  ]

  return (
    <>
      <h1>Developers for Hire! 👩‍💻</h1>
      <div className="dev-list">
        <div>
          {devs.map((dev, index) => (
            <Developer
              name={dev.name}
              expertise={dev.expertise}
              available={dev.available}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const Developer = ({ name, expertise, available }) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    // change the state when the button is clicked
    setExpanded(!expanded)
  }
  return (
    <div style={{ border: '1px solid purple', margin: '10px' }}>
      <p>{name}</p>
      <button onClick={() => handleClick()}>
        {expanded ? 'Less' : 'More'} info
      </button>
      {expanded ? <p>Expertise: {expertise}</p> : ''}
    </div>
  )
}

import { useState } from 'react'
import { devs } from './devData'
export const App = () => {
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

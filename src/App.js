import { useState } from 'react'
import { devs } from './devData'

export const App = () => {
  const [selectedDev, setSelectedDev] = useState(null)

  const handleSelectedDev = (dev) => {
    console.log('handleSelectedDev called 🌺 with ', dev)
    setSelectedDev(dev)
  }

  if (selectedDev) {
    return (
      <DeveloperDetail
        name={selectedDev.name}
        expertise={selectedDev.expertise}
        handleSelectedDev={setSelectedDev}
      />
    )
  }

  return (
    <>
      <h1>Developers for Hire! 👩‍💻</h1>
      <div className="dev-list">
        <div>
          {devs.map((dev, index) => (
            <Developer devObj={dev} key={index} selectDev={handleSelectedDev} />
          ))}
        </div>
      </div>
    </>
  )
}

const Developer = ({ devObj, selectDev }) => {
  return (
    <div
      style={{ border: '1px solid purple', margin: '10px', padding: '5px' }}
      onClick={() => selectDev(devObj)}
    >
      {devObj.name}
    </div>
  )
}

const DeveloperDetail = ({ name, expertise, handleSelectedDev }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleSelectedDev(null)
        }}
      >
        Go Back to List
      </button>
      <p>{name}</p>
      <p>Expertise: {expertise}</p>
    </div>
  )
}

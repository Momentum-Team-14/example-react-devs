import { useState } from 'react'
import { devs } from './devData'
import Developer from './components/Developer'
import DeveloperDetail from './components/DeveloperDetail'

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
        github={selectedDev.github}
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
